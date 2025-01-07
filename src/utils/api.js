const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
  },
  headers: {
    'x-rapidapi-key': '0357bc6437msh6db8e078013da2dp1ef052jsn332b55611064',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}