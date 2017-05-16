import fetch from 'node-fetch';
import { IConfig } from './main';

export class Wechat {
  private config: IConfig;
  
  public constructor(config: IConfig) {
    this.config = config;
  }

  public async getAccessToken() {
    try {
      let res = await fetch('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + this.config['app_id'] + '&secret=' + this.config['app_secret']);
      let data = await res.json();
      return data['access_token'];
    } catch (ex) {
      console.log(ex.message);
    }
  }

  public async getUserSummary(begin_date: string, end_date: string) {
    try {
      let access_token: string = await this.getAccessToken();
      let payload = {
        begin_date: begin_date,
        end_date: end_date,
      };
      let res = await fetch('https://api.weixin.qq.com/datacube/getusersummary?access_token=' + access_token, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      return res.json();
    } catch (ex) {
      console.log(ex.message);
    }
  }
}