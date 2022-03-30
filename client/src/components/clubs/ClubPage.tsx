import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClub } from '../../context/clubs/ClubsActions';
import ClubsContext from '../../context/clubs/ClubsContext';

const ClubPage = () => {
  const { club, players, dispatch } = useContext(ClubsContext);
  const params = useParams();

  useEffect(() => {
    const getdata = async () => {
      const clubData = await getClub(Number(params.id));
      dispatch({ type: 'GET_CLUB', payload: clubData.data });
    };
    getdata();
  }, []);
  return <div>{club.name}</div>;
};

export default ClubPage;
