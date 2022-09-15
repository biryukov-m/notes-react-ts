import React from "react";
import Main from "./layout/main/Main";
import Header from "./layout/header/Header";

import store from "./redux/store";

console.log("Initial state: ", store.getState());

const App: React.FC = () => (
  <>
    <Header />
    <Main />
  </>
);

export default App;
