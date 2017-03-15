import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import * as reducers from '../reducers';
import { startInitApp } from '../actions/bootstrapActions';
import createLogger from 'redux-logger';
import { setupRNListener } from 'react-native-redux-listener';

export default function (tempState, config) {

  let logger = createLogger();

  let store = createStore(
    combineReducers(reducers),
    {},
    compose(
      autoRehydrate(),
      setupRNListener({
        monitorAppState: true,
        monitorNetInfo: true,
        monitorKeyboard: true,
        monitorDeepLinks: true,
        monitorBackButton: true,
      }),
      applyMiddleware(thunk.withExtraArgument(tempState), logger)
    )
  );

  store.dispatch(startInitApp());

  tempState.store = store;

}
