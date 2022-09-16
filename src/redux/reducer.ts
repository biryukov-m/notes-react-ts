import { configureStore } from "@reduxjs/toolkit";
import { interfaceReducer } from "./interfaceSlice";
import { notesReducer } from "./notesSlice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    interface: interfaceReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
