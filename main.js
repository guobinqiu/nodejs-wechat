'use strict'

let Wechat = require('./wechat');

let config = {
  app_id: 'YOUR_APP_ID',
  app_secret: 'YOUR_APP_SECRET',
};

let wechat = new Wechat(config);
wechat.getUserSummary("2017-05-01", "2017-05-05").then(data => {
    console.log(JSON.stringify(data, null, 4));
});
