import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Main from './layout/Main';
import About from './pages/about/About';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import DestinationDetails from './pages/destination-details/DestinationDetails';
import Home from './pages/home-page/Home';
import PrivateRoute from './router/PrivateRoute';


function App() {
 
  return (
   <div>
      <Toaster
         position="top-center"
         reverseOrder={false}
      />
    <Routes>
       <Route path='/' element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/destination/:id' element={<PrivateRoute><DestinationDetails /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
       </Route>
    </Routes>
   </div>
  );
}

export default App;
