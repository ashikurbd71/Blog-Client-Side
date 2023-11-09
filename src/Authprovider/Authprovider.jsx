import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase';
import axios from 'axios';

export const Authcontex = createContext()
const googleprovider = new GoogleAuthProvider()

const Authprovider = ({children}) => {

 const [user,setUser] = useState(null)
 const [isloading,setLoading] = useState(true)


//  google login

const googlesignin = () => {

    return signInWithPopup(auth,googleprovider)
}

// createuser

const createuser = (email,password) => {
   setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// signinuser

const loginuser = (email,password) => {

    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}


// observer 

useEffect(() => {

    const subscribe = onAuthStateChanged(auth,(currentuser) => {

        const userEmail =currentuser?.email || user?.email
        const loguser ={ 'email': userEmail}
        setLoading(false)
        setUser(currentuser)
        console.log(currentuser)

         if(currentuser){
                axios.post('https://blogsph-server.vercel.app/jwt',loguser,{withCredentials:true})
                .then(res => console.log(res.data))
            }else{

                axios.post('https://blogsph-server.vercel.app/logout',loguser,{withCredentials:true})
                .then(res => console.log(res.data))
            }

        return () => subscribe()
    })


},[])


// logout


const logout = () => {

    signOut(auth)
}
    const info = {
        user ,
        isloading,
        createuser,
        logout,
        loginuser,
        googlesignin
    }
    return (
        <Authcontex.Provider value={info}>
            {children}
        </Authcontex.Provider>
    );
};

export default Authprovider;