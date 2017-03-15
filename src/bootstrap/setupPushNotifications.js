import PushNotification from 'react-native-push-notification';
import { setDeviceToken } from '../actions/bootstrapActions';
import { receivePushNotification, requestPushPermissions } from '../actions/pushActions';

export default function (tempState, config) {

  let { GCM_SENDER_ID } = config;
  let { store } = tempState;

  if (!store) throw new Error('setup push notification requires a redux store present in state');

  let onRegister = (token) => {
    console.log('Device token: ', token);
    store.dispatch(setDeviceToken(token));
  };

  let onNotification = (notification) => {
    console.log('On notification: ', notification);
    let { foreground } = notification;
    if(!foreground) store.dispatch(receivePushNotification(notification));
  };

  PushNotification.configure({
    onRegister,
    onNotification,
    senderID: GCM_SENDER_ID,
    requestPermissions: true
  });

  store.dispatch(requestPushPermissions());

  console.log('push notification configured');

}
