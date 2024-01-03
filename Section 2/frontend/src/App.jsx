import React from 'react'
import './App.css';
import Home from './component/Home';
import Signup from './component/Signup';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Notfound from './component/Notfound';
import Eventhandling from './component/Eventhandling';
import StateManagement from './component/StateManagement';
import Page from './component/Page';
import Browseproduct from './component/Browseproduct';
import Todo from './component/Todo';
import Productcard from './component/Productcard';
import { BrowserRouter, Routes, Route, Link,NavLink } from 'react-router-dom'
import Login from './component/Login';

const App = () => {
  return (


    <div>
      <BrowserRouter>
        {/* <Link to="/">Home</Link> */}
          {/* <Link to="/Login">Login</Link> */}
          {/* <Link to="/Sign_up">Sign up</Link> */}
          {/* <Link to="/contact">Contact</Link> */}

          <Navbar/>


          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Signup' element={<Signup />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='*' element={<Notfound />}></Route>
            <Route path='Eventhandling' element={<Eventhandling />}></Route>
            <Route path='StateManagement' element={<StateManagement />}></Route>
            <Route path='Page' element={<Page />}></Route>
            <Route path='Todo' element={<Todo />}></Route>
            <Route path='Browseproduct' element={<Browseproduct />}></Route>
            <Route path='Productcard' element={<Productcard />}></Route>
          </Routes>


        </BrowserRouter>

        </div>
        )
}

        export default App;