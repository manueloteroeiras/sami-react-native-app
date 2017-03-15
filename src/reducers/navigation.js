import { REHYDRATE } from 'redux-persist/constants'
import { APP_STATE_CHANGED, NET_INFO_CHANGED } from 'react-native-redux-listener';

const initialState = {
  scene: 'home',
  internalError: null,
  appState: 'shutdown',
  appNetInfo: 'online',
  osNotification: 0
};

export default function navigation(state = initialState, action = {}) {

  switch (action.type) {

    case REHYDRATE:
      return {
        ...action.payload.navigation,
        scene: state.scene,
        appState: state.appState,
        appNetInfo: state.appNetInfo,
        internalError: null,
        osNotification: (action.payload.navigation) ? state.osNotification + action.payload.navigation.osNotification : state.osNotification
      };

    case 'APP_INIT_STARTED':
      return {
        ...state,
        scene: 'loading'
      };

    case 'SCENE_FORCED':
      return {
        ...state,
        scene: action.scene
      };

    case 'PUSH_NOTIFICATION_RECEIVED':
      return {
        ...state,
        osNotification: state.osNotification+1
      };

    case 'PUSH_NOTIFICATION_DISMISSED':
      return {
        ...state,
        osNotification: 0,
        scene: 'home'
      };

    case APP_STATE_CHANGED:
      return {
        ...state,
        appState: action.currentState,
        osNotification: (action.currentState == 'active') ? 0 : state.osNotification,
      };

    case NET_INFO_CHANGED:
      return {
        ...state,
        appNetInfo: (action.isConnected) ? 'online' : 'offline',
      };

    case 'HOME_SELECTED':
      return {
        ...state,
        scene: 'home'
      };

    case 'HOME_STARTED':
      return {
        ...state,
        scene: 'home'
      };

    case 'LOGIN_CODE_STARTED':
      return {
        ...state,
        scene: 'login-code'
      };

    case 'LOGIN_FACEBOOK_STARTED':
      return {
        ...state,
        scene: 'login-facebook'
      };

    default:
      return state;

  }

}
