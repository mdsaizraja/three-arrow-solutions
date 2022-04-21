import reducers from "./reducers/index";
import { createStore } from 'redux'

const store = createStore(
  reducers,
  {},
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

export default store;