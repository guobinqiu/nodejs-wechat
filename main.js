'use strict'

let Wechat = require('./wechat');

let config = {
  app_id: 'wxdc02ed9004592908',
  app_secret: '2ecd9ee0f11b5444292317b8ef821c98',
}

let wechat = new Wechat(config);
wechat.getUserSummary("2017-05-01", "2017-05-05").then(function(data) {
    console.log(JSON.stringify(data, null, 4));
});
