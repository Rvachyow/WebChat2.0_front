import { configureStore } from "@reduxjs/toolkit";
import { languageReducer } from "./slices/language/languageSlice";
import { userReducer } from "./slices/user/userSlice";
import { friendReducer } from "./slices/friend/friendSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    user: userReducer,
    friend: friendReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;