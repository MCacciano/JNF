const axios = require('axios');

module.exports = axios.create({
  baseURL: 'https://api.twitch.tv/helix',
  headers: {
    'Client-ID': 'rk0z5z2in2u3t0myu3g4q8escdqb0g'
  }
});
