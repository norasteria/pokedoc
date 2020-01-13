import { applyMiddleware, createStore } from "redux";

import allReducers from "./reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const middleware = [thunk];
const isLogCollapse = (getState, action, logEntry) => !logEntry.error;

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({ collapsed: isLogCollapse });
  middleware.push(logger);
}

const store = createStore(allReducers, {}, applyMiddleware(...middleware));

export default store;
