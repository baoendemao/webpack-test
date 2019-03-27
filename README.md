## 构建webpack4和vue2的单页面应用
### 技术栈
webpack4 + vue2 + vue-router + nginx

### 目录结构
```
.
├── README.md
├── build
│   ├── webpack.base.config.js          // webpack基础配置
│   ├── webpack.dev.config.js           // webpack开发环境配置
│   └── webpack.prod.config.js          // webpack生产环境配置
├── dist                                // npm run build输出路径
├── nginx_conf                          // nginx配置文件
│   └── webpack4_vue2.conf
├── package.json
└── src             
    ├── app.js                          // 入口js文件
    ├── app.vue                         // 根vue文件
    ├── index.html                      // html模板文件
    ├── pages                           // 单页面文件夹
    │   ├── detail                      // 详情页
    │   │   └── detail.vue
    │   ├── home                        // 首页
    │   │   └── home.vue
    │   └── list                        // 列表页
    │       └── list.vue
    └── router.js                       // vue路由

```

### 本地dev环境下运行
```
npm run dev

```
### 服务端prod环境下运行
* 打包到dist目录
```
npm run build

```
* 部署nginx conf<br/>
（1） 将dist目录远程拷贝(scp)到服务端的项目工程目录下<br/>
（2） 将nginx_conf/webpack4_vue2.conf远程拷贝(scp)到服务器的nginx conf目录下<br/>
（3） 访问 http://服务器ip:8888

 注：
 这里使用nginx是为了解决vue-router的history模式下刷新404报错问题（ 也可以使用express或者koa来起server解决 ）。
