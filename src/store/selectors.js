export const selectUser = (state) => state.user

export const selectFavourites = (state) => {
  const pizzasWithFavourites = state.pizzas.map((pizza) => ({
    ...pizza,
    isFavourite: state.user.favourites.includes(pizza.id),
  }))
  return pizzasWithFavourites.sort((a, b) => {
    return b.bought - a.bought
  })
}

export const useDarkMode = (state) => state.user.darkMode
