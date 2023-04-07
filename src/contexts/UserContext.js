import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);


const UserContext = ({children}) => {

    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=> {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state change',currentUser);
        })

        return ()=>{
            unsubscribe();
        }

    },[])

    const authInfo = {user,loading,createUser,signIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;