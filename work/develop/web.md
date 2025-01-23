## 环境准备

---

:::  danger ⚠️ 警告

首先需要在本地安装node，推荐node的版本16+
推荐使用的包管理工具是 yarn
首次使用yarn可以先安装\=\>`npm install yarn -g`
:::
## 通过命令自动初始化项目

---

在官网下载安装包以后想为前端进行二开， 进入`uniapp/`或者`pc/`或者`admin/`时，可以通过一条命令自动帮你初始化你的项目

**下面以uniapp文件夹为例子使用**
在终端命令行中输入

 

```
npm run init
```

1. 运行npm run init 回车 选择是否安装依赖（如果已经安装过可以选择n）

![](https://doc.chatmoney.cn/docs/images/general/develop/web/uniapp_01.png)
2. 自动安装成功后会让你输入你的服务器域名地址，例如: [https://xxx.com](https://xxx.com/)

![](https://doc.chatmoney.cn/docs/images/general/develop/web/uniapp_02.png)
3. 选择你需要运行的客户端

![](https://doc.chatmoney.cn/docs/images/general/develop/web/uniapp_03.png)
4. 运行成功（则表示当前项目的初始化已经完成，可以开始二开本项目了

![](https://doc.chatmoney.cn/docs/images/general/develop/web/uniapp_04.png)

⚠️ 警告

如果通过自动初始化项目的则不需要对下面的教程文档看了，只需看打包生产那部分就好

## PC端(pc)

---

**首次使用先安装**​**​`yarn install`​**​**安装前请确保node版本为推荐的16+**

* 复制env文件

  1. 复制`.env.example`，将复制的文件名修改为`.env`
  2. 复制`.env.development.example`，将复制的文件名修改为`.env.developme`
  3. 复制`.env.production.example`，将复制的文件名修改为`.env.production`
* 复制以后示例
  ![](https://doc.chatmoney.cn/docs/images/general/develop/web/pc_dev01.png)
* .env 应用全局配置（通常将他复制出来以后无需修改里面的内容

# 版本号

NUXT\_VERSION\=1.0.0

# 接口默认前缀

NUXT\_API\_PREFIX\=/api

# 客户端类型

NUXT\_CLIENT\=4

# 基础路径

NUXT\_BASE\_URL\=/pc/

# 是否开启ssr，填些任意值开启

NUXT\_SSR\=

# 端口号

NITRO\_PORT\=3000

```

点击打开
* .env.development
  开发环境
```

# 请求域名

NUXT\_API\_URL\='输入你的域名'

```
* .env.production
  生产环境
```

# 请求域名

NUXT\_API\_URL\='输入你的请求域名' //填空则跟着网站的域名来请求

```
**以上配置完成后可运行下面命令**

### PC端开发模式
* 运行开发环境  
终端中运行命令
‍‍```
yarn dev
```

### PC端生产模式（打包）

打包前修改接口请求域名，打开`.env.production`，修改`NUXT_API_URL`变量的值为项目安装部署的服务端地址

* 运行生产环境（非seo）
  终端中运行命令



```
yarn build
```

注意

如果是非seo模式则不需要修改，将`NUXT_API_URL`留空即可，这样请求接口时会自动读取当前的域名做为接口请求的域名

* 运行生产环境（seo）
  打包支持`seo模式`和非`seo模式`（类似于vue的单页面应用），默认为`非seo`模式，修改`.env`文件可以修改模式

.env 文件中

```
 # 是否开启ssr，填些任意值开启，为空则关闭
 NUXT_SSR=1
```

终端中运行命令



```
yarn build:ssr
```

注意

1. 首先拉取依赖包（拉取之前node版本必须为指定16+版本以上） \=\>`yarn install`
2. 拉取成功无错误时开始执行打包或者运行模式
3. 如果 运行 或者 拉取 时有错误，请先尝试删除yarn.lock文件以及node\_modules文件夹以后重复1和2步骤

### 移动端（uniapp）

---

**首次使用先安装**​**​`yarn install`​**​**安装前请确保node版本为推荐的16+**

* 复制env文件

  1. 复制`.env.development.example`，将复制的文件名修改为`.env.developme`
  2. 复制`.env.production.example`，将复制的文件名修改为`.env.production`
* 复制以后示例
  ![](https://doc.chatmoney.cn/docs/images/general/develop/web/admin_dev01.png)

点击打开

* .env.development 开发环境

```
NODE_ENV = 'development'

# 请求域名
VITE_APP_BASE_URL='输入你的请求域名'
```

* .env.production 生产环境

```
NODE_ENV = 'production'

# 请求域名
VITE_APP_BASE_URL='输入你的请求域名'  //填空则跟着网站的域名来请求
```

### uniapp在VSCode开发

---

#### 开发模式

* 运行h5
  终端中运行命令



```
yarn dev:h5
```

* 运行小程序
  终端中运行命令



```
yarn dev:mp-weixin
```

运行完毕，打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)，点击左上角菜单`项目`\>`导入项目`，导入地址选择`uniapp/dist/dev/mp-weixin`，点击确定成功导入项目

#### 生产模式

* 发行h5

  1. 终端中运行命令

  

  ```
  yarn build:h5
  ```

  2. 上传打包好的代码到服务器或仓库
* 运行小程序
  终端中运行命令



```
yarn build:mp-weixin
```

运行完毕，打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)，点击左上角菜单`项目`\>`导入项目`，导入地址选择`uniapp/dist/dev/mp-weixin`，点击确定成功导入项目

### uniapp在HbuilderX开发

---

插件推荐安装：在运行过程中会自动安装需要插件

#### 运行uniapp

注意

apple M系列芯片在uniapp下编译的报错处理：在`node_modules`下复制粘贴`esbuild-darwin-arm64`一份，重命名为`esbuild-darwin-64`

* 导入项目，点击HbuilderX左上角菜单`文件`\>`导入`\>`从本地目录导入`，目录选择`uniapp`
* 安装依赖，选中当前项目，点击HbuilderX左上角菜单`工具`\>`外部命令`\>`npm install`安装依赖
* 运行到h5，点击HbuilderX左上角菜单`运行`\>`运行到浏览器`\>`Chrome`
* 运行到微信小程序，点击HbuilderX左上角菜单`运行`\>`运行到小程序模拟器`\>`微信开发者工具 - (uniapp)`

注意

* 运行到微信小程序前，先配置好小程序的appid，点击`uniapp/src/manifest.json`，选择`微信小程序配置`\>`微信小程序AppID`，输入appid即可
* 一般运行到微信小程序，会自动打开微信开发者工具，如果打开失败，可能是工具的服务端口没有打开，手动打开工具 -\> 设置 -\> 安全设置，将服务端口开启，也有可能是你配置的小程序appid中，你登录的账号不是这个小程序的开发者，只需要去微信小程序后台将该账号添加到开发者，重新运行即可

#### 发行uniapp

* 发行到h5

  1. 点击HbuilderX左上角菜单`发行`\>`网站-PC Web或手机H5(仅适用于uni-app)`，输入网站标题，点击发行按钮，编译完成后可在`uniapp/dist/build/h5`下
  2. 将h5下面的代码复制到发布目录，然后上传代码到服务器或仓库即可
* 发行到小程序

  1. 点击HbuilderX左上角菜单`发行`\>`小程序-微信(仅适用于uni-app)`，输入`小程序名称`和`小程序appid`，点击发行，编译完成后会自动打开微信开发者工具
  2. 点击微信开发者工具的`上传`按钮，将代码上传到微信小程序后台

### 后台管理（admin）

---

**首次使用先安装**​**​`yarn install`​**​**安装前请确保node版本为推荐的16+**

* 复制env文件

  1. 复制`.env.development.example`，将复制的文件名修改为`.env.developme`
  2. 复制`.env.production.example`，将复制的文件名修改为`.env.production`
* 复制以后示例
  ![](https://doc.chatmoney.cn/docs/images/general/develop/web/admin_dev01.png)

点击打开

* .env.development 开发环境

```
NODE_ENV = 'development'

# 请求域名
VITE_APP_BASE_URL='输入你的请求域名'
```

* .env.production 生产环境

```
NODE_ENV = 'production'

# 请求域名
VITE_APP_BASE_URL='输入你的请求域名'  //填空则跟着网站的域名来请求
```

**以上配置完成后可运行下面命令**

### 后台管理开发模式（运行 admin

* 运行开发环境
  终端中运行命令



```
yarn dev
```

### 后台管理生产模式（打包 admin

* 运行生产环境
  终端中运行命令



```
yarn build
```

注意

1. 首先拉取依赖包（拉取之前node版本必须为指定16+版本以上） \=\>`yarn install`
2. 拉取成功无错误时开始执行打包或者运行模式（yarn build / yarn dev）
3. 如果 运行 或者 拉取 时有错误，请先尝试删除yarn.lock文件以及node\_modules文件夹以后重复1和2步骤

## 持续更新