import axios from 'axios'
import React from 'react'
import { Room } from './Room'

export class Rooms extends React.Component {
  state = { rooms: [] }

  mapRoomsFromApi(data) {
    const rooms = data.map((item) => {
      return {
        id: item.id,
        topic: item.topic,
        listenerCount: item.room_listener.length,
        moderators: [
          {
            username: item.room_moderator[0].user.username,
            name: item.room_moderator[0].user.name,
            imageUrl: item.room_moderator[0].user.profile_picture,
          },
          {
            username: item.room_moderator[1].user.username,
            name: item.room_moderator[1].user.name,
            imageUrl: item.room_moderator[1].user.profile_picture,
          },
        ],
      }
    })

    return rooms
  }

  componentDidMount() {
    const url = 'http://192.168.1.108:8000/api/rooms/'
    axios
      .get(url)
      .then((response) => {
        const data = response.data
        const rooms = this.mapRoomsFromApi(data)
        this.setState({ rooms: rooms })
      })
      .catch((error) => console.error('[Get rooms]', error))
  }

  render() {
    return (
      <>
        {this.state.rooms.map((roomDetail) => {
          return <Room key={roomDetail.id} detail={roomDetail} />
        })}
      </>
    )
  }
}
