const axios = require('axios');

require('dotenv').config();

module.exports = axios.create({
  baseURL: 'https://api.twitch.tv/helix',
  headers: {
    'Client-ID': process.env.TWITCH_CLIENT_ID
  }
});
