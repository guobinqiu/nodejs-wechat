"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
class Wechat {
    constructor(config) {
        this.config = config;
    }
    getAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield node_fetch_1.default('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + this.config['app_id'] + '&secret=' + this.config['app_secret']);
                let data = yield res.json();
                return data['access_token'];
            }
            catch (ex) {
                console.log(ex.message);
            }
        });
    }
    getUserSummary(begin_date, end_date) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let access_token = yield this.getAccessToken();
                let payload = {
                    begin_date: begin_date,
                    end_date: end_date,
                };
                let res = yield node_fetch_1.default('https://api.weixin.qq.com/datacube/getusersummary?access_token=' + access_token, {
                    method: 'POST',
                    body: JSON.stringify(payload),
                });
                return res.json();
            }
            catch (ex) {
                console.log(ex.message);
            }
        });
    }
}
exports.Wechat = Wechat;
