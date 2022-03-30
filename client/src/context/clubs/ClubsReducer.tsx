export const clubsReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_CLUBS':
      return {
        ...state,
        clubs: action.payload
      }
    case 'GET_CLUB_AND_PLAYERS':
      return {
        ...state,
        club: action.payload.club,
        players: action.payload.players
      }
  }
}