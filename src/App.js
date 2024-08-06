
import Header from 'C:/Users/rbany/firstapp/src/componets/header';
import { Fragment } from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Footer from './componets/footer';
import Home from '../src/pages/home';
import Booking from "../src/pages/booking"
import Progresses from "../src/pages/inProgreses"



function App() {
  return (
   < Fragment>
   <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/booking' element={<Booking/>}/>
    <Route path='/inprogress' element={<Progresses/>}/>
  </Routes>
    <Footer/>
   </Fragment>

  );
}

export default App;
