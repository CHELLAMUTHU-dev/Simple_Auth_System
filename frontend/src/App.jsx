import { Route, Routes } from 'react-router-dom'
import  './App.css'
import Auth from './Page/Auth/Auth.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import Home from './Page/Home/Home.jsx'
const App = () =>  (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>
  )


export default App
