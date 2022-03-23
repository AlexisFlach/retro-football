import { useContext, useEffect } from "react"
import ClubsContext from '../../context/clubs/ClubsContext'
import { Club } from "../../interfaces"
import { useClubs } from '../../hooks/useClubs'
import { ClubItem } from './ClubItem'

export const ClubsList: React.FC = () => {

  const { clubs } = useContext(ClubsContext)

  const { getAllClubs } = useClubs();

  useEffect(() => {
    getAllClubs()
  }, [])

  const renderItem = (c: Club) => <ClubItem club={c} />

  return (
    <div>
      {clubs.map(renderItem)}
    </div>
  )
}
