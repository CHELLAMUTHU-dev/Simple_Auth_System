import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { UserContext } from '../../context/userContext.jsx';
import './Register.css';


const Login = ({ handleToggle }) => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const { url } = useContext(UserContext);

  const register = async (e) => {
    e.preventDefault();
    try {
     const response = await axios.post(`${url}/users/register`, userDetails); // ✅ await added
      toast.success(response.data.message);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  return (
    <div className='register-container'>
      <form onSubmit={register}>
      <h1>Register</h1>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userDetails.email}
            required
            onChange={inputHandler}
          />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={userDetails.password}
            onChange={inputHandler}
required          />
        </div>
        <div className='checkbox-group'>
          <input type="checkbox" id='showPassword' onClick={() => setShowPassword(prev => !prev)}/>
          <label htmlFor='showPassword'>Show Password</label>
        </div>
      <p>
        Already Have an account...?
        <span className="link" onClick={handleToggle}>
          Login
        </span>
      </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login;
