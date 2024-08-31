import { useState } from "react";
import Message from "./Message";

const Form = () => {
  const[customer, setCustomer] = useState({
    name:'',
    address:''
  })
  const [show, setShow] = useState(false)
  const[error,setError] = useState(false)

  const handleChangeName = (event) => {
    setCustomer({...customer, name: event.target.value});
  };

  const handleChangeAddress = (event) => {
    setCustomer({...customer, address: event.target.value});
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    const numberRegex = /[0-9]/
    if (
        customer.name.trim().length > 3 &&
        customer.address.includes(" ") &&
        numberRegex.test(customer.address)
    ) {
        setShow(true)
        setError(false)
    }else{
        setError(true)
    }
}

return (
    <>
    {show ? (
        <Message customer ={customer} />
    ):(
    <>
    <h2>A donde mandamos el envío?</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" value={customer.name} onChange={handleChangeName} />
        <label>Dirección: </label>
        <input type="text" value={customer.address} onChange={handleChangeAddress} />
        <button>Enviar</button>
      </form>
    </>
    )}
    {error ? (
        <h4 style={{color:'red'}}>Verifique bien la informacion</h4>
        ): null} 
    </>
  );
};

export default Form;
