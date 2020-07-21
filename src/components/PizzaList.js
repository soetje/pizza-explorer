import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, selectFavourites } from "../store/selectors"

export default function PizzaList() {
  const pizzas = useSelector(selectFavourites)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  
  console.log("what is pizzas", pizzas)

  const onFavouriteClick = (id) => {
    console.log("adding favourite")

    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: id,
    })
  }

  return (
    <div>
      <h1> Pizza Explorer </h1>
      <p>
        Welcome back, <strong> {user.name} </strong>! Your favorite pizzas:
      </p>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <h3> {pizza.name} </h3>
            <p> {pizza.description} </p>
            <h2 onClick={() => onFavouriteClick(pizza.id)}>
              {pizza.isFavourite ? "♥" : "♡"}{" "}
            </h2>
            <p> {pizza.bought} </p>
          </li>
        ))}{" "}
      </ul>
    </div>
  )
}
