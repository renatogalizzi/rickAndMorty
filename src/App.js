//import './App.css';
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
//import example from './data.js';
import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Favorites from "./components/Favorites/Favorites";

const DivApp = styled.div`
  justify-content: center;
  text-align: center;
  aligs-items: center;
`;

function App() {
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  // const EMAIL="regalizzi@gmail.com";
  // const PASSWORD="123456";

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  // LOGIN HENRY
//   function login(userData) {
//     const { email, password } = userData;
//     const URL = 'http://localhost:3001/rickandmorty/login/';
//     axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
//        const { access } = data;
//        setAccess(data);
//        access && navigate('/home');
//     });
//  }
//LOGIN MIO
  const login = (userData) => {
       //EXPRESS
    const URL = "http://localhost:3001/rickandmorty/login/";
    const { email , password } = userData;
    axios
      .get(`${URL}?email=${email}&password=${password}`)
      .then(({ data }) => {
        if (data.access) {
          const {access} = data;
          setAccess(access);
          navigate("/home");
        } else {
          window.alert("Datos Incorrectos");
        }
      })
      .catch((error) => window.alert(error.message));
  };

  const [characters, setCharacters] = React.useState([]);

  const validateId = (id) => {
    let resp = "";
    if (id > 826) {
      resp = false;
    } else {
      for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === parseInt(id)) resp = true;
      }
      return resp;
    }
  };

  const random = () => {
    onSearch(Math.floor(Math.random() * 827));
  };

  // function onSearch(id) {
  //    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
  //       if (data.name){
  //          if(validateId(id)){
  //             window.alert("El Personaje seleccionado ya Existe xD");
  //          } else
  //          setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //          window.alert('¡No hay personajes con este ID!');
  //       }
  //    });
  // }

  //CON SERVER LOCAL

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        //console.log(data)
        if (data.name) {
          if (validateId(id)) {
            window.alert("El Personaje seleccionado ya Existe xD");
          } else return setCharacters((oldChars) => [...oldChars, data]);
          // } else {
          //    return window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        //console.log(error.status)
        // window.alert(error.request.status +" "+ error.request.response);});;
        window.alert(error.message);
      });
  }
  //https://axios-http.com/es/docs/handling_errors

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== parseInt(id))
    );
  };

  const location = useLocation();

  return (
    <DivApp>
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} random={random} />
      ) : undefined}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/*" element={<Error />}></Route>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </DivApp>
  );
}

export default App;
