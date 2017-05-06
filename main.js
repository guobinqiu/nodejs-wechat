'use strict'

let Wechat = require('./wechat')
let config = require('./config/tb2.json')

console.log('config', config)

let wechat = new Wechat(config)
wechat.getUserSummary("2017-05-01", "2017-05-05").then(function(data) {
  console.log(JSON.stringify(data, null, 4))
})
