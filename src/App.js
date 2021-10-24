import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePageComponent from "./components/HomePage";
import CreateUser from "./pages/CreateUser";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Route path={"/"} exact>
        <HomePageComponent />
      </Route>
      <Route path={"/create-user"} exact>
        <CreateUser />
      </Route>
    </div>
  );
}

export default App;
