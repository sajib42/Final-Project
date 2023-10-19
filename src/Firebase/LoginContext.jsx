import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
export const userContext = createContext(null)

const LoginContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const singUpUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const singInGoogle = () => signInWithPopup(auth, provider)
    const logOut = () => signOut(auth)

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, currentUser => {
            console.log("sate change")
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSub()
    }, [])

    const userInfo = { user, loading, singInGoogle, createNewUser, singUpUser, logOut }
    console.log(user, "sasdäsdasdsad");
    return (
        <div>
            <userContext.Provider value={userInfo}>
                {children}
            </userContext.Provider>
        </div>
    );
};

export default LoginContext;