# 自定义API域名（大模型代理）

## 说明

本教程适用于以下场景：
- ChatGPT
- DALLE-3
- duckduckgo（联网）
- gemini

由于网络限制，境内服务器无法直接访问某些接口。本教程将详细介绍如何使用宝塔面板配置反向代理。

## 服务器准备

### 1. 购买服务器
- 选择境外服务器（推荐新加坡、韩国等地区）

### 2. 安装宝塔面板
- 在服务器上安装宝塔面板
- 登录宝塔面板后安装Nginx

## 反向代理配置

### 1. 创建站点
- 登录宝塔面板
- 进入【网站】->【添加站点】
- 填写解析好的域名或服务器IP地址
- PHP版本选择【纯静态】
- 点击【提交】

![创建站点](https://doc.chatmoney.cn/docs/images/general/config/proxy/1.png)

### 2. 配置反向代理
- 进入站点【设置】->【反向代理】->【添加反向代理】
- 根据服务类型填写目标URL：
  - OpenAI: `https://api.openai.com`
  - DALLE-3: `https://api.openai.com`
  - duckduckgo: `https://lite.duckduckgo.com`
  - gemini: `https://generativelanguage.googleapis.com`
- 点击【提交】

![配置反向代理](https://doc.chatmoney.cn/docs/images/general/config/proxy/2.png)

### 3. 编辑配置
- 点击【编辑】进行额外配置

![编辑配置](https://doc.chatmoney.cn/docs/images/general/config/proxy/3.png)

### 4. Nginx配置
在Nginx配置文件中添加以下内容：