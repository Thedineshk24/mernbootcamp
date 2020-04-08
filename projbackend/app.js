require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

// DB CONNECTION
mongoose.connect(process.env.DATABASE,
                {useNewUrlParser:true,
                useUnifiedTopology:true,
                useCreateIndex:true}).then(() => {
                    console.log('DB CONNECTED');
                }).catch( () => {
                    console.log('DB CONNECTION FAILED') //TODO: if any error comes in future remove this catch
                });

// MIDDLEWARE'S
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// MY ROUTE'S
app.use('/api',authRoutes);

// PORT's
const port = process.env.PORT || 8000;

//app.set('port', process.env.PORT || 8000);

//STARTING A SERVER
app.listen(port, () => {
    console.log(`app is running on port no ${port}`);
})


