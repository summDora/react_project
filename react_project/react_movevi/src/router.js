import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Product  from './pages/Product/Product'
import New  from './pages/New/New'
import Brand  from './pages/Brand/Brand'


const Routes = () => {
    return (
        <Switch>
            <Route  path="/"  component={Home} exact />
            <Route  path="/new" component={New}  />
            <Route  path="/product" component={Product} />
            <Route  path="/brand" component={Brand} />
            
        </Switch>       
    )
};

export default Routes;