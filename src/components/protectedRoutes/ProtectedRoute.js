import React, { useContext, useState } from 'react'
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../AuthContext'

function ProtectedRoutes({component: Component, ...rest}) {
    const [userObj, setUserObj] = useState('');
    
   

   // const [isAuth, setIsAuth] = useContext(AuthContext);
   const {isAuth, greet, idNumber} = useContext(AuthContext); //pull all states to be used

  

   const [isAuthValue, setIsAuthValue] = isAuth;
   const [greetValue, setGreetValue] = greet; //equvilent to setGreet
   const [idNumberValue, setIdNumberValue] = idNumber;

   localStorage.setItem('user', true);
   const dataStorage = localStorage.getItem('user');
   console.log(dataStorage);

    return <Route {...rest} render={(props) => {
        if(isAuthValue || dataStorage == "true") {
            return <Component />
        }else{
            
          return  <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        }
    }}/>;
}

export default ProtectedRoutes