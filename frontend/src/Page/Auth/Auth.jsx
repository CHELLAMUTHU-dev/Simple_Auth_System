import {useContext, useState} from 'react'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import { UserContext } from '../../context/userContext.jsx'



const Auth = () => {
    const {token} = useContext(UserContext)
    const [isLogin, setIsLogin] = useState(true)

    const handleToggle = () => {
        setIsLogin(!isLogin)
    }


  return (
    <>
    <div>
      {!token && <h2>Please log in or register.</h2>}
      
      {isLogin ? <Login handleToggle={handleToggle} /> : <Register handleToggle={handleToggle} />}
    </div>

        </>
  )
}

export default Auth
