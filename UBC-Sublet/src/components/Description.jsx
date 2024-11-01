import "./styles/desc.css";
import Contact from "./Contact";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Descrition() {
  window.scroll(0, 0);
  const location = useLocation();
  const [furnished, setfurnished] = useState([]);
  const [utensils, setutensils] = useState([]);
  const [Utilities, setUtilities] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  // const [clickedImageIndex, setClickedImageIndex] = useState(0);
  const [wifi, setWifi] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const openModal = () => {
    // setClickedImageIndex(index);
    setModalOpen(true);
  };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  const { data } = location.state;

  useEffect(() => {
    if (data.amenities && data.amenities.length > 0) {
      if (data.amenities[0].furnished === true) {
        setfurnished("Furnished");
      } else {
        setfurnished("Unfurnished");
      }
    }
    if (data.amenities[0].utensile === true) {
      setutensils("Utensils included");
    } else {
      setutensils("Utensils not included");
    }
    if (data.amenities[0].utilities === true) {
      setUtilities("Utilities included");
    } else {
      setUtilities("Utilities not included");
    }
    if (data.amenities[0].wifi === true) {
      setWifi("Wifi included");
    } else {
      setWifi("Wifi not included");
    }
  }, [data]);

  return (
    <div className="macbook-air-2">
      <div className="desc-img-container">
        <div className="main-img" onClick={() => openModal()}>
          <img src={data.rooms[0]} alt="" className="desc-img" />
        </div>
        <div className="side-images" onClick={() => openModal()}>
          <img src={data.rooms[1]} alt="" className="desc-img" />
          <img src={data.rooms[2]} alt="" className="desc-img" />
          <img src={data.rooms[3]} alt="" className="desc-img" />
          <img src={data.rooms[4]} alt="" className="desc-img" />
        </div>
      </div>

      {modalOpen && (
        <div className="image-slider">
          <Slider {...settings}>
            {data.rooms.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index}`} className="desc-img" />
              </div>
            ))}
          </Slider>
        </div>
      )}

      <div className="form-wrapper">
        <section className="sunny-1br-in-marine-drive-parent">
          <h2 className="sunny-1br-in">{data.location[0].currentLocation}</h2>
          <div className="month1-br4ba">
            ${data.pricing[0].monthlyRent}/month• {data.numberOfRoomsAvailable}
            BR • {data.roomType}
          </div>
        </section>
        <section className="about-this-place-parent">
          <b className="about-this-place">About this place</b>
          <div className="beautiful-and-sunny">{data.description}</div>
        </section>
        <section className="bonus-button-wrapper">
          <div className="bonus-button">
            <div className="line">
              <b className="amenities">Amenities</b>
              <div className="deposit-rent-frame">
                <div className="bonus-button-3">
                  <div className="hover-me">{furnished}</div>
                </div>
                <button className="bonus-button-10">
                  <div className="hover-me">{utensils}</div>
                </button>
                <button className="bonus-button-4">
                  <div className="hover-me">{wifi}</div>
                </button>
                <button className="bonus-button-5">
                  <div className="hover-me">{Utilities}</div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="pricing-parent">
          <b className="pricing">Pricing</b>
          <div className="frame5" />
        </div>
        <div className="name-input-parent">
          <div className="name-input">
            <div className="payment-details">
              <div className="deposit">Deposit</div>
              <div className="price-container">
                ${data.pricing[0].initialDeposit}
              </div>
            </div>
            <div className="payment-details1">
              <div className="first-months-rent">First Month’s Rent</div>
              <div className="div">${data.pricing[0].monthlyRent}</div>
            </div>
          </div>
          <div className="frame6" />
        </div>
        <Contact
          owner_name={data.contactInformation[0].name}
          owner_email={data.contactInformation[0].email}
        />
      </div>
    </div>
  );
}
