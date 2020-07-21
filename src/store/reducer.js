const initialState = {
  user: {
    name: "Imre",
    favourites: [
      161235,
      67283
    ],
    darkMode: true, 
  },
  pizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
    },
  ],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0,
          },
        ],
      }
    }

    case "TOGGLE_FAVOURITE": {
      // pizzaId.
      const pizzaId = action.payload;
      // is it a favourite already?
      const isFavourite = state.user.favourites.includes(pizzaId);

      const newFavourite = isFavourite
        ? state.user.favourites.filter(id => id !== pizzaId)
        : [...state.user.favourites, pizzaId];

      return {
        ...state,
        user: {
          ...state.user,
          favourites: newFavourite,
        },
      };
    }

    case "TOGGLE_DARK_MODE": {
      return {
        ...state,
        user: { ...state.user, darkMode: !state.user.darkMode },
      };
    }
    default: {
      return state;
    }
  }
  
}
