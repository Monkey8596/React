import React, { useEffect, useState } from 'react'

const DogFech = () => {
    const url = 'https://dog.ceo/api/breeds/image/random'

    const[dog,setDog] = useState({})

    useEffect(() =>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setDog(data)
    })
    },[])  

  return (
    <div>
        <img src={dog.message} alt="" width={400}/>
    </div>
  )
}

export default DogFech