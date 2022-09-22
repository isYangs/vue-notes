## 前言
后端使用json-server驱动，如果需要启动服务请按照以下方法使用
## 使用
在全局安装 JSON Server

```
npm install -g json-server
```

启动 JSON Server

```
cd db
json-server -w students.json
```

见下图所示

![1663809797585.png](https://a.xuewuzhibu.cn/1/632bb91135c74-1.png)

![1663809906656.png](https://a.xuewuzhibu.cn/1/632bb977dc3d6-1.png)

> 注意：请在两个终端中分别执行，如果你的端口被占用，可以使用`-p`参数指定端口，但是要确保两个端口不能相同

```
cd db
json-server -w cars.json -p 3001
```

现在访问 http://localhost:3000/students, 就可以得到setudens的数据了

```
{ "id": 1, "name": "John", "age": 18 },
{ "id": 2, "name": "Mary", "age": 20 },
{ "id": 3, "name": "Peter", "age": 21 }
```
访问 http://localhost:3001/cars, 就可以得到cars的数据了

```
{ "id": 1, "name": "BMW", "price": 100000 },
{ "id": 2, "name": "Benz", "price": 200000 },
{ "id": 3, "name": "Benz", "price": 300000 }
```

如果想知道更多关于json-server的使用方法，请参考[官方文档](https://github.com/typicode/json-server)