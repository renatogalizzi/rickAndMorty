import React from 'react'; 
import Card from '../Card/Card';
import styled from "styled-components";

const DivCards = styled.div`
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-items: center;
    margin: 50px auto;
    gap:15px;
    justify-content:center;
   //  height: 100%;
   //  width: 100%;
`
export default function Cards(props) {
   return (
      <DivCards>
         {props.characters.map(character => {
         return <Card 
         key={character.id}
         character={character}
         id={character.id} 
         name ={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
         onClose={props.onClose}
         onSelect={() => window.alert('Emulamos que se selecciona la card')}
         />  
      })}
   </DivCards>);
}
