// Import dotenv and axios
require('dotenv').config();
const axios = require('axios');
const cron = require('node-cron');

// Data for sending
const data = JSON.stringify({"content":"Axios Test2", "parent_id": +process.env.PARENT_ID}); // "+" before .env value is to keep the PARENT_ID as number. If "+" is not added, the PARENT_ID is taken as string

// Config - method, url, headers, data
const config = {
  "method": "post",
  "url": process.env.URL,
  "headers": {
    "Content-Type": "application/json",
    "Authorization": process.env.AUTHORIZATION
  },
  "data": data
};

// Add a new task at 5:00 am every day
cron.schedule('0 5 * * *', function() {
  console.log(Date.now());
  // Axios setup
  axios(config)
    .then((result) => {
      console.log(JSON.stringify(result.data));
    }).catch((err) => {
      console.log(err.message);
    });
});