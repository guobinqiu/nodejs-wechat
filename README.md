# node_wechat

1. [Fill in your APP_ID, APP_SECRET](https://github.com/guobinqiu/node_wechat/blob/master/main.js#L5-L8)
2. run `node main`

Output:

```
$ node main
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
---

Supported only by Nodejs 7+
+ How to install?
  + https://github.com/creationix/nvm/blob/master/README.md (Recommended!)
  + https://nodejs.org/en/

