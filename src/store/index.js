import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import musicReducer from "./modules/musics/musicsReducers";

import queueReducer from "./modules/queue/queueReducers";
const reducers = combineReducers({
  queueList: queueReducer,
  musics: musicReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
