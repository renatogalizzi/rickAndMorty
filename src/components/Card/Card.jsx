import React from "react"; 
import styled from "styled-components";

const DivCard = styled.div`
border: 3px solid orange;
max-width:170px;
list-style: none;
width:100%;
backdrop-filter:blur(10px);
display:flex;
flex-direction:column;
//background:grey;
border-radius:10px;
height: 50% ;
width: 40%;
font-size:small
`

const ImgCard = styled.img`
border-radius:10px;
border: 2px solid ;
justify-content:center;
align-items:center;
display: block;
margin: auto;
width: 80%;
position:relative;
`

const ButtonStyle = styled.button`
display:inline-block;
//position:relative;
left:0px;
top=0px;
width:30px;
height:30px;`

const H2 = styled.h2`
color:white;
font-size:medium
margin:0px;`

export default function Card(props) {
   return (
      
         <DivCard key={props.id}>
            <ButtonStyle onClick={()=>{props.onClose(props.id)}}>X</ButtonStyle>
            <ImgCard src={props.image} onClick={props.onSelect} alt="Character image" />
            <H2>{props.name}</H2>
            <H2>{props.species}</H2>
            <H2>{props.gender}</H2>
         </DivCard>
      
   );
}
