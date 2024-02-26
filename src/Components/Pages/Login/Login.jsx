import { Link, useLocation, useNavigate } from "react-router-dom";
import user from "../../../assets/user.png";
import "./Login.css";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { UserContext } from "../../PrivatePage/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
  const { signIn, googleSignIn } = useContext(UserContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // state
  const [error, setError] = useState();

  const loginSubmitHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // sign In_Function
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate(from, { replace: true });
        toast("user login successfully");
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        const savedUser = { name: user.displayName, email: user.email };
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

        navigate(from, { replace: true });
        toast("user login successfully");
      })
      .catch((e) => {
        setError(e);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Snake || Login</title>
      </Helmet>
      <div className="LoginContainer">
        <div className="loginDiv">
          <p className="loginTitle">
            Securely Access Your Account And Step Into A World Of
            Possibilities.Your Journey Continues Here .Your Privacy And Security
            Are Our Top Priorities.
          </p>
        </div>
        <div className="form">
          <img src={user} alt="" />
          <p>Welcome</p>
          <form onSubmit={loginSubmitHandler}>
            <input
              placeholder="Your Email"
              type="email"
              name="email"
              required
              className="input"
            />
            <br />
            <br />
            <input
              placeholder="Your Password"
              type="password"
              name="password"
              required
              className="input"
            />
            <br />
            <br />
            <h5>
              New User?<Link to="/register">Register</Link>
            </h5>
            <button className="loginBtn">Login</button>
            <br />
            <h5>Login With Social Media</h5>
            <p
              onClick={handleGoogleSignIn}
              className="google text-center font-serif"
            >
              G
            </p>
            <small>
              <h5 className="error">{error}</h5>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
