import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const params = useParams()
  const [recipe,setRecipe] = useState({})
  const [loading,setLoading] = useState(true)

  const apiKey = '7e587bec4dca4dc5b29edb4d2147c907'

  const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`; 
  
  useEffect(()=>{
    axios(url).then((res)=> {
      setRecipe(res.data)
      setTimeout(()=>{setLoading(false)},2000)
    })
    .catch((err)=>{console.log(err);
    })
    ;},[])

  return (
    <div>
      {loading ? "Loading...": 
      (<>
        <h1>{recipe.title}</h1>
        <img src={recipe.image} alt="" />
        <p>{recipe.instructions}</p>
      </>)
      }
    </div>
  )
}

export default Detail