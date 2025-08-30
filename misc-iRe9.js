// 简易开发服务器配置
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 配置静态文件服务
app.use(express.static(path.join(__dirname), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        }
    }
}));

// 启动服务器
app.listen(PORT, () => {
    console.log(`开发服务器已启动: http://localhost:${PORT}`);
    console.log('请确保:');
    console.log('1. 项目路径不含中文或空格');
    console.log('2. 使用Chrome/Firefox最新版');
});