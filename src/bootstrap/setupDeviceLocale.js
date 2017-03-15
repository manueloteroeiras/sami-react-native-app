import DeviceInfo from 'react-native-device-info';

import { setDeviceLocale } from '../actions/bootstrapActions';

export default function (tempState, config) {

  let { store } = tempState;

  if (!store) throw new Error('setup device locale requires a redux store present in state');

  store.dispatch(setDeviceLocale(DeviceInfo.getDeviceLocale(), DeviceInfo.getDeviceCountry()));
  
  console.log('device locale and country set');

}
