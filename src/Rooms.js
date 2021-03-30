import React, { useEffect, useState } from 'react'

import { getRooms } from './apis'
import { Room } from './Room'

export const Rooms = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    getRooms().then(rooms => {
      setRooms(rooms)
    })
  }, [])

  return (
    <>
      {rooms.map(roomDetail => {
        return <Room key={roomDetail.id} detail={roomDetail} />
      })}
    </>
  )
}
