import { Club } from "../../interfaces"

type ClubItemProps = {
  club: Club
}

export const ClubItem = ({ club }: ClubItemProps) => {
  return (
    <div>
      <h4>{club.name}</h4>
      <h6>{club.fullName}</h6>
      <h6>{club.nickName}</h6>
      <h6>{club.nation.nationName}</h6>
      <h6>{club.stadium.stadiumName}</h6>
    </div>
  )
}

