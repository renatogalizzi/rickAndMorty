//import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
//import example from './data.js';
import styled from "styled-components";
import React from 'react';
import axios from "axios";


const DivApp = styled.div`
justify-content:center;
text-align: center;
aligs-items:center
`


function App() {

   const [characters,setCharacters] = React.useState([]);

   const validateId = (id) =>{
      let resp="";
      for (let i=0;i<characters.length;i++){
         if (characters[i].id == id) resp=true;
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
   

   return (
      <DivApp>
         <Nav onSearch={onSearch} random={random} />
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Cards characters={characters} onClose={onClose}/>
      </DivApp>
      
   );
}

export default App;
