import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClub, getClubAndPlayers } from '../../context/clubs/ClubsActions';
import ClubsContext from '../../context/clubs/ClubsContext';

const ClubPage = () => {
  const { club, players, dispatch } = useContext(ClubsContext);
  const params = useParams();
  console.log(params)

  useEffect(() => {
    const getdata = async () => {
      const clubData = await getClubAndPlayers(Number(params.id));
      console.log(clubData)
      dispatch({ type: 'GET_CLUB_AND_PLAYERS', payload: clubData });
    };
    getdata();
  }, []);
  return (
    <div>
      <h2>{club.name}</h2>
      {players.map((p: any) => (
        <p>{p.firstName}</p>
      ))}

    </div>
  )
};

export default ClubPage;
