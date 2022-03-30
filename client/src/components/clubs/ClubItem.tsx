import { Club } from "../../interfaces"
import { ListItem } from "../styles/ListItem.styled"
import { Link } from 'react-router-dom'
type ClubItemProps = {
  club: Club
}

export const ClubItem = ({ club }: ClubItemProps) => {
  return (
    <ListItem>
      <Link to={`/clubs/${club.id}`}>
        <p>{club.name}</p>
      </Link>
      <p>({club.nation.nationName})</p>
    </ListItem>
  )
}

