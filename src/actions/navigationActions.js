export function forceScene(scene) {
  return { type: 'SCENE_FORCED', scene };
}

export function startLogInCode() {
  return { type: 'LOGIN_CODE_STARTED' }
}

export function startLogInFacebook() {
  return { type: 'LOGIN_FACEBOOK_STARTED' }
}

export function startHome() {
  return { type: 'HOME_STARTED' }
}

