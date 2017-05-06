'use strict'

var fetch = require('node-fetch');

class Wechat {
  constructor(config) {
    this.config = config;
  }

  getAccessToken() {
    return new Promise((resolve, reject) => {
      fetch('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + this.config['app_id'] + '&secret=' + this.config['app_secret']).then(function(res) {
        return res.text();
      }).then(function(body) {
        resolve(JSON.parse(body)['access_token']);
      });
    });
  }

  _getUserSummary(access_token, begin_date, end_date) {
    return new Promise((resolve, reject) => {
       fetch('https://api.weixin.qq.com/datacube/getusersummary?access_token=' + access_token, {
         method: 'POST',
         body: JSON.stringify({
           "begin_date": begin_date,
           "end_date": end_date,
         })
       }).then(function(res) {
        return res.text();
      }).then(function(body) {
        resolve(JSON.parse(body));
      });
    });
  }

  async getUserSummary(begin_date, end_date) {
      let access_token = await this.getAccessToken();
      let summary = await this._getUserSummary(access_token, begin_date, end_date);
      return summary;
  }
}

module.exports = Wechat;
