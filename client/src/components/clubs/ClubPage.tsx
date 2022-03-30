import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getClubAndPlayers } from '../../context/clubs/ClubsActions'
import ClubsContext from '../../context/clubs/ClubsContext'

const ClubPage = () => {
  const { club, players, dispatch } = useContext(ClubsContext)
  const params = useParams()

  useEffect(() => {
    const getdata = async () => {

      const data = await getClubAndPlayers("Juventus")
      dispatch({ type: 'GET_CLUB_AND_PLAYERS', payload: data })
    }
    getdata()
  })
  return (
    <div>ClubPage</div>
  )
}

export default ClubPage