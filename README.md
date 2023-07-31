# Chat With Friends

A chat app for simple texts and images, written using the MERN (MongoDB, Express, React, Node), employing WebSockets. Uses JWTs for user authentication. Other tools/packages used include Vite, TailWindCSS, cookie-parser.

MongoDB - Users                         |MongoDB - Messages
:--------------------------------------:|:--------------------------------------:
![Users](./screenshots/CWF_DB_users.png)|![Messages](./screenshots/CWF_DB_messages.png)

Client - Uploading Image                |Client - Sending Texts
:--------------------------------------:|:--------------------------------------:
![Client2](./screenshots/CWF_client-2.png)|![Client3](./screenshots/CWF_client_3.png)

Log In                                  |Register
:--------------------------------------:|:--------------------------------------:
![Client2](./screenshots/CWF_login.png)|![Client3](./screenshots/CWF_register.png)

## To-Do
- [ ] Add chatrooms for multiple users
- [ ] Add functionality to request to chat before chat opens
- [ ] Refactor codebase for integration into [MealsWithFriends](https://github.com/bryanwsebaraj/MealsWithFriends_backend)

## Testing
### Start API
 - Navigate to /api
 - Create .env file with appropriate credentials for:
	- `MONGO_URL, JWT_SECRET, CLIENT_URL`
 - run 'node index.js'

### Start Client
 - Navigate to /client
 - run 'npm run dev'