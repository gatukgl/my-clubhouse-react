import { Room } from './Room'

export const Rooms = () => {
  const rooms = [
    {
      id: 1,
      topic: 'สภาชานม: เรียนรู้ไม่มีสิ้นสุด เรียนยังไง เรียนกับใคร',
      moderators: [
        {
          username: 'emmaw',
          name: 'Emma Watson',
          imageUrl: 'https://www.w3schools.com/howto/img_avatar2.png',
        },
        {
          username: 'rugrint',
          name: 'Rupert Grint',
          imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
        },
      ],
      listenerCount: 20,
    },

    {
      id: 2,
      topic: 'Animal On A Budget: 6 Tips From The Great Depression',
      moderators: [
        {
          username: 'robber55',
          name: 'Robert Kraken',
          imageUrl: 'https://www.w3schools.com/w3images/avatar2.png',
        },
        {
          username: 'sixtysixty',
          name: 'Twinkle Littlestar',
          imageUrl: 'https://www.w3schools.com/w3images/avatar5.png',
        },
      ],
      listenerCount: 7,
    },
  ]
  return (
    <>
      {rooms.map((roomDetail) => {
        return <Room key={roomDetail.id} detail={roomDetail} />
      })}
    </>
  )
}
