import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./main.css";

export const Main = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) => {
  return (
    <>
      <div className={lightBg ? "main" : "main darkBg"}>
        <div className="container">
          <div
            className="row main-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__main-text">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__main-subtitle"
                      : "home__main-subtitle dark"
                  }
                >
                  {description}
                </p>

                <Link to="/join">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__main-img-wrapper">
                <img src={img} alt={alt} className="home__main-ing" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button />
    </>
  );
};
