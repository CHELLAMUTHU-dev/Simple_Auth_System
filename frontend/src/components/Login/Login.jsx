import React from 'react'

const Login = ({handleToggle}) => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
            <label>Email:</label>
            <input type="email" name="email" />
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password" />
        </div>
      </form>
        <button onClick={handleToggle}>Go to Register</button>
    </div>
  )
}

export default Login
