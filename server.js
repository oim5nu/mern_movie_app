const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const dotenv = require('dotenv');
dotenv.load();

const app = express();

const users = require('./routes/api/userApiRoutes');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Use native promise
mongoose.Promise = global.Promise;
mongoose.connect(db);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

//Use Routes
app.use('/api/users', users);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
