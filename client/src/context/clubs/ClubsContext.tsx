import { createContext, useState, useReducer } from "react";
import { Club } from "../../interfaces";
import { clubsReducer } from "./ClubsReducer";

const initialState = {
  clubs: [],
  club: {},
  players: []
}

const ClubsContext = createContext<any>(initialState);

export const ClubsProvider = ({ children }: { children: React.ReactNode }) => {

  const [ state, dispatch ] = useReducer(clubsReducer, initialState);

  // const [ clubs, setClubs ] = useState<Club[]>(initialState.clubs)

  return <ClubsContext.Provider value={{ ...state, dispatch }}>
    {children}
  </ClubsContext.Provider >
}

export default ClubsContext