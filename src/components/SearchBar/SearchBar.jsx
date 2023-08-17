import React from "react";
import styled from "styled-components";

const Input = styled.input`
border: 5px solid green;
`

export default function SearchBar(props) {

   const [id,setId] = React.useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div>
         <button onClick={()=>props.random(id)}>Random</button>
         <Input type='search' onChange={handleChange}  placeholder="id..." />
         <button onClick={()=>(props.onSearch(id))}>Agregar</button>
      </div>
   );
}

