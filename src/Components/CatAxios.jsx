import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CatAxios = () => {
    const[loading,setLoading] = useState(true)
    const url = 'https://api.thecatapi.com/v1/images/search'
    const [cat,setCat] = useState({})

    useEffect(()=>{
        axios(url).then((res)=>{
            setCat(res.data[0])
            setTimeout(()=>{setLoading(false)},2000)})
    },[])
    

  return (
    <div>
        <img src={cat.url} alt="" width={400} />
    </div>
  )
}

export default CatAxios