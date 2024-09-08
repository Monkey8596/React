import axios from "axios";
import { createContext, useContext, useState, useEffect, useReducer } from "react";

const RecipeStates = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_RECIPES':
            return {...state, recipes: action.payload};
        case 'ADD_CART':
            return {...state, cart: [...state.cart, action.payload]}
        case 'DELETE_CART': // .filter()
            return {...state, cart: []}
        
    }
}
const initialState = {
    cart: [],
    recipes: []
}

const Context = ({ children }) => {
    // const [cart, setCart] = useState([])
    // const [recipes,setRecipes] = useState([])

    const [state, dispatch] = useReducer(reducer, initialState)

    const apiKey = '7e587bec4dca4dc5b29edb4d2147c907'
    const url =
    'https://api.spoonacular.com/recipes/random?number=10&&apiKey=' + apiKey

    useEffect(()=>{
        axios(url).then((res)=>{
            // setRecipes(res.data.recipes)
            dispatch({type:'GET_RECIPES', payload:res.data.recipes})
        })   
    },[])

    return(
        <RecipeStates.Provider value={{ state, dispatch }}>
            {children}
        </RecipeStates.Provider>
    )

};

export default Context;

export const useRecipeStates = () => useContext(RecipeStates)
