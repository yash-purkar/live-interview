import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case "FOLLOW_USER": return {
      ...state, followers: [...state.followers, action.payload]
    }
    default: return state;
  }
}

export const DataContextProvide = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    followers: []
  })
  return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>
}

export const UseData = () => useContext(DataContext)