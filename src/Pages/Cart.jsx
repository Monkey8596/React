import { useRecipeStates } from '../Context/Context'
import Card from '../Components/Card'

const Cart = () => {

  const {state} = useRecipeStates()
  return (
    <div>
      <h2>Recetas Seleccionadas</h2>
      {state.cart.map((recipe) => <Card key={recipe.id} recipe={recipe} /> )}
    </div>
  )
}

export default Cart