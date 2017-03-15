import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Root from '../containers/Root';


export default function (tempState, config) {

  let { store } = tempState;

  class testing extends Component {

    render() {

      return (
        <Provider store={store}>

          <Root />

        </Provider>
      );

    }
  }

  AppRegistry.registerComponent('testing', () => testing);

}
