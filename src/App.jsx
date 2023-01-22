import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './Pages/About';
import Images from './Pages/Images';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import SharedLayout from './Pages/SharedLayout';
import ImageDetail from './Pages/ImageDetail';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ProtectedRoute from './Pages/ProtectedRoute';

function App() 
{
  const [user, setUser] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<SharedLayout user={user}/>}>
            <Route index element={<Home/>}></Route>
            <Route path='/images' element={<Images/>}></Route>
            <Route path='/images/:imgId' element={<ImageDetail/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/login' element={<Login setUser={setUser}/>}></Route>
            <Route path='/profile' element={
              <ProtectedRoute user={user}>
                <Profile user={user} setUser={setUser}/>
              </ProtectedRoute>
            }></Route>

            <Route path='/*' element={<NotFound/>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App