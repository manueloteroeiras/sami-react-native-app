export function startInitApp() {
  return { type: 'APP_INIT_STARTED' };
}

export function finishInitApp() {
  return { type: 'APP_INIT_FINISHED' };
}

export function setDeviceToken(token) {
  return { type: 'DEVICE_TOKEN_SET', ...token };
}

export function setDeviceLocale(locale, country) {
  return { type: 'DEVICE_LOCALE_SET', locale, country };
}
