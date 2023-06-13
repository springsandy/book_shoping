const express = require('express');
const cors = require('cors');
const app = express();
const user = require('./express_api/user');
const favorite = require('./express_api/favorite');

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/user', user);
app.use('/favorite', favorite);

app.listen(8000, () => console.log(''));