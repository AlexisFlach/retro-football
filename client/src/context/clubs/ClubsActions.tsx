import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const getClubs = async () => {
  const clubs = await api.get(`/api/clubs/`)
  console.log(clubs)
  return clubs.data
}

export const getClubAndPlayers = async (name: string) => {
  const [ club, players ] = await Promise.all([
    api.get(`/api/clubs/${name}`),
    api.get(`/api/clubs/${name}/players`),
  ])

  return { club: club.data, players: players.data }
}
