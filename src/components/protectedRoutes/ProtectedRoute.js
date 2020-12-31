import React, { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../AuthContext'

function ProtectedRoutes({component: Component, ...rest}) {
   // const [isAuth, setIsAuth] = useContext(AuthContext);
   const {isAuth, greet, idNumber} = useContext(AuthContext); //pull all states to be used
   const [isAuthValue, setIsAuthValue] = isAuth;
   const [greetValue, setGreetValue] = greet; //equvilent to setGreet
   const [idNumberValue, setIdNumberValue] = idNumber;

    return <Route {...rest} render={(props) => {
        if(isAuthValue) {
            return <Component />
        }else{
          return  <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        }
    }}/>;
}

export default ProtectedRoutes