import { persistStore } from 'redux-persist'
import { AsyncStorage } from 'react-native';

export default function (tempState, config) {

  let { store } = tempState;
  let { PURGE_PERSISTENCE } = config;

  if (!store) throw new Error('setup persistence requires a redux store present in state');

  tempState.persistor = persistStore(store, { blacklist: ['messages'], storage: AsyncStorage });

}
