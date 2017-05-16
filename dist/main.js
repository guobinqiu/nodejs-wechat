"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wechat_1 = require("./wechat");
let config = {
    app_id: '',
    app_secret: '',
};
let wechat = new wechat_1.Wechat(config);
wechat.getUserSummary("2017-05-01", "2017-05-05").then(data => {
    console.log(JSON.stringify(data, null, 4));
});
