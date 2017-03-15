import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

export function requestPushPermissions() {
  PushNotification._onRegister();
  return { type: 'PUSH_PERMISSIONS_REQUESTED', isPending: PushNotification.isPermissionsRequestPending };
}

export function receivePushNotification(notification) {

  return (dispatch, getState, session) => {

    let { data, userInteraction } = notification;

    if ((Platform.OS === 'ios' && data === null) || (Platform.OS === 'android' && userInteraction)) {
      
      PushNotification.setApplicationIconBadgeNumber(0);
      
      dispatch({ type: 'PUSH_NOTIFICATION_DISMISSED', notification });

    } else {

      dispatch({ type: 'PUSH_NOTIFICATION_RECEIVED', notification });
 
      let { navigation: { osNotification } } = getState();

      PushNotification.localNotification({
        id: '1',
        message: `${osNotification} messages`
      });

      PushNotification.setApplicationIconBadgeNumber(osNotification); 

    }

  } 

} 