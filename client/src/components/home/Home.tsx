import { Link } from 'react-router-dom'
import { ClubsList } from '../clubs/ClubsList'



const Home: React.FC = () => {
  return (
    <>
      <ClubsList />
      <Link to="about">Go to about</Link>
    </>
  )
}

export default Home