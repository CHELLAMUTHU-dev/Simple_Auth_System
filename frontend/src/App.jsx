import { Route, Routes } from 'react-router-dom'
import  './App.css'
import Auth from './Page/Auth/Auth.jsx'
const App = () =>  (
    <div className='App'>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/auth' element={<Auth/>} />
      </Routes>
    </div>
  )


export default App
