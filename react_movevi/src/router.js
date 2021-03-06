import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Product  from './pages/Product/Product'
import New  from './pages/New/New'
import Brand  from './pages/Brand/Brand'
import Software  from './pages/Software/Software'
import Vip  from './pages/Vip/Vip'

const Routes = () => {
    return (
        <Switch>
            <Route  path="/"  component={Home} exact />
            <Route  path="/new" component={New}  />
            <Route  path="/product" component={Product} />
            <Route  path="/software" component={Software} />
            <Route  path="/brand" component={Brand} /> 
            <Route  path="/vip" component={Vip} /> 
        </Switch>       
    )
};

export default Routes;