import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
/*import New  from './pages/New/New'
import Brand  from './pages/Brand/Brand'
import Software  from './pages/Software/Software'
import Vip  from './pages/Vip/Vip' */

const Routes = () => {
    return (
        <Switch>
            <Route  path="/"  component={Home} exact />
            <Route  path="/order" component={Order}  />
            {/* <Route  path="/product" component={Product} />
            <Route  path="/software" component={Software} />
            <Route  path="/brand" component={Brand} /> 
            <Route  path="/vip" component={Vip} />  */}
        </Switch>       
    )
};

export default Routes;