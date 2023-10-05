import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Auth-confiq";


export const AuthContext =createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    // create user email,password
    const createuser =(email,password)=>{
        return createUserWithEmailAndPassword (auth,email,password)
    }
    // sinning with email,password
    const sinigemail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
// sing in with google
const googleAuth = new GoogleAuthProvider()

// google 
const Googlesingin = ()=>{
    return signInWithPopup (auth,googleAuth)
}

// singing out
    const logout =()=>{
        return signOut(auth)
    }
// on auth change
  
   useEffect(()=>{

     onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser)
     })


   },[])


    const AuthInfo={
     Googlesingin,
     sinigemail,
     createuser,
     user,
     logout
    }
    return (
       <AuthContext.Provider value = {AuthInfo}>
       {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;