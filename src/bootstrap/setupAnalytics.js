import GoogleAnalytics from 'react-native-google-analytics-bridge';

export default function(state, config) {

  let { ANALYTICS_TRACKER_ID } = config;

  GoogleAnalytics.setTrackerId(ANALYTICS_TRACKER_ID);

};
