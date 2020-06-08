import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { Home, Donate, Contact } from "./pages";

const Routes = () => (
    <Switch>
        <Route
            exact
            path="/"
            render={() => {
                return <Redirect to="/home" />
            }}
        />
        <Route path="/home" component={Home} />
        <Route path="/donate" component={Donate} />
        <Route path="/demand" component={Contact} />
    </Switch>
)

export default Routes;