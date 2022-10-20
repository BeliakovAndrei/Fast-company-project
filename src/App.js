import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import UsersNav from "./components/usersNav";

const App = () => {
    return <div>
        <NavBar />
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/users/:userId?" component={UsersNav} />
            <Route path="/" exact component={Main} />
        </Switch>
    </div>;
};

export default App;
