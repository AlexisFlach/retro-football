import http from '../ClubAPI';

const fetchClubs = () => {
  return http.ClubAPI.get('/api/clubs');
};

export default { fetchClubs };
