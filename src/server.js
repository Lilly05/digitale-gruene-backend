const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const User = require('./models/User');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors()); 

const PORT = 3000;

app.use(express.json());

dotenv.config({ path: path.resolve(__dirname, '.env') });

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/signup', (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    });

    newUser.save()
        .then(() => {
            res.status(201).send('Created User');
        })
        .catch(err => {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
