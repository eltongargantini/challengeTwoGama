import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Client from '../pages/Client';
import Product from '../pages/Product';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/client" exact component={Client} />
            <Route path="/product" exact component={Product} />
        </Switch>
    );
}