import { useContext, useEffect } from "react"
import ClubsContext from '../../context/clubs/ClubsContext'
import { Club } from "../../interfaces"
import { useClubs } from '../../hooks/useClubs'
import { ClubItem } from './ClubItem'
import { FlexRow } from "../styles/Flex.styled"

export const ClubsList: React.FC = () => {

  const { clubs } = useContext(ClubsContext)

  const { getAllClubs } = useClubs();

  useEffect(() => {
    getAllClubs()
  }, [])

  const renderItem = (c: Club) => <ClubItem key={c.id} club={c} />

  return (
    <div>
      <FlexRow>
        <h2>Select Team</h2>
      </FlexRow>
      {clubs.map(renderItem)}
    </div>
  )
}
