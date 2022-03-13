

import {  Route, Routes } from "react-router-dom";
import './App.css';

import Home from './Home';
import CharacterDetail from './CharacterDetail';
import Favorite from "./Favorite";

function App() {

 return(

  <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/character/:characterId" element={<CharacterDetail/>} />
        <Route path="/favorite" element={<Favorite/>} />
       
   
  

</Routes>


 )
  // console.log(datos)
  



  
    
 
}

export default App;
