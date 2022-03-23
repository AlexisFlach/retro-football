import { useContext } from 'react';
import ClubsContext from '../context/clubs/ClubsContext';
import ClubAPIService from '../shared/api/services/ClubAPIService';

export const useClubs = () => {
  const { setClubs } = useContext(ClubsContext);

  const getAllClubs = async () => {
    try {
      const { data } = await ClubAPIService.fetchClubs();
      setClubs(data);
    } catch (e) {
      console.log(e);
    }
  };
  return {
    getAllClubs,
  };
};

