import React, { useContext, useState } from 'react'
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../AuthContext'


   if (window.performance) {
    if (performance.navigation.type == 1) {
        if(localStorage.getItem('user') == "true"){
            localStorage.setItem('user', true);

        }
     
    } 
  }

function ProtectedRoutes({component: Component, ...rest}) {
      const {isAuth, greet, idNumber} = useContext(AuthContext); //pull all states to be used
   const [isAuthValue, setIsAuthValue] = isAuth;
   const [greetValue, setGreetValue] = greet; //equvilent to setGreet
   const [idNumberValue, setIdNumberValue] = idNumber;

   return <Route {...rest} render={(props) => {
        if(isAuthValue || localStorage.getItem('user') == "true") {
            return <Component />
        }else {
            
          return  <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        }
    }}/>;
}

export default ProtectedRoutes