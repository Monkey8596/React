import React, { useEffect, useState } from 'react'

const Pizza_Updated = () => {    
    const[pizza,setPizza] = useState(true)


    useEffect(()=>{
        setTimeout(()=>{setPizza('Pizza')}, 2000)
        console.log('El componente fue actualizado');       
    }, [])

    useEffect(()=>{
        return () => {
            console.log("El component fue desmontado");
        }
    },[])

  return (
    <div>
        <h3> {pizza ? pizza : "Cargando..."} </h3>
    </div>
  )
}

export default Pizza_Updated