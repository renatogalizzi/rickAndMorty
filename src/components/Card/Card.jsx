import React from "react"; 
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav} from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import style from "./Card.module.css";



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

export function Card(props) {
   const location = useLocation();
   const myFavorites = useSelector((state)=>state.myFavorites);
   const dispatch = useDispatch();
   
   const [isFav,setIsFav] = useState(false);


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   },[myFavorites,props.id]);
   
   
   
//   const handleFavorite = () => {
//       if (isFav) {
//          dispatch(removeFav(props.id));
//          setIsFav(false);
//          }  
//       if (!isFav)  {
//          dispatch(addFav(props.character));
//          setIsFav(true);
//          }
      //}

const handleFavorite = () => {
   isFav ? dispatch(removeFav(props.id)) : dispatch(addFav(props));
   setIsFav(!isFav);
 }
      
   
   return (
         <div className={style.divCard}>
            {
            isFav ? (
                     <button className={style.cardButton} onClick={handleFavorite}>❤️</button>
                ) : (
                     <button className={style.cardButton} onClick={handleFavorite}>🤍</button>
                  )
            }
            {/* {location.pathname === "/favorites" ? <button class={style.closeBtn} onClick={()=>(dispatch(removeFav(props.id)))}>X</button> : <button class={style.closeBtn} onClick={()=>{props.onClose(props.id)}}>X</button>} */}
            {location.pathname !== "/favorites" && <button className={style.closeBtn} onClick={()=>{props.onClose(props.id)}}>X</button>} 
            {/* <button onClick={()=>{props.onClose(props.id)}}>X</button> */}
            <ImgCard src={props.image} onClick={props.onSelect} alt="Character image" />
            <Link to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      
   );
}

// export const mapDispatchToProps = (dispatch) => {
// return{
//    addFav:(character)=>{dispatch(addFav(character))},
//    removeFav:(id)=>{dispatch(removeFav(id))}
// }
// }

// export function mapStateToProps(state) {
//    return {
//       myFavorites:state.myFavorites,
//    }
// }



// export default connect(mapStateToProps,null)(Card);
export default Card;
