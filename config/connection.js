require('dotenv').config();

const db = require('db')
db.connect({
 api_key: process.env.API_KEY
})