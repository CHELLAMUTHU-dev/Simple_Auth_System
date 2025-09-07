import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { UserContext } from "../../context/userContext.jsx";
import "./Login.css";

const Login = ({ handleToggle }) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { url } = useContext(UserContext);
  const login = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${url}/users/login`, userDetails);
    const {data}  = response
    const { message, token } = data;
    toast.success(message);
    Cookies.set("token", token, { expires: 1 }); // expires in 1 day
    navigate("/");
  } catch (error) {
      toast.error(error.response?.data?.message || error.message);

  }
};


  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={login}>
        <h1>Login</h1>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userDetails.email}
            onChange={inputHandler}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={userDetails.password}
            onChange={inputHandler}
            required
          />
        </div>
        <div className="checkbox-input">
          <input
            type="checkbox"
            id="showPassword"
            onClick={() => setShowPassword((prev) => !prev)}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>
        <p>
          New User...?{" "}
          <span className="link" onClick={handleToggle}>
            Register
          </span>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  )
};

export default Login;
