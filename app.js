const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// TODO: Save password to secure file
const uri = "mongodb+srv://Fahmiin:5wEgXXCLr2QvLmj@my-idea-pool-dvj9y.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('Mongoose is connected!'));

const app = express();
const port = 3000;
const users = require('./routes/users');
const events = require('./routes/events');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello world!'));
app.use('/users', users);
app.use('/events', events);

app.listen(port, () => console.log(`Server started on port ${port}`));