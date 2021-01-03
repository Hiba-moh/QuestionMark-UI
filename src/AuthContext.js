import React, {useState, createContext} from 'react';

//declare the context
export const AuthContext = createContext();

//store the states
export const AuthProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const [greet, setGreet] = useState('');
    const [idNumber, setIdNumber] = useState('');


    return(
        <AuthContext.Provider value={{isAuth: [isAuth, setIsAuth], greet: [greet, setGreet], idNumber: [idNumber, setIdNumber]}}>
            {props.children}
        </AuthContext.Provider>
    )
}


