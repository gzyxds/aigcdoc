# 微信小程序编译上传指南 🚀

## ⚠️ 重要提示
- 必须使用**企业认证**的微信小程序
- 本教程为小程序发布流程,版本更新时请下载最新源码重新操作

## 小程序类目资质 📋
[查看类目资质要求](https://developers.weixin.qq.com/community/develop/article/doc/000a6c1c700c78bce2204942066813)

## 基础配置 ⚙️

### 1. AppID与AppSecret配置
1. 登录系统管理后台,进入【渠道设置】->【微信小程序】
2. 打开[微信公众平台](https://mp.weixin.qq.com)登录小程序
3. 点击【开发】->【开发管理】
4. 复制AppID、AppSecret到管理后台并保存

![AppID配置](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-1.png)

### 2. 服务器域名配置

> ⚠️ **注意**: 所有使用到的域名(包括对象存储、图片代理等)都需要配置,否则相关功能可能异常

1. 小程序后台进入【开发管理】->【服务器域名】
2. 系统后台复制服务器域名配置
3. 粘贴到小程序后台对应位置并保存

![域名配置](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-2.png)
![域名配置](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-3.png)

### 3. 业务域名配置

> 💡 **提示**: 如需在webview中打开外部链接,需额外配置对应域名

#### 配置步骤:

1. 小程序后台进入【开发管理】->【业务域名】
2. 下载校验文件并上传至 server/public 目录
   > ⚠️ 注意保持文件名不变
3. 系统后台复制业务域名并配置到小程序后台

![业务域名配置](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-4.png)
![业务域名配置](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-8.png)

## 开发环境搭建 🛠️

### 1. 安装开发工具
- 下载并安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- 下载并安装[HBuilder X](https://www.dcloud.io/hbuilderx.html)

### 2. 微信开发者工具配置
1. 使用小程序管理员/开发者微信扫码登录
2. 开启【设置】->【安全】->【服务端口】

### 3. 项目配置
1. 解压源码,使用HBuilder X打开uniapp目录
2. 配置uni-app应用标识
3. 复制 .env.production.example 为 .env.production
4. 配置 VITE_APP_BASE_URL 为 HTTPS 域名
5. 执行 npm install 安装依赖

### 4. 编译发布
1. 点击【发行】->【小程序-微信】
2. 填写小程序信息并发行
3. 在微信开发者工具中预览并上传

## 隐私保护配置 🔒

1. 小程序后台进入【设置】->【更新】
2. 确认用户信息处理说明
3. 配置信息使用清单
4. 设置隐私保护指引

## 提交审核 ✅

1. 登录小程序后台查看开发版本
2. 提交审核
3. 审核通过后发布上线