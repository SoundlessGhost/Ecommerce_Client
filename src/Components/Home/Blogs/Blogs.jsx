// import { Link } from "react-router-dom";
import axios from "axios";
import "./Blogs.css";
import { useState } from "react";
import SingleBlogs from "../SingleBlogs/SingleBlogs";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  axios.get("http://localhost:9000/blogs").then((res) => setBlogs(res.data));
  return (
    <>
      <div>
        <div className="grid grid-cols-3 ">
          {blogs.map((blog) => (
            <SingleBlogs key={blog._id} blog={blog}></SingleBlogs>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
