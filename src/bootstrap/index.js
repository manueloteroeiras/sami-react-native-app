import setupReduxStore from './setupReduxStore';
import setupPersistence from './setupPersistence';
// import setupAnalytics from './setupAnalytics';
// import setupPushNotifications from './setupPushNotifications';
// import setupDeviceLocale from './setupDeviceLocale';
import setupTopComponent from './setupTopComponent';
import finishBootstrapping from './finishBootstrapping';

export default function () {

  console.log('start bootstrapping');

  let state = {};

  state.config = {
    GCM_SENDER_ID: '0000000000000', //TODO: set real id
    ANALYTICS_TRACKER_ID: 'UA-00000000-1', //TODO: set real id
    //DEBUG OPTIONS
    PURGE_PERSISTENCE: false,
    FORCE_SCENE: 'login-facebook'
  };

  setupReduxStore(state, state.config);
  // setupPushNotifications(state, state.config);
  // setupDeviceLocale(state, state.config);
  setupTopComponent(state, state.config);
  setupPersistence(state, state.config);
  // setupAnalytics(state, state.config);
  finishBootstrapping(state, state.config);

  console.log('bootstrapping ended');

}
