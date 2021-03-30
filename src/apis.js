import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://128.199.212.188/api/',
})

const mapRoomsFromApi = data => {
  const rooms = data.map(item => {
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

export const getRooms = () => {
  const url = 'rooms/'
  return axiosInstance
    .get(url)
    .then(response => {
      const data = response.data
      const rooms = mapRoomsFromApi(data)
      return rooms
    })
    .catch(error => console.error('[Get rooms]', error))
}
