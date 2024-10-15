import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./reducer";
import { bagReducer } from "../backRedux/bagReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
  key: "root", // Key for the persist configuration
  storage, // Use localStorage to persist data
};

// Wrap the rootReducer with persistReducer
const rootReducer = combineReducers({
  reducer,
  bagReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);
