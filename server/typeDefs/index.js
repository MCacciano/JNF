const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

const StreamerType = new GraphQLObjectType({
  name: 'Streamer',
  fields: () => ({
    id: { type: GraphQLString },
    login: { type: GraphQLString },
    display_name: { type: GraphQLString },
    type: { type: GraphQLString },
    broadcaster_type: { type: GraphQLString },
    description: { type: GraphQLString },
    profile_image_url: { type: GraphQLString },
    offline_image_url: { type: GraphQLString },
    view_count: { type: GraphQLInt },
    email: { type: GraphQLString }
  })
});

const StreamType = new GraphQLObjectType({
  name: 'Stream',
  fields: () => ({
    id: { type: GraphQLString },
    user_id: { type: GraphQLString },
    user_name: { type: GraphQLString },
    game_id: { type: GraphQLString },
    type: { type: GraphQLString },
    title: { type: GraphQLString },
    viewer_count: { type: GraphQLInt },
    started_at: { type: GraphQLString },
    language: { type: GraphQLString },
    thumbnail_url: { type: GraphQLString },
    tag_ids: { type: GraphQLList(GraphQLString) }
  })
});

const VideoType = new GraphQLObjectType({
  name: 'Video',
  fields: () => ({
    id: { type: GraphQLString },
    user_id: { type: GraphQLString },
    user_name: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    created_at: { type: GraphQLString },
    published_at: { type: GraphQLString },
    url: { type: GraphQLString },
    thumbnail_url: { type: GraphQLString },
    viewable: { type: GraphQLString },
    view_count: { type: GraphQLInt },
    language: { type: GraphQLString },
    type: { type: GraphQLString },
    duration: { type: GraphQLString }
  })
});

const ClipType = new GraphQLObjectType({
  name: 'Clip',
  fields: () => ({
    id: { type: GraphQLString },
    url: { type: GraphQLString },
    embed_url: { type: GraphQLString },
    broadcaster_id: { type: GraphQLString },
    broadcaster_name: { type: GraphQLString },
    creator_id: { type: GraphQLString },
    creator_name: { type: GraphQLString },
    video_id: { type: GraphQLString },
    game_id: { type: GraphQLString },
    language: { type: GraphQLString },
    title: { type: GraphQLString },
    view_count: { type: GraphQLInt },
    created_at: { type: GraphQLString },
    thumbnail_url: { type: GraphQLString }
  })
});

module.exports = {
  StreamerType,
  StreamType,
  VideoType,
  ClipType
};
