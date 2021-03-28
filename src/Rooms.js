import React from 'react'

import { getRooms } from './apis'
import { Room } from './Room'

export class Rooms extends React.Component {
  state = { rooms: [] }

  componentDidMount() {
    getRooms().then(rooms => {
      this.setState({ rooms: rooms })
    })
  }

  render() {
    return (
      <>
        {this.state.rooms.map(roomDetail => {
          return <Room key={roomDetail.id} detail={roomDetail} />
        })}
      </>
    )
  }
}
