'use strict'

let fetch = require('node-fetch');

class Wechat {
  constructor(config) {
    this.config = config;
  }

  async getAccessToken() {
    let res = await fetch('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + this.config['app_id'] + '&secret=' + this.config['app_secret']);
    let data = await res.json();
    return data['access_token'];
  }

  async getUserSummary(begin_date, end_date) {
    let access_token = await this.getAccessToken();
    let payload = {
      begin_date: begin_date,
      end_date: end_date,
    };
    let res = await fetch('https://api.weixin.qq.com/datacube/getusersummary?access_token=' + access_token, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return await res.json();
  }
}

module.exports = Wechat;
