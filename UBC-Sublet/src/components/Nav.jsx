import { Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import Logo from "../assets/logo.png"
import Profile from "../assets/profile.png"
import Fav from "../assets/fav.svg"
import Search from "../assets/search.svg"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = "AIzaSyCk4iCG3RB70rBv2uIdPfepGnuRMs17e6U";


export default function Navbar() {
    const navigate = useNavigate();
    const { user, logOut } = UserAuth();
    const [data, setData] = useState({ latitude: "", longitude: "" });


    const handleSignOut = async () => {
        try {
          await logOut();
        } catch (error) {
          console.log(error);
        }
    };
    let shouldNavigate = false; // Declare shouldNavigate outside of handleChange

    const handleChange = async (e) => {
        try {
            const inputValue = e.target.value;
            if (inputValue.trim() !== "") {
                const response = await fetch(
                    `http://localhost:3001/search?q=${inputValue}`
                    );
                const searchData = await response.json();
                setData(searchData);
                shouldNavigate = true; // Set shouldNavigate to true
            } else {
                setData({ latitude: 49.26060520000001, longitude: -123.2459939 }); // set data state values for UBC
                shouldNavigate = false; // Ensure shouldNavigate is false when inputValue is empty
            }
        } catch (error) {
            console.error("Error:", error);
          }
        }
    
    useEffect(() => {
        if (shouldNavigate) { // Only navigate if shouldNavigate is true
            navigate("/searchSubletss"), {
                state: { latitude: data.latitude, longitude: data.longitude },
            }
        }
    }, [shouldNavigate == true]);

        

    return (
        <nav className="navbar navbar-expand-lg shadow-sm fixed-top p-3 bg-white">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-2" />
                    UBC Sublet
                </Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <form className="d-flex ms-auto">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange = {handleChange}
                            style={{ backgroundImage: `url(${Search})`, backgroundPosition: '10px center', backgroundRepeat: 'no-repeat', paddingLeft: '40px' }} />
                    </form>

                    <Link to="/Fav" className="navbar">
                        <img src={Fav} alt="Fav" width="30" height="24" className="d-inline-block align-text-top ms-2" />
                    </Link>
                </div>

                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={Profile} alt="Profile" width="30" height="24" className="d-inline-block align-text-top ms-2" />  
                    </a>
                    <ul className="dropdown-menu">
                        <Link to="/profile" className="dropdown-item ms-3">Profile</Link>
                        <hr className="dropdown-divider" />
                        <div className="dropdown-item ms-1">
                            {user ? (
                                <a onClick={handleSignOut} className="btn">Logout</a>
                            ) : (
                                <Link to="/signin" className="btn">Sign in</Link>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


// WE WILL HAVE TO ADD THIS CODE WHEREEVER WE ARE POSTING A SUBLET IT IS TO CONVERT IMAGE FILE INTO BINARY TO STORE IT INTO THE DATABASE
/*
function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
*/
