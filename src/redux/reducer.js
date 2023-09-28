import { ADD_FAV,FILTER,REMOVE_FAV,ORDER } from "./actions";

const initialState = {
    myFavorites:[],
    allCharacters:[],
};

const reducerFav = (state=initialState,action) => {
    switch (action.type){
        
        case ADD_FAV:
        return { ...state, 
            myFavorites: action.payload, 
            allCharacters: action.payload,
        };
            
        case REMOVE_FAV:
        return { ...state, 
            myFavorites: action.payload,
            allCharacters: action.payload,
        };

        case FILTER:
            if (action.payload === "All") return {...state,myFavorites:state.allCharacters};
            let filterAllChar = state.allCharacters.filter((char) => char.gender === action.payload);
            return {
                ...state,
                myFavorites: filterAllChar,
            }
        case ORDER:
            let copyAllChar = state.allCharacters.sort((a, b) => {
                if(action.payload === 'A'){
                    return a.id - b.id
                }else if (action.payload === 'D'){
                    return b.id - a.id
                }else{
                    return 0;
                }
              })
            return{
                ...state,
                myFavorites: copyAllChar,
            }
        default:
                return {...state};
    }
}
// case ADD_FAV:
        //     return {...state,
        //         myFavorites:[...state.allCharacters,action.payload],
        //         allCharacters:[...state.allCharacters,action.payload]
        //     };
// case REMOVE_FAV:
        //     let filterArr = state.myFavorites.filter((personaje)=> (personaje.id !== Number(action.payload)));
        //     console.log(filterArr);
        //     return {...state,
        //         myFavorites:filterArr,
        //         allCharacters:filterArr,
        //     };

export default reducerFav;