import { createContext, useState } from "react";
import { Club } from "../../interfaces";

const initialState = {
  clubs: [],
  club: {},
  players: []
}

const ClubsContext = createContext<any>(initialState);

export const ClubsProvider = ({ children }: { children: React.ReactNode }) => {
  const [ clubs, setClubs ] = useState<Club[]>(initialState.clubs)

  return <ClubsContext.Provider value={{ clubs, setClubs }}>
    {children}
  </ClubsContext.Provider >
}

export default ClubsContext