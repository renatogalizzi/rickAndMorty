import React from "react"; 
import style from "./About.module.css";
//import image from "../../images/about.png";


export default function About() {
    return (
        <div className={style.conteinerAbout}>
            <img src="https://aldescubierto.org/wp-content/uploads/2021/07/Portada_RickyMorty_web.jpg" className={style.imgAbout} alt="AboutImage"></img>
        </div>
    );
 }