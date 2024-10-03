# 基本介绍

## 项目目录

```
├─📂 server  //服务端根目录
│  ├─📂 app  //应用目录
│  │  ├─📂 common  //公共模块
│  │  ├─📂 adminapi//管理后台模块接口
│  │  ├─📂 adminapi  //前台后台模块接口
│  ├─📂 license  //授权目录和PHP 扩展文件
│  │  ├─📄 my.license  //授权文件
│  ├─📂 public  //WEB目录（对外访问目录）
│  │  ├─📄 index.php  //php入口文件
│  │  ├─📂 admin  //已编译的后台前端代码入口（上线运行）
│  │  ├─📂 pc  //已编译的PC前台前端代码入口（上线运行）
│  │  ├─📂 mobile  //已编译的手机前台前端代码入口（上线运行）
│  ├─📄 .env  //项目环境配置文件（最优化读取配置）

├─📂 admin  //管理后台前端源码
│  ├─📄 .env.development.example  //开发环境配置文件
│  ├─📄 .env.production.example  //生产环境配置文件

├─📂 pc  //PC前台前端源码
│  ├─📄 .env.example  //开发环境配置文件

├─📂 uniapp  //手机前台源码
│  ├─📄 .env.development.example  //开发环境配置文件
│  ├─📄 .env.production.example  //生产环境配置文件

├─📂 docker  //docker配置目录
│  ├─📂 config //所有容器配置
│  ├─📂 data //所有容器数据存储（使用docker请勿删除）
│  ├─📂 log //所有容器日志
│  ├─📄 docker-compose.yml  //docker容器编排
```

## 持续更新