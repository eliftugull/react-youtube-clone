import axios from 'axios';

axios.defaults.baseURL='https://yt-api.p.rapidapi.com'
const options = {
  params:{geo: 'TR', lang: 'tr'},
  headers: {
    'X-RapidAPI-Key': 'a72dec105dmsha5af97e5967bae9p1c476cjsnb46916c1ca9b',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  }
};

export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
