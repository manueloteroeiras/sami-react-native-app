import { finishInitApp } from '../actions/bootstrapActions';
import { forceScene } from '../actions/navigationActions';

export default function(tempState, config) {

  let { store, persistor } = tempState;

  let { PURGE_PERSISTENCE, FORCE_SCENE } = config;

  if (!store) throw new Error('finish bootstrapping requires a redux store present in state');

  if (!persistor) throw new Error('finish bootstrapping requires a redux persistor present in state');

  if (PURGE_PERSISTENCE) {
    persistor.purgeAll();
  }

  if (FORCE_SCENE) {
    store.dispatch(forceScene(FORCE_SCENE));
  }

  store.dispatch(finishInitApp());

};
