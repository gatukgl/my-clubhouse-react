import { NavBar } from './NavBar'
import { RoomCreator } from './RoomCreator'
import { Rooms } from './Rooms'
import { RoomCreationButton } from './RoomCreationButton'

export const Home = () => {
  return (
    <>
      <NavBar />
      <Rooms />
      <RoomCreationButton />
    </>
  )
}
