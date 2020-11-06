import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import registrationReducer from "./registration/registrationReducer";
import contactsReducer from "./contacts/contactsReducers";

const registerConfig = {
  key: "register",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    register: persistReducer(registerConfig, registrationReducer),
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
