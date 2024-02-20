import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="grid grid-cols-3 px-4 py-20 mt-10 bg-slate-50">
      <div className="blogsContainer">
        <h5>October 28, 2020</h5>
        <p className="mb-4 mt-2 text-3xl">Unique Position</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo
          nisi sint fugiat sit? Neque, iure debitis odit mollitia dolor,
          voluptates recusandae dolores culpa vel aliquid quia deleniti
          doloribus ex.
        </p>
        <div className="learnMore mt-3 cursor-pointer">
          <Link to="#">Learn More</Link>
          <img
            className="ml-1"
            src="https://cdn-icons-png.flaticon.com/128/271/271226.png"
            alt=""
          />
        </div>
      </div>
      <div className="blogsContainer">
        <h5>November 29, 2021</h5>
        <p className="mb-4 mt-2 text-3xl">Something Order</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo
          nisi sint fugiat sit? Neque, iure debitis odit mollitia dolor,
          voluptates recusandae dolores culpa vel aliquid quia deleniti
          doloribus ex.
        </p>
        <div className="learnMore mt-3 cursor-pointer">
          <Link to="#">Learn More</Link>
          <img
            className="ml-1"
            src="https://cdn-icons-png.flaticon.com/128/271/271226.png"
            alt=""
          />
        </div>
      </div>
      <div className="blogsContainer">
        <h5>December 30, 2022</h5>
        <p className="mb-4 mt-2 text-3xl">Women Love Shopping</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo
          nisi sint fugiat sit? Neque, iure debitis odit mollitia dolor,
          voluptates recusandae dolores culpa vel aliquid quia deleniti
          doloribus ex.
        </p>
        <div className="learnMore mt-3 cursor-pointer">
          <Link to="#">Learn More</Link>
          <img
            className="ml-1"
            src="https://cdn-icons-png.flaticon.com/128/271/271226.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
