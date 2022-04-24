import { Button } from "@mui/material";
import React from "react";
import "../../App.css";
import cssImage from "../Images/css.png";
import image1 from "../Images/image1.png";
import man1Image from "../Images/man1.jpg";
import man2Image from "../Images/man2.jpg";
import man3Image from "../Images/man3.jpg";
import nodeImage from "../Images/node.png";
import reactImage from "../Images/react.jpg";
import webImage from "../Images/webdevelopment.png";

export default function Home() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-sm mt-5">
          <h1 style={{ color: "blue" }}>Web</h1>
          <h1 style={{ color: "blue" }}>Development</h1>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sed
            magni saepe amet quaerat architecto laborum ex fugiat necessitatibus
            in laudantium tenetur totam ipsa maiores suscipit, sint quasi sit
            culpa fugit voluptatum facilis non expedita quam quo! Consequatur
            ipsa, voluptas modi accusamus iure deserunt aliquid consectetur
            aliquam? Similique, maxime suscipit!
          </p>
          <Button variant="contained" style={{ textTransform: "capitalize" }}>
            Start 14-days Free Trial
          </Button>
        </div>
        <div className="col-sm p-5">
          <img
            src={image1}
            alt="image"
            style={{ width: "100%", margin: "auto" }}
          />
        </div>
      </div>

      <hr />

      <div className="row">
        <h2 className="text-center">
          All-in-one <span style={{ color: "blue" }}>Cloud Software</span>
        </h2>
      </div>

      <hr />

      <div className="row">
        <div className="col-sm-12 col-lg-3 m-4">
          <div
            className="card p-3 shadow-lg"
            style={{
              width: "18rem",
              background: "transparent",
            }}
          >
            <img
              src={cssImage}
              className="card-img-top"
              alt="cssImage"
              style={{ width: "50%", margin: "auto" }}
            />
            <hr />
            <div className="card-body">
              <h5 className="card-title">CSS</h5>
              <p className="card-text">
                CSS is the language we use to style an HTML document. CSS
                describes how HTML elements displayed.
              </p>
              <Button variant="contained">Get Started</Button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 m-4">
          <div
            id="reactCard"
            className="card p-3 shadow-lg"
            style={{
              width: "18rem",
            }}
          >
            <img
              src={reactImage}
              className="card-img-top"
              alt="reactImage"
              style={{ width: "50%", margin: "auto" }}
            />
            <hr />
            <div className="card-body">
              <h5 className="card-title">React</h5>
              <p className="card-text">
                React is a JavaScript Library building for user interface,single
                page applications.
              </p>
              <Button variant="contained">Get Started</Button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3">
          <div className="col-sm-12 col-lg-3 m-4">
            <div
              className="card p-3 shadow-lg"
              style={{
                width: "18rem",
                background: "transparent",
              }}
            >
              <img
                src={nodeImage}
                className="card-img-top"
                alt="nodeImage"
                style={{ width: "50%", margin: "auto" }}
              />
              <hr />
              <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">
                  Node.js® is a JavaScript runtime built on Chrome's V8
                  JavaScript engine.
                </p>
                <Button variant="contained">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="m-5">
        <h6 className="text-center" style={{ color: "blue" }}>
          Testimonial
        </h6>
        <h2 className="text-center">Customer Review's</h2>
      </div>
      <div
        className="row shadow-lg"
        style={{ backgroundColor: " rgba(194, 230, 230, 0.226)" }}
      >
        <div className="col-sm-12 col-lg-3 m-4">
          <div className="card rounded" style={{ width: "18rem" }}>
            <img
              src={man1Image}
              className="card-img-top p-3"
              alt="man1Image"
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                margin: "auto",
              }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h6>Jennifer Ford -Founder</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 m-4">
          <div className="card rounded" style={{ width: "18rem" }}>
            <img
              src={man2Image}
              className="card-img-top p-3"
              alt="man1Image"
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                margin: "auto",
              }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h6>Daniel Lawson -Lead Developer</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 m-4">
          <div className="card rounded" style={{ width: "18rem" }}>
            <img
              src={man3Image}
              className="card-img-top p-3"
              alt="man1Image"
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                margin: "auto",
              }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h6>Michael Craig -Designer</h6>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className="row p-3">
        <div className="col-sm-12 col-lg-6">
          <img
            src={webImage}
            alt="webdevelopmentImage"
            style={{ width: "100%", margin: "auto" }}
          />
        </div>
        <div className="col-sm-12 col-lg-6 p-5">
          <h1 style={{ color: "blue" }}>
            Build the Web App that Everyone Love
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            tenetur perferendis ullam ducimus beatae optio non sit impedit, sunt
            dolorum!
          </p>
          <Button variant="contained">Learn more</Button>
        </div>
      </div>
    </div>
  );
}
