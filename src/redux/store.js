import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slicer/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  blackList: ['user']
};

// const persistedReducer = persistReducer(persistConfig, userSlice)
const rootReducer = combineReducers({
    user:persistReducer(persistConfig, userSlice)
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});


export const persistor = persistStore(store)