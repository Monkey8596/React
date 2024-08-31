import Card from "../Components/Card";
import { pizzas } from "../Utils/pizzas";
import { useEffect, useState } from "react";
import axios from 'axios'

const titleStyles = {
    backgroundColor: "#ffda92",
    color: "firebrick",
    width: "20%",
    margin: "10px auto",
    borderRadius: "10px",
  };

const Home = () =>{
    const [cart, setCart] = useState([])
    const [recipes,setRecipes] = useState([])

    const apiKey = '7e587bec4dca4dc5b29edb4d2147c907'
    const url =
    'https://api.spoonacular.com/recipes/random?number=10&&apiKey=' + apiKey

    useEffect(()=>{
        axios(url).then((res)=>{
            setRecipes(res.data.recipes)
            console.log(res.data.recipes);
            
        })
        
    },[])

    return (
        <>
        <h1 style={titleStyles}>Lista de Recetas</h1>
        <div className="list-container">
            {recipes.map( (recipe) => (
                <Card key={recipe.id} recipe={recipe} cart={cart} setCart={setCart} />
                ))}
        </div>
        </>
    )
}


export default Home