import React from "react";
import "./App.css";
import logo from "./images/Screenshot 2023-11-08 222001.png"
import abhikar from "./images/WhatsApp Image 2023-11-08 at 10.57.08 PM.jpeg";
import anuj from "./images/WhatsApp Image 2023-11-08 at 9.45.26 PM.jpeg";
import ansh from "./images/WhatsApp Image 2023-11-08 at 9.50.33 PM.jpeg";
import utkarsh from "./images/WhatsApp Image 2023-11-08 at 10.03.54 PM.jpeg";
import ayush from "./images/WhatsApp Image 2023-11-08 at 10.23.57 PM.jpeg"
export default function App() {
  const navigateToExternalWebsite = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div className="full">
        <div className="logo">
          <img
          style={{height: '10vh'}}
            src={logo}
            alt="something"
          />
        </div>
        <h1 className="head">CONTACT US ON LINKEDIN</h1>
        <div className="main">
          <div
            onClick={() =>
              navigateToExternalWebsite(
                "https://www.linkedin.com/in/abhikar-neekhra-88226022a/"
              )
            }
            className="Element"
          >
            <img
              src={abhikar}
              alt="ele"
            />
            <p className="texx">Abhikar Neekhra</p>
            <p className="texx2">Android Developer</p>
          </div>
          <div
            onClick={() =>
              navigateToExternalWebsite("https://www.linkedin.com/in/ajr09182/")
            }
            className="Element"
          >
            <img
              src={anuj}
              alt="ele"
            />
            <p className="texx">Anuj Rathor</p>
            <p className="texx2">Full Stack Developer</p>
          </div>
          <div
            onClick={() =>
              navigateToExternalWebsite(
                "https://www.linkedin.com/in/ansh-mittal-81120b263/"
              )
            }
            className="Element"
          >
            <img
              src={ansh}
              alt="ele"
            />
            <p className="texx">Ansh gupta</p>
            <p className="texx2">Web Developer</p>
          </div>

          <div
            onClick={() =>
              navigateToExternalWebsite(
                "https://www.linkedin.com/in/utkarsh-gupta-075908223/"
              )
            }
            className="Element"
          >
            <img
              src={utkarsh}
              alt="ele"
            />
            <p className="texx">Utkarsh Gupta</p>
            <p className="texx2">Django Developer</p>
          </div>

          <div
            onClick={() =>
              navigateToExternalWebsite(
                "https://www.linkedin.com/in/ayush-sharma-093a48254/"
              )
            }
            className="Element"
          >
            <img
              src={ayush}
              alt="ele"
            />
            <p className="texx">Ayush Sharma</p>
            <p className="texx2">AIML Developer</p>
          </div>

        </div>
      </div>
    </>
  );
}