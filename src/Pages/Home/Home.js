import React from 'react';
// import { Container } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import HouseRent from '../../Components/HouseRent/HouseRent';
import NavBar from '../../Components/NavBar/NavBar';


const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <HouseRent></HouseRent>
    </>
  );
};

export default Home;