// pixabay-api.js

import axios from 'axios';

const API_KEY = '23838686-34a57fb5ee7e13f7202c685b1';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query = '', page) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
}
