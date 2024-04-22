# Real-Time Chat App

This is a simple real-time chat application built using Nodejs, Express.js, Socket.IO, and MongoDB.
### Features

- User can choose a username.
- User can send messages in real-time.
- Messages are saved to MongoDB.
- Usernames are displayed next to messages.
- User's own messages are indicated with "(You)".

### Technologies Used

    Express.js: Used to create the server-side application.
    Socket.IO: Used for real-time communication between the server and clients.
    MongoDB: Used to store messages in a database.
    Bootstrap: Used for styling the frontend.

### Getting Started

1. Clone the repository:

	`git clone https://github.com/your_username/real-time-chat.git`
2. Install dependencies:
	`cd real-time-chat`
	` npm install`
3. Start the server:
`npm app.js`
4. Open your web browser and navigate to http://localhost:3002.
Enter a username and start chatting!

## File Structure

-     app.js: Entry point of the server application.
-     public/index.html: HTML template for the chat interface.
-     public/socket.io/socket.io.js: Socket.IO client library.
-     models/Message.js: Mongoose schema for storing chat messages.
-     package.json: Project configuration and dependencies.- 

### License

This project is licensed under the MIT License - see the LICENSE file for details.