import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const DivNav = styled.nav`
width: 100%;
background:gray;
padding:10px;
border-radius:15px
display:flex;
flex-wrap:wrap;
//justify-content:space-between;
opacity:90%;
`
// const DivButtons = styled.button`

// //margin-right:100%;
// display:flex;
// // justify-content:space-around;
// // align-content:space-around;
// `

const DivBar = styled.div`
top:0;
rigth:0;
margin-left:80%`


export default function Nav (props) {
  // const backToHome = () => {
  //   navigate("/home");
  // }
  // const backToAbout = () => {
  //   navigate("/about");
  // }
   return (
    <DivNav>
      <div class={style.divButtons}>
        <Link to={`/about`}>
      <button class={style.navButton}>About</button>
      </Link>
      <Link to={`/home`}>
      <button class={style.navButton}>Home</button>
      </Link>
      <Link to={"/favorites"}>
      <button class={style.navButton}>Favorites</button>
      </Link>
      </div>
      <DivBar>
      <SearchBar onSearch={props.onSearch} random={props.random}/>
      </DivBar>
    </DivNav>
   );
}
