import axios from 'axios';

const ClubAPI = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`
})

export default {ClubAPI};