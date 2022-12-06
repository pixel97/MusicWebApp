import React from "react";
import './resources/styles.css';
import Concert from "./bookmyconcert"
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from "react-router";
import LoginComponent from "./bookmyconcert/login";
import RegisterComponent from "./bookmyconcert/register";


const App = () => {
  return (
    <BrowserRouter>    
    <div>
    <Routes>
    <Route index element={<Concert/>}/>
      <Route path="/main/*" element={<Concert/>}/>
      <Route path="/login" element={<LoginComponent/>}/>
      <Route path="/bookmyconcert/register" element={<RegisterComponent/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
