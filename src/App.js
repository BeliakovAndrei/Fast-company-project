import React from "react";
import NavBar from "./components/ui/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UsersNav from "./components/page/usersNav";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:userId?" component={UsersNav} />
                <Route path="/" exact component={Main} />
            </Switch>
        </div>
    );
};

export default App;
