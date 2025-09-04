import React from 'react'

const Register = ({handleToggle}) => {
  return (
    <div>
      <h1>Register</h1>
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
        <button onClick={handleToggle}>Go to Login</button>
    </div>
  )
}

export default Register
