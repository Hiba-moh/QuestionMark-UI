import React, { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../AuthContext'

function ProtectedRoutes({component: Component, ...rest}) {
    const [isAuth, setIsAuth] = useContext(AuthContext);
    return <Route {...rest} render={(props) => {
        if(isAuth) {
            return <Component />
        }else{
          return  <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        }
    }}/>;
}

export default ProtectedRoutes