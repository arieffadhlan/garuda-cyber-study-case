import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import thunk from "redux-thunk";

import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";
import offcanvasReducer from "./features/offcanvas/offcanvasSlice";
import transactionReducer from "./features/transaction/transactionSlice";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("session") : createNoopStorage();
const persistConfig = {
  key: "root",
  storage
}

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  offcanvas: offcanvasReducer,
  transaction: transactionReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);