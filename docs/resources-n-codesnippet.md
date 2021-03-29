# Resources and Code Snippet

1. Slide: https://docs.google.com/presentation/d/1Ajb9n-ttpUwEhaZXPCgsGOFZZl7FWNi9JQ5jsPrumFg/edit#slide=id.p

2. ES6++ usage examples: https://gist.github.com/gatukgl/b07367c40c9df69e8389d405f3a39550

3. Setting up React app: https://github.com/gatukgl/my-clubhouse-react/blob/master/docs/setting-up-react-app.md

4. Clubhouse HTML: https://github.com/gatukgl/hello-clubhouse-html

5. Converting HTML to JSX guideline: https://github.com/gatukgl/my-clubhouse-react/blob/master/docs/react-components.md

6. Prettier configurations

   ```json
   // .prettierrc.json
   {
     "trailingComma": "es5",
     "tabWidth": 2,
     "semi": false,
     "singleQuote": true,
     "arrowParens": "avoid"
   }
   ```

7. Rooms for state before fetching from API

   ```js
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
   ```

8. My clubhouse completed version - https://github.com/gatukgl/my-clubhouse-react

9. Avatar images
```
https://www.w3schools.com/howto/img_avatar.png
https://www.w3schools.com/howto/img_avatar2.png
https://www.w3schools.com/w3images/avatar2.png
https://www.w3schools.com/w3images/avatar6.png
https://www.w3schools.com/w3images/avatar5.png
```
10. prettier configs in VSCode
```json
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
```
11. function `mapRoomsFromApi()`
```js
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
```
12. API endpoint

**Get All Rooms**
ENDPOINT: http://xxxxxxxxxx/api/rooms/
METHOD: **GET**

**Create Room**
ENDPOINT: http://xxxxxxxxxx/api/rooms/
METHOD: **POST**
REQUEST BODY:
   
```json
{
    "topic": "",
    "moderator": [<username>, <username>]
}
```
