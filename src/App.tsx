import React from "react";
import Main from "./layout/main/Main";
import Header from "./layout/header/Header";

const App: React.FC = () => (
  <div className="max-w-6xl my-0 mx-auto">
    <Header />
    <Main />
  </div>
);

export default App;
