import { combineReducers, configureStore } from "@reduxjs/toolkit";
import uiSettingSlice from "./createSlice/uiSettingSlice";
import { persistReducer, FLUSH, PERSIST, PURGE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
    uiSetting: uiSettingSlice.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: [ "uiSetting" ]
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH,PERSIST, PURGE],
            }
        })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;