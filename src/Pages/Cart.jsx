import React from 'react'

const Cart = () => {
  return (
    <div>
         {cart.length >0 &&(
            <>
            <h2>Pedidos a Entregar</h2>
            <ul>
                {cart.map((pedido) => (
                    <li key={pedido.id}> {pedido.tipo} </li>
                    ))}
            </ul>
            </>
        )}
    </div>
  )
}

export default Cart