//import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
//import example from './data.js';
import styled from "styled-components";
import React, { useState } from 'react';
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import Error from "./components/Error/Error"
import Form from './components/Form/Form';
import {useLocation} from  "react-router-dom";
import { useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import Favorites from './components/Favorites/Favorites';



const DivApp = styled.div`
justify-content:center;
text-align: center;
aligs-items:center
`


function App() {

   const navigate = useNavigate();

   const [access,setAccess] = useState("false");
   const EMAIL="regalizzi@gmail.com";
   const PASSWORD="123456";

   useEffect(() => {
      !access && navigate('/');
   }, [access,navigate]);

   const login = (userData) => {
      if (EMAIL === userData.email && PASSWORD === userData.password) {
         setAccess("true");
         navigate("/home");
   }
   else window.alert("Usuario o contraseña Incorrecto")
}

   const [characters,setCharacters] = React.useState([]);

   const validateId = (id) =>{
      let resp="";
      for (let i=0;i<characters.length;i++){
         if (characters[i].id === parseInt(id)) resp=true;
      }
      return resp;
   }

   const random = () => {
      onSearch(Math.floor(Math.random() * 827));
   }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name){
            if(validateId(id)){
               window.alert("El Personaje seleccionado ya Existe xD");
            } else
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id)=>{
   setCharacters(characters.filter((character)=> character.id !== parseInt(id)))
   }

   
const location = useLocation();

   return (
      <DivApp>
         {location.pathname !== "/" ? <Nav onSearch={onSearch} random={random} /> : undefined }
         <Routes>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
         <Route path="/about" element={<About />}></Route>
         <Route path="/detail/:id" element={<Detail />}></Route>
         <Route path="/*" element={<Error />}></Route>
         <Route path="/" element={<Form login={login}/>}></Route>
         <Route path="/favorites" element={<Favorites />}></Route>
         </Routes>
      </DivApp>
      
   );
}

export default App;


