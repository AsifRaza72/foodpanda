// import './App.css';
import Header from './components/Header/Header'
import BodySection1 from  './components/Body/BodySection1'
import Cities from './components/Body/Cities'
import AppSection from './components/Body/AppsSection'
import About from './components/Body/About';
import Footer from './components/Footer/Footer'
import FooterContent from './components/Footer/FooterContent';
import Login from './components/Login/Login';
import { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
// const [showLoginPage,setShowLoginPage]=useState(false);
const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogin = (username, password) => {
    // Add your login logic here
    console.log('Logging in with:', username, password);
    handleCloseModal(); // Close the modal after login
  };


return(
    <>
     <Header onLoginClick={handleShowModal} />
     <Login showModal={showModal} handleClose={handleCloseModal} handleLogin={handleLogin} />
      {/* <Routes>
        <Route path="/" element={<Header onLoginClick={() => setShowLoginPage(true)}/>} />
        <Route path="/login" element={<Login onClose={() => setShowLoginPage(false)}/>} />
      </Routes> */}
  
    <BodySection1/>
    <Cities/>
    <AppSection/>
    <About/>
    <Footer/>
    <FooterContent/>
   

    </>
  );
};

export default App;
