import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePageComponent from "./components/HomePage";
import CreateUser from "./pages/CreateUser";
import UserState from "./context/UserState";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <UserState>
        <Route path={"/"} exact>
          <HomePageComponent />
        </Route>
        <Route path={"/create-user"} exact>
          <CreateUser />
        </Route>
        <Route path={"/update-user/:id"} exact>
          <UpdateUser />
        </Route>
      </UserState>
    </div>
  );
}

export default App;
