const Message = ({customer}) => {
  return (
    <>
        <h4>Muchas Gracias, {customer.name}! </h4>
        <h4>Destino {customer.address} </h4>
        </>
  )
}

export default Message