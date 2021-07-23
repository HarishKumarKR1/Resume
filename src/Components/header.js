import React from "react";
import image from "./photo.jpg";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <div className="header">
      <ul id="menu">
        <Button
          onClick={() => {
            window.location.href = "#skills";
          }}
          className="top-button"
          variant="outlined"
          color="secondary"
        >
          Skills
        </Button>
        <Button
          onClick={() => {
            window.location.href = "#experience";
          }}
          className="top-button"
          variant="outlined"
          color="secondary"
        >
          Experiance
        </Button>
        <Button
          onClick={() => {
            window.location.href = "#achievements";
          }}
          className="top-button"
          variant="outlined"
          color="secondary"
        >
          Achievements
        </Button>
        <Button
          onClick={() => {
            window.location.href = "#education";
          }}
          className="top-button"
          variant="outlined"
          color="secondary"
        >
          Education
        </Button>
        <Button
          onClick={() => {
            window.location.href = "#contact";
          }}
          className="top-button"
          variant="outlined"
          color="secondary"
        >
          Contact
        </Button>
      </ul>
      <h1 className="headText">Harish Kumar K R</h1>
      <p className="role">Front-end Engineer</p>
    </div>
  );
};

export default Header;
