import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const RecipeStates = createContext();

const Context = ({ children }) => {
    const [cart, setCart] = useState([])
    const [recipes,setRecipes] = useState([])

    const apiKey = '7e587bec4dca4dc5b29edb4d2147c907'
    const url =
    'https://api.spoonacular.com/recipes/random?number=10&&apiKey=' + apiKey

    useEffect(()=>{
        axios(url).then((res)=>{
            setRecipes(res.data.recipes)
        })   
    },[])

    return(
        <RecipeStates.Provider value={{ cart, setCart, recipes}}>
            {children}
        </RecipeStates.Provider>
    )

};

export default Context;

export const useRecipeStates = () => useContext(RecipeStates)
