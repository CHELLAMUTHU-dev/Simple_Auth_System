import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'

import Cookies from 'js-cookie'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const token = Cookies.get('token')
  const navigate = useNavigate()

    const handleToggle = () => {
        setIsLogin(!isLogin)
    }

    useEffect(() => {
        if(token) navigate('/')
    }, [token])
   
  return (
    <div>      
      {isLogin ? <Login handleToggle={handleToggle} /> : <Register handleToggle={handleToggle} />}
    </div>
  )
}

export default Auth
