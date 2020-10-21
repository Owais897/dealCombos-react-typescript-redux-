import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import dataReducer from "./data";

const allReducers = combineReducers({
  data: dataReducer,
});

const middlewares = applyMiddleware(thunk);

const store = createStore(allReducers, middlewares);

export default store;
