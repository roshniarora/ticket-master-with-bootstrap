import thunk from "redux-thunk";
import {
  applyMiddleware,
  compose,
  createStore,
} from "redux";
import rootReducer from "../reducers/rootReducer";
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

const createStoreWithMiddleware =
  composeEnhancers(applyMiddleware(thunk))(
    createStore
  );

export default function configureStore(
  initialState
) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState
  );
  return store;
}
