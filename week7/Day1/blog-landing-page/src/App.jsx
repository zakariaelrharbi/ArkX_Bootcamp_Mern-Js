import React, { useState } from 'react';
import NavBar from './navBar';
import Footer from './Footer';
import BlogMenu from './BlogMenu';
import Herosection from './Herosection';
import Login from './Login';

import './App.css';

const App = ()=> {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };
  return (
    <>   
      <NavBar toggleLoginForm={toggleLoginForm}/>
      <Login showLoginForm={isLoginFormVisible} />
      <Herosection/>
      <BlogMenu/>
      <Footer />

    </>
  );
}

export default App;
