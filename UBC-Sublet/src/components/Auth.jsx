import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, 
    signOut, signInWithEmailAndPassword
    } from "firebase/auth"
  

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABsui21YwsnUrrzZZMEFc4z_BBINYcCPA",
    authDomain: "ubc-sublet.firebaseapp.com",
    projectId: "ubc-sublet",
    storageBucket: "ubc-sublet.appspot.com",
    messagingSenderId: "744862491087",
    appId: "1:744862491087:web:a44f1fe890494086b772ba",
    measurementId: "G-943F4K57XC"
  };
  
initializeApp(firebaseConfig);
const auth = getAuth();

// Function to handle signup form submission
const handleSignupSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('User created:', cred.user);
            e.target.reset();
        })
        .catch((err) => {
            console.error('Error:', err.message);
        });
};

// Function to handle login form submission
const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('User logged in:', cred.user);
            e.target.reset();
        })
        .catch((err) => {
            console.error('Error:', err.message);
        });
};

// Function to handle logout button click
const handleLogoutClick = () => {
    signOut(auth)
        .then(() => {
            console.log('User logged out');
        })
        .catch((err) => {
            console.error('Error:', err.message);
        });
};

export default function Auth() {
    return (
        <>
            <h2>Firebase Auth</h2>

            <form className="signup" onSubmit={handleSignupSubmit}>
                <label htmlFor="signup-email">Email:</label>
                <input type="email" id="signup-email" name="email" />
                <label htmlFor="signup-password">Password:</label>
                <input type="password" id="signup-password" name="password" />
                <button type="submit">Signup</button>
            </form>

            <form className="login" onSubmit={handleLoginSubmit}>
                <label htmlFor="login-email">Email:</label>
                <input type="email" id="login-email" name="email" />
                <label htmlFor="login-password">Password:</label>
                <input type="password" id="login-password" name="password" />
                <button type="submit">Login</button>
            </form>

            <button className="logout" onClick={handleLogoutClick}>
                Logout
            </button>
        </>
    );
}