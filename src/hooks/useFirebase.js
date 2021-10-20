import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);       
    }

    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
      };
    
      const handleNameChange = (e) => {
        setName(e.target.value);
      };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError("Password Must be at least 6 characters long.");
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError("Password Must Contain two Upper Case.");
          return;
        }
    
        if (isLogin) {
          processLogin(email, password);
        } 
        else {
          registerNewUser(email, password);
        }
      };

      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            history.push(redirect_url);
            setError("");
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally( () => setIsLoading(false))
      };
    
      const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setError("");
            verifyEmail();
            setUserName();
          })
          .catch((error) => {
            setError(error.message);
          });
      };
    
      const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => {
          console.log(result);
        })
      }
    
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then((result) => {
          console.log(result);
        });
      };
    
      const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then((result) => {
          console.log(result);
        });
      };

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
        error,
        setIsLoading,
        signInUsingGoogle,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        registerNewUser,
        processLogin,
        handleNameChange,
        handleResetPassword,
        logOut
    }
}

export default useFirebase;