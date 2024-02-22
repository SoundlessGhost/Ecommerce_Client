/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react';

import { Link } from "react-router-dom";

const SingleBlogs = ({ blog }) => {
  const { date, blogsName, button, _id,description } = blog;
  return (
    <div>
      <div className="px-5 py-10 mt-10 bg-slate-50">
        <div className="blogsContainer">
          <h5>{date}</h5>
          <p className="mb-4 mt-2 text-3xl">{blogsName}</p>
          <p>{description.slice(0,400)} ...</p>
          <div className="learnMore mt-3 cursor-pointer">
            <Link to={`/blog/${_id}`}>{button}</Link>
            <img
              className="ml-1"
              src="https://cdn-icons-png.flaticon.com/128/271/271226.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogs;
