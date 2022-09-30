import { DecoratorFn } from "@storybook/react";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../src/redux/reducer";
import { Provider as StoreProvider } from "react-redux";
import React from "react";

export const withStore: DecoratorFn = (StoryFn, { parameters }) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: parameters.store?.initialState,
  });
  return (
    <StoreProvider store={store}>
      <StoryFn />
    </StoreProvider>
  );
};
