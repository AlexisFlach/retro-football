import { useContext, useEffect } from "react"
import ClubsContext from '../../context/clubs/ClubsContext'
import { Club } from "../../interfaces"
import { useClubs } from '../../hooks/useClubs'
import { ClubItem } from './ClubItem'
import { FlexRow } from "../styles/Flex.styled"
import { getClubs } from "../../context/clubs/ClubsActions"

export const ClubsList: React.FC = () => {

  const { clubs, dispatch } = useContext(ClubsContext)

  // const { getAllClubs } = useClubs();

  useEffect(() => {
    const getAllClubs = async () => {
      const clubs = await getClubs()
      dispatch({ type: 'GET_CLUBS', payload: clubs })
    }
    getAllClubs()
  }, [])

  const renderItem = (c: Club) => <ClubItem key={c.clubId} club={c} />

  return (
    <div>
      <FlexRow>
        <h2>Select Team</h2>
      </FlexRow>
      {clubs.map(renderItem)}
    </div>
  )
}
