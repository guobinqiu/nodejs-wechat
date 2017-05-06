# node_wechat

1. create a file in config/APPNAME.json
2. run `npm start`

Will output like below:

```
{
    "list": [
        {
            "ref_date": "2017-05-02",
            "user_source": 0,
            "new_user": 0,
            "cancel_user": 1
        },
        {
            "ref_date": "2017-05-03",
            "user_source": 1,
            "new_user": 1,
            "cancel_user": 1
        },
        {
            "ref_date": "2017-05-04",
            "user_source": 0,
            "new_user": 1,
            "cancel_user": 1
        }
    ]
}
```

note that you can only get up to 7 days of data in one request
http://admin.wechat.com/wiki/index.php?title=Followers_Data_API

---

Supported by Nodejs 7+
> How to install?
+ https://github.com/creationix/nvm/blob/master/README.md (Recommended!)
+ https://nodejs.org/en/ (Download manully)
