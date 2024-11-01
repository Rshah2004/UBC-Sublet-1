// import pond1 from "../assets/pond1.jpg";
import upload from "../assets/UBC.jpg";
import SearchIcon from "../assets/searchIcon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/search.css";

export default function Search() {
  const [isOnlyUBC, setIsOnlyUBC] = useState(false); // State to track if the input value is "UBC"
  const navigate = useNavigate();
  const [data, setData] = useState({ latitude: "", longitude: "" });

  const handlePlaceChange = async (e) => {
    try {
      const inputValue = e.target.value;

      if (inputValue.trim() !== "") {
        if (inputValue.toUpperCase() != "UBC") {
          setIsOnlyUBC(false);
          const response = await fetch(
            `https://ubc-sublet.onrender.com/search?q=${inputValue + " UBC"}`
          );
          const searchData = await response.json();
          setData(searchData);
        } else {
          setIsOnlyUBC(true); // Set the flag to true if input value is "UBC"
          const response = await fetch(
            `https://ubc-sublet.onrender.com/search?q=${inputValue}`
          );
          const searchData = await response.json();
          setData(searchData);
        }
      } else {
        setIsOnlyUBC(false);
        setData({ latitude: 49.26060520000001, longitude: -123.2459939 }); // set data state values for ubc
      }
    } catch (error) {
      alert("Error:" + error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/searchSubletss", {
      state: { latitude: data.latitude, longitude: data.longitude, isOnlyUBC },
    });
  };

  return (
    <div className="new">
      <div className="slogan" style={{
          position: 'absolute',
          top: '50%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white', 
          textAlign: 'center',
          width: '100%'
      }}>
        <h1>Find the perfect place to sublet at UBC</h1>
      </div>
       <div className="landingpage">

       <form className="searchform"
          style={{
            // top: "82%",
            // left: "10%",
            // right: "50%",
          }}>
      <input className="searchinput" 
              placeholder="Search by address or neighbourhood"
              aria-label="Search by address or neighbourhood"
              onChange={handlePlaceChange} />
      <button className="searchbutton">Search</button>
    </form>
      
        

       </div>
       

      {/* <img
        src={upload}
        id="imgFluid"
        className="img-fluid position-relative"
        alt="Homepage"
      /> */}

    




      {/* <form
        className="search-bar"
        style={{
          top: "82%",
          left: "10%",
          right: "50%",
        }}
      >
        <input
          // className="form-control"
          id="Searching"
          type="search"
          placeholder="Search by address or neighbourhood"
          aria-label="Search by address or neighbourhood"
          onChange={handlePlaceChange}
          style={{
            // backgroundImage: `url(${SearchIcon})`,
            // backgroundPosition: "15px center",
            // backgroundRepeat: "no-repeat",
            // borderRadius: "10px",
            // paddingInline: "24px",
          }}
        />
        <button
          className="btn text-white"
          type="submit"
          id="buttonSearch"
          style={{ borderRadius: "10px" }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </form> */}
  
    </div>
  );
}
