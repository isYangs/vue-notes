## 前提
在部署之前需要将`src`目录使用以下命令打包

> 提示：每次在部署之前都需要先打包，然后覆盖`dist`目录

```
cd vue_test
npm run build
```
然后将打包好的`dist`目录整个复制到`demo`目录下替换原有的`dist`目录

## 使用
在`demo`文件夹下执行

```
npm install
```

启动项目

```
npm start
```

> 注意：默认启动项目在`8000`端口，在浏览器访问[localhost:8000](http://localhost:8000/)即可查看运行效果
