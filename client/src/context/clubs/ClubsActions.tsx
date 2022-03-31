import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const getClubs = async () => {
  const clubs = await api.get(`/api/clubs/`)
  console.log(clubs)
  return clubs.data
}

export const getClub = async (id: number) => {
  const club = await api.get(`/api/clubs/${id}`)
  console.log(club)
  return club
}

export const getClubAndPlayers = async (id: number) => {
  console.log("Trying to get club Players")
  const [ club, players ] = await Promise.all([
    api.get(`/api/clubs/${id}`),
    api.get(`/api/clubs/${id}/players`),
  ])
  console.log(club, players)

  return { club: club.data, players: players.data }
}
