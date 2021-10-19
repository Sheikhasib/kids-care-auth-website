import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);       
    }

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    //   };
    
    //   const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    //   };

    // const signInUsingEmailAndPassword = () => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result => {
    //         setUser(result.user) ;
    //     })
    // }

    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {})
        .finally( () => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;