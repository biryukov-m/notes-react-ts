import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { interfaceReducer } from "./interfaceSlice";
import { notesReducer } from "./notesSlice";

export const rootReducer = combineReducers({
  notes: notesReducer,
  interface: interfaceReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
