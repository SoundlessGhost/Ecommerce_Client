/* eslint-disable react/no-unescaped-entities */

import "./notFound.css";
import robot from "../../../assets/robot.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Snake Eye || 404 page</title>
      </Helmet>
      <div className="NotFound__Container">
        <div>
          <p className="NotFound_Tittle">Snake Eye</p>
          <p className="errorMsz">
            <span>404.</span>That's an error .
          </p>
          <p>
            The requested url was not found on this server.{" "}
            <span>
              That's all <br /> we Know.
            </span>
          </p>
          <div className="flex items-center backHome">
            <img
              src="https://cdn-icons-png.flaticon.com/128/152/152351.png"
              alt=""
            />
            <Link to="/">Back to Home</Link>
          </div>
        </div>
        <img src={robot} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
