const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require('./config/db');

connectDB();

/** 
.use() method is used to mount the specified middleware function(s) at the path which is being specified.
.send() method is used to send a response to the client.
.json() method is used to send a JSON response to the client.
.listen() method is used to bind and listen the connections on the specified host and port.
*/

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Random Ideas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
