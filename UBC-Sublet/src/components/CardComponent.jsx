import { useState } from "react";
import "./styles/card.css";
import DateConvertor from "./DateConvertor";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CardComponent(prop) {
  const navigate = useNavigate();
  // const [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClickDelete = async () => {
    try {
      await axios.delete(
        `https://ubc-sublet.onrender.com/sublets/documents/${prop.item._id}`
      );
      window.location.reload();
      prop.setDeleted(true);
    } catch (error) {
      alert("Error deleting document:" + error);
      // setError("An error occurred while deleting the document");
    }
  };

  const handleClick = (event, data) => {
    const isClickInsideCarousel =
      event.target.closest(".carousel-control-prev") ||
      event.target.closest(".carousel-control-next") ||
      event.target.closest(".save") ||
      event.target.closest(".delete");

    // If the click occurred within the carousel, prevent default behavior
    if (isClickInsideCarousel) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      navigate("/desc", {
        state: { data },
      });
    }
  };
  return (
    <div
      className="container-3-parent"
      onClick={(e) => handleClick(e, prop.item)}
    >
      <div className="cardImg">
        <div
          id={"carouselExampleControlsNoTouching" + prop.item._id}
          className="carousel carousel-dark slide"
          data-bs-touch="false"
        >
          <div
            className="carousel-inner"
            style={{
              height: "100%",
            }}
          >
            {prop.item.rooms.map((room, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img src={room} className="d-block" alt="pic" />
              </div>
            ))}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={
                "#carouselExampleControlsNoTouching" + prop.item._id
              }
              data-bs-slide="prev"
            >
              <div className="carousel-control-wrapper">
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </div>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={
                "#carouselExampleControlsNoTouching" + prop.item._id
              }
              data-bs-slide="next"
            >
              <div className="carousel-control-wrapper">
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </div>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="delete" onClick={handleClickDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
          >
            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
          </svg>
        </div>
        <div className="save" onClick={handleCheckboxChange}>
          <label className="save-container mx-4">
            <input type="checkbox" checked={isChecked} />
            <svg
              className="save-regular"
              xmlns="http://www.w3.org/2000/svg"
              height="0.5em"
              viewBox="0 0 384 512"
            >
              <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path>
            </svg>
            <svg
              className="save-solid"
              xmlns="http://www.w3.org/2000/svg"
              height="0.5em"
              viewBox="0 0 384 512"
            >
              <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
            </svg>
          </label>
        </div>
      </div>

      <div className="container-3">
        <div className="frame">
          <b className="location">{prop.item.location[0].currentLocation}</b>
        </div>
        <div className="frame1">
          <div className="distance">
            {" "}
            {prop.item.numberOfRoomsAvailable}
            BR • {prop.item.roomType}{" "}
          </div>
        </div>
        <div className="frame2">
          <b className="price">
            <span className="span">${prop.item.pricing[0].monthlyRent}</span>
            <span className="mo">/mo</span>
          </b>
        </div>
        <div className="frame3">
          <div className="description">
            {" "}
            1BR/{prop.item.roomType}BA • {prop.item.description}
          </div>
        </div>
        <div className="frame4">
          <div className="duration">
            <span> Available</span>
            <DateConvertor
              start={prop.item.startingSubletDate}
              timePeriod={prop.item.timePeriod}
            />
          </div>
        </div>
      </div>
      {/* </a> */}
    </div>
  );
}
