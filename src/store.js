import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from 'reducers'
import { loadState, saveState } from './localStorage';

export const store = createStore(
  reducer,
  loadState(),
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
  saveState(store.getState());
});
