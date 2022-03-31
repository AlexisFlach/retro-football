import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClubAndPlayers } from '../../context/clubs/ClubsActions';
import ClubsContext from '../../context/clubs/ClubsContext';
import { Player } from '../../interfaces';
import { FlexRow } from '../styles/Flex.styled';
import { ListItem } from '../styles/ListItem.styled';

const ClubPage = () => {
  const { club, players, dispatch } = useContext(ClubsContext);
  const params = useParams();

  useEffect(() => {
    const getdata = async () => {
      const clubData = await getClubAndPlayers(Number(params.id));
      dispatch({ type: 'GET_CLUB_AND_PLAYERS', payload: clubData });
    };
    getdata();
  }, []);
  return (
    <div>
      <FlexRow><h2>{club.name}</h2></FlexRow>
      {players.map((p: Player) => (
        <div>
          <p>{p.firstName}</p>
          <p>{p.lastName}</p>
          <p>{p.shirtNumber}</p>
        </div>


      ))}

    </div>
  )
};

export default ClubPage;
