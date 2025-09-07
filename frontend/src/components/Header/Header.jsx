import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import { toast } from 'react-toastify';

const Header = () => {

    const navigate = useNavigate()

    const logout = () => {
        Cookies.remove('token')
        navigate('/auth')
        toast.success("logout Successfully Completed")
    }



  return (
    <div className='header-container'>
      <h1>Simple Authentication</h1>
      <button type='button' onClick={logout}>Logout</button>
    </div>
  )
}

export default Header
