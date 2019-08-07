// const axios = require('axios');
const twitch = require('./axios/twitch');

const { GraphQLObjectType, GraphQLList, GraphQLSchema } = require('graphql');

const {
  StreamerType,
  StreamType,
  VideoType,
  ClipType
} = require('./typeDefs/index');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    streamer: {
      type: StreamerType,
      async resolve(parent, args) {
        try {
          const res = await twitch.get('/users?login=joeneverfails');
          return res.data.data[0];
        } catch (err) {
          console.error(err);
        }
      }
    },
    stream: {
      type: StreamType,
      async resolve(parent, args) {
        try {
          const res = await twitch.get('/streams?user_id=63801297');
          return res.data.data[0];
        } catch (err) {
          console.error(err);
        }
      }
    },
    videos: {
      type: GraphQLList(VideoType),
      async resolve(parent, args) {
        try {
          const res = await twitch.get('/videos?user_id=63801297');
          return res.data.data;
        } catch (err) {
          console.error(err);
        }
      }
    },
    clips: {
      type: GraphQLList(ClipType),
      async resolve(parent, args) {
        try {
          const res = await twitch.get('/clips?broadcaster_id=63801297');
          return res.data.data;
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
