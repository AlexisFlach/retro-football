import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const getClubAndPlayers = async (name: string) => {
  const [ club, players ] = await Promise.all([
    api.get(`/clubs/${name}`),
    api.get(`/clubs/${name}/players`),
  ])

  return { club: club.data, players: players.data }
}
