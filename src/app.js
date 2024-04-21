// app.js

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');

const Message = require('./models/Message');

const app = express();
app.use(express.static('public'));
const server = http.createServer(app);
const io = socketIO(server);


// Connection to MongoDB
const mongoURI = `YOUR_URI`;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
});
// Map socket IDs to user names
const socketUserMap = {};

// Inside the socket.io connection function
io.on('connection', (socket) => {
    console.log('User connected: ', socket.id);

    // Listen for incoming chat
    socket.on('chat message', async (data) => {
        try {
            const message = new Message({ userName: socketUserMap[socket.id], text: data.message });
            await message.save();
            console.log('Message saved to the database');
            // Broadcast the message to all connected sockets
            io.emit('chat message', { userName: socketUserMap[socket.id], message: data.message });
        } catch (error) {
            console.error('Error saving message to database:', error.message);
            socket.emit('message status', { status: 'error', message: 'Failed to save message.' });
        }
    });

    // Listen for incoming username selection
    socket.on('user name', (name) => {
        console.log('User chose username:', name);
        // Store the username associated with this socket ID
        socketUserMap[socket.id] = name;
        // Broadcast the username to all connected sockets
        io.emit('user name', name);
    });
});


const PORT = process.env.PORT || 3002;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
