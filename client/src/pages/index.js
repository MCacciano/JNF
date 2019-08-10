import React, { Component } from 'react'
import { graphql } from 'gatsby'

import TwitchPlayer from 'react-player/lib/players/Twitch'

export const GatsbyQuery = graphql`
  {
    jnf {
      videos {
        id
        user_id
        user_name
        title
        description
        created_at
        published_at
        url
        thumbnail_url
        viewable
        view_count
        language
        type
        duration
      }
    }
  }
`

class ClientFetchingExample extends Component {
  render() {
    const {
      jnf: { videos },
    } = this.props.data

    console.log(videos)

    return (
      <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
        <h2>testing</h2>
        <TwitchPlayer url={`https://twitch.tv/videos/${videos[0].id}`} />
      </div>
    )
  }
}
export default ClientFetchingExample
