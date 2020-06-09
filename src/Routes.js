import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { Home, Donate, Contact, Vote } from "./pages";

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
        <Route path="/vote" component={Vote} />
    </Switch>
)

export default Routes;