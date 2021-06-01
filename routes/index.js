require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');
const cron = require('node-cron');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Data for sending
  const data = JSON.stringify({"content":`Axios ${Date.now()}`, "parent_id": +process.env.PARENT_ID}); // "+" before .env value is to keep the PARENT_ID as number. If "+" is not added, the PARENT_ID is taken as string

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
  console.log("Reached here => ");
  // Add a new task at 5:00 am every day
  // cron.schedule('0 5 * * *', function() {

  // Add a new task every 3 hours
  cron.schedule('0 */2 * * *', function() {
    // Axios setup
    axios(config)
      .then((result) => {
        console.log(JSON.stringify(result.data));
      }).catch((err) => {
        console.log(err.message);
      });
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
