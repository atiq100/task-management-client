import {  createUserWithEmailAndPassword, getAuth,   onAuthStateChanged,   signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';




export const AuthContext = createContext()

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const providerLogin = (provider)=>{
        setLoading(false)
        return signInWithPopup(auth,provider)
    }

    const logout = ()=>{
        setLoading(false)
        return signOut(auth)
    }
    const createUser =(email,password)=>{
        //setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const signIn = (email,password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
     }
     const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser,profile)
     }

    //  const varifyEmail =()=>{
    //     return sendEmailVerification(auth.currentUser)
    //  }

    useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    
    }, [])

    const authInfo = {createUser,signIn,updateUserProfile,providerLogin,logout,user,loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;