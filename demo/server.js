const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();

app.use(history());
//传递一个包含静态资源的目录dist给express.static中间件
app.use(express.static('dist'));
//发送index.html页面到域名,使得输入服务器地址后就是这个页面
app.get(/.*/, function (req, res) {
    res.sendFile(__dirname, './dist/index.html');
});
// 创建一个端口号为8000的服务器并监听;
app.listen(8000, () => {
    console.log('服务器已启动');
});
