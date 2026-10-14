// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web

// import settingsReducer from "./features/settingsSlice";
// import octogramReducer from "./features/octogramSlice";

// // Root reducer combining multiple reducers
// const rootReducer = combineReducers({
//    settings: settingsReducer,
//    octogram: octogramReducer,
// });

// // Configuration for redux-persist
// const persistConfig = {
//    key: "root", // key for the persistor
//    storage, // storage to use, default is localStorage for web
//    // Optionally, you can whitelist specific reducers you want to persist:
//    // whitelist: ["settings"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//    reducer: persistedReducer,
//    // Optionally, add middleware, enhancers, etc.
// });

// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "./features";

export const store = configureStore({
   reducer: {
      account: accountSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
