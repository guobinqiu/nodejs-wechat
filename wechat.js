'use strict'

let fetch = require('node-fetch');
let debug = require('debug')('wechat')

const SOURCES_NAMES = {
  0: 'other',
  17: 'namecard',
  30: 'qrcode',
  35: 'search',
  39: 'oa-query',
  43: 'webview-menu'
}

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

  // http://admin.wechat.com/wiki/index.php?title=Followers_Data_API
  _getUserSummary(access_token, begin_date, end_date) {
    let data = {
      "begin_date": begin_date,
      "end_date": end_date
    }
    let opts = {
      method: 'POST',
      body: JSON.stringify(data),    // seems ugly
      headers: { 'Content-Type': 'application/json' }
    }
    return new Promise((resolve, reject) => {
      fetch('https://api.weixin.qq.com/datacube/getusersummary?access_token=' + access_token, opts).
      then(function(res) {
        return res.text();
      }).then(function(body) {
        resolve(JSON.parse(body));
      });
    });
  }

  _process(data) {
    if (!data.list) {
      debug('no list on data')
      return data
    }
    debug('process', data)
    data.list = data.list.map( elem => {
      elem.user_source_name = SOURCES_NAMES[elem.user_source]
      debug('elem', elem)
      return elem
    })
    return data
  }

  async getUserSummary(begin_date, end_date) {
    // TODO - check date range is < 7 days
    // otherwise split into multiple calls
    let access_token = await this.getAccessToken();
    let summary = await this._getUserSummary(access_token, begin_date, end_date);
    summary = this._process(summary)
    return summary;
  }
}

module.exports = Wechat;
