import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ClubsContext from '../../context/clubs/ClubsContext'

const ClubPage = () => {
  const { club } = useContext(ClubsContext)
  const params = useParams()

  useEffect(() => {
    
  })
  return (
    <div>ClubPage</div>
  )
}

export default ClubPage