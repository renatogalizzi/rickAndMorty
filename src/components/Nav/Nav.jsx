import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

const DivNav = styled.nav`
//width: 100%;
background:gray;
padding:20px;
border-radius:15px
`

const DivBar = styled.div`
top:0;
rigth:0;
margin-left:80%`


export default function Nav (props) {
   return (
    <DivNav>
      <DivBar>
        <SearchBar onSearch={props.onSearch} random={props.random}/>
      </DivBar>
      </DivNav>
   );
}
