import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import styled from "styled-components";

const DivDetail = styled.div`
color:white;`

export default function Detail () {

    const { id } = useParams();

    const [character , setCharacter] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
            console.log(data);
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <DivDetail>
            <h1>{character.name}</h1>
            <h2>STATUS | {character.status}</h2>
            <h2>SPECIE | {character.species}</h2>
            <h2>ORIGIN | {character.name}</h2>
            <img src={character.image} width="300px" alt={character.name}/>
        </DivDetail>
    );
}