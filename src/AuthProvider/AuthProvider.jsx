import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from './../firebase.config';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
 
    const createUser = (email,password) => {
       setLoading(true);   
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) => {
       setLoading(true);
       return  signInWithEmailAndPassword(auth,email,password);
        
    }

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then(res => {
            setUser(res);
            setLoading(true);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const logout = () => {
        setLoading(true);
        signOut(auth)
        .then()
        .catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {loginUser,createUser,googleLogin,logout,user,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node
}
export default AuthProvider;