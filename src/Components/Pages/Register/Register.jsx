/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "../../PrivatePage/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser, updateUserProfile } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const savedUser = { name: data.name, email: data.email };
            fetch("http://localhost:9000/user", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          })
          .catch((e) => {
            setError(e.message);
          });
        toast("user create successfully");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        reset();
      });
  };

  return (
    <div>
      <Helmet>
        <title>Snake || Register</title>
      </Helmet>
      <div className="registerContainer">
        <p className="bgImages">
          Keep the registration process simple and straightforward. Minimize the
          number of required fields and make it easy for users to complete the
          registration quickly.
        </p>
        <div className="registerSubContainer">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="registerTittle">WelCome</h2>
            <input
              placeholder="Your Name"
              className="input mb-3"
              type="text"
              {...register("name", { required: true })}
            />

            <input
              placeholder="Your Email"
              type="email"
              {...register("email", { required: true })}
              className="input mb-3"
            />

            <input
              placeholder="Your Password"
              type="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "password must be 6 character",
                },
                maxLength: 10,
              })}
              className="input mb-3"
            />

            <input
              placeholder="Photo URL"
              type="text"
              {...register("url", { required: true })}
              className="input mb-3"
            />
            <small className=" text-start text-red-600">
              <p className="ml-4">{errors.password?.message}</p>
            </small>
            <small className=" text-start text-red-600">
              <p className="ml-4">{error.message}</p>
            </small>
            <button>Register</button>
            <h5>
              Already Have An Account?<Link to="/login">Login</Link>
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
