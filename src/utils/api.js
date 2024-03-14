// is tarah import krne se error a raha 
// const axios = require('axios');

// is tarah import kia tu error resovle
import axios from 'axios';


const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchdatafromapi = async (url) =>{

    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;

}
