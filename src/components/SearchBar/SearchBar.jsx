import React from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {

   const [id,setId] = React.useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div class={style.divSearch}>
         <div class={style.random}><button class={style.navButton} onClick={()=>props.random(id)}>Random</button></div>
         <input type='search' onChange={handleChange}  placeholder="id..." />
         <button class={style.navButton} onClick={()=>(props.onSearch(id))}>Agregar</button>
      </div>
   );
}

