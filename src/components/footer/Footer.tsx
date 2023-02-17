import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import "./footer.css";

type Props = {};

const Footer = (props: Props) => {
  const [country, setCountry] = useState({
    country: "NEPAL",
    flag: <img src="/assets/flags/flag_of_nepal.png" alt="nepal" />,
  });

  const countries: { country: string; flag: any }[] = [
    {
      country: "NEPAL",
      flag: <img src="/assets/flags/flag_of_nepal.png" alt="nepal" />,
    },
    {
      country: "INDIA",
      flag: <img src="/assets/flags/flag_of_india.png" alt="india" />,
    },
    {
      country: "SRI LANKA",
      flag: <img src="/assets/flags/flag_of_sri_lanka.png" alt="sri lanka" />,
    },
    {
      country: "PAKISTAN",
      flag: <img src="/assets/flags/flag_of_pak.png" alt="pakistan" />,
    },
    {
      country: "CHINA",
      flag: <img src="/assets/flags/flag_of_china.png" alt="china" />,
    },
    {
      country: "BHUTAN",
      flag: <img src="/assets/flags/flag_of_bhutan.png" alt="bhutan" />,
    },
    {
      country: "USA",
      flag: <img src="/assets/flags/flag_of_usa.png" alt="USA" />,
    },
  ];

  const handleChange = (e: any) => {
    let name: string = e.target.value;
    let reqCountry = countries.filter((c) => c.country === name);
    let country = {
      country: name,
      flag: reqCountry[0].flag,
    };

    setCountry(country);
  };

  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-content content1">
            <img src="./assets/bottomlogo.png" alt="logo" />
            <div className="location">
              <IoLocationSharp fontSize={"50px"} />
              <p>
                24, Vaishnavi Centre, Raja Park, 51, Dhanana, Panipat, Haryana,
                Pincode-154419
              </p>
            </div>
          </div>

          <div className="footer-content">
            <h4> THE BASICS</h4>
            <p>About Weekend watch</p>
            <p>Contact Us</p>
            <p>Support</p>
            <p>API</p>
          </div>
          <div className="footer-content">
            <h4> GET INVOLVED</h4>
            <p>Contribution Guideline</p>
            <p>Add New Movie</p>
            <p>Add new TV Show</p>
          </div>

          <div className="footer-content">
            <h4> COMMUNITY</h4>
            <p> Guidelines</p>
            <p>Discussions</p>
            <p>Leaderboard</p>
            <p>Tweeter</p>
          </div>
          <div className="footer-content">
            <h4> LEGAL</h4>
            <p> Terms of use</p>
            <p>API terns of use</p>
            <p>Privacy Policy</p>
            <p>Tweeter</p>
          </div>
        </div>
        <div className="bottom-footer">
          <p>
            © 2022 STAR. All Rights Reserved. Weekend watch’s all related Movies
            and TV Shoes are part of copyright.
          </p>

          <div className="select-country">
            <div className="image">{country && country.flag}</div>

            <select
              className="select-btn"
              name="country"
              value={country.country}
              onChange={handleChange}
            >
              {countries.map((c, i: number) => {
                return (
                  <>
                    <option key={i} value={c.country}>
                      {c.country}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
