import { Card } from "../Card/Card";
import { useSelector,useDispatch} from 'react-redux';
import { useState } from "react";
import {filterCards, orderCards } from "../../redux/actions";
import style from "./Favorites.module.css";

// const DivCards = styled.div`
//     display: flex;
//     flex-wrap:wrap;
//     flex-direction:row;
//     justify-items: center;
//     margin: 50px auto;
//     gap:15px;
//     justify-content:center;
// `


export function Favorites () {

    const [aux, setAux] = useState(false);

    const myFavorites=useSelector(state => state.myFavorites)
    const dispatch=useDispatch();

    const handleOrder = (e)=>{
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    }

    const handleFilter= (e)=>{
        dispatch(filterCards(e.target.value))
    }
    
    
    return (
        <div>
    <div className={style.divSelect}>
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="All">Todos</option>
      </select>
      </div>
    <div className={style.divCards}>

        {myFavorites.map((character)=>{ 
        return <Card 
         key={character.id}
         id={character.id} 
         name ={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         image={character.image}
         />})}
    </div>
    </div>
        
    );
}

// export function mapStateToProps(state) {
//     return {
//        myFavorites:state.myFavorites,
//     }
//  }

// export default connect(mapStateToProps,null)(Favorites);
export default Favorites;