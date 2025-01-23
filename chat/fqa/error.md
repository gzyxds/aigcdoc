# 常见错误问题处理

本指南将帮助您解决系统运行中可能遇到的常见错误问题，包括授权错误、微信支付问题、小程序编译错误等。

 

## 授权错误提示

### ① 站点设置多域名

- **问题描述**：站点配置了两个域名，授权文件只支持单域名，无论访问哪个域名，都会提醒授权错误。
- **解决方案**：删除未授权的域名。

---

### ② 反向代理和 Docker 运行

- **问题描述**：使用反向代理或 Docker 运行时，授权文件无法识别域名。
- **解决方案**：
  1. 在 Nginx 配置中，确保 `$host` 正确传递。
  2. 如果使用 Docker，确保容器域名与授权域名一致。
  3. 修改后重启 Nginx 或 Docker 容器。
- **参考截图**：
  - ![Nginx 配置](https://doc.chatmoney.cn/docs/images/general/qa/error/license-3-1.png)
  - ![Docker 配置](https://doc.chatmoney.cn/docs/images/general/qa/error/license-3-2.png)

---

## PC 端无法扫码登录

### ① 缺少配置

- **问题描述**：PC 端无法扫码登录，可能是缺少微信公众号配置。
- **解决方案**：
  1. 登录管理后台，进入【渠道设置】->【微信公众号设置】->【公众号配置】。
  2. 登录 [微信公众平台](https://mp.weixin.qq.com/)，进入【设置与开发】->【基本设置】。
  3. 根据提示填写相关信息。
- **参考截图**：
  - ![公众号配置](https://doc.chatmoney.cn/docs/images/general/qa/error/pc-wechat-login.png)

---

### ② 域名被微信封禁

- **问题描述**：设置公众号时参数正确，但无法扫码登录，可能是域名被微信封禁。
- **解决方案**：尝试在微信中发送链接，确认是否被封禁。如被封禁，需申诉解决。

---

## 微信支付问题

### ① 未填写 APIv3 密钥

- **问题描述**：系统要求填写微信 APIv3 密钥，而非 APIv2 密钥。填写 APIv2 密钥会导致支付回调异常。
- **解决方案**：确保填写的是 APIv3 密钥。

---

### ② APIv2 与 APIv3 密钥相同

- **问题描述**：APIv2 和 APIv3 密钥设置相同，会导致支付回调异常。
- **解决方案**：确保 APIv2 和 APIv3 密钥不同。

---

### ③ 支付证书与密钥混淆

- **问题描述**：微信支付证书和密钥混淆，导致无法支付或支付后会员未开通。
- **解决方案**：确保正确填写微信支付证书和密钥。

---

## 海报无法生成

- **问题描述**：部分环境无法生成海报。
- **解决方案**：更新系统后，重新选择图片设置海报背景。

---

## 小程序编译错误

- **问题描述**：上传小程序时，HbuilderX 编译错误。
- **解决方案**：
  1. 重新下载最新源码，按教程操作。
  2. 如果已使用最新源码，删除依赖后重新编译。
- **参考截图**：
  - ![编译错误](https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-build.png)

---

## 小程序无法下载绘图生成的图片

- **问题描述**：提示 "downloadFile:fail ur not in domain list"，因为绘图链接与小程序接口域名不一致。
- **解决方案**：
  1. 在小程序后台设置图片域名。
  2. 获取图片域名的方法：打开后台菜单【绘画记录】，右键生成的图片或链接，获取域名。
- **参考截图**：
  - ![下载错误](https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-download-error.png)
  - ![获取域名](https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-download-url.png)

---

## MJ 直链绘图失败

### ① MJ 官网绘图失败

- **问题描述**：MJ 官网绘图失败。
- **解决方案**：登录 MJ 账号，检查绘图是否成功。如果失败，可能是关键词问题或其他原因。

---

### ② 图片代理域名错误

- **问题描述**：MJ 官网绘图成功，但系统无法显示图片。
- **解决方案**：检查图片代理域名是否正确，确保使用 HTTPS。

---

### ③ 未完整阅读 MJ 直连文档

- **问题描述**：未完整阅读 MJ 直连文档，导致操作错误。
- **解决方案**：仔细阅读并理解 MJ 直连文档。

---

## 频繁出现 502 错误

- **问题描述**：部署后频繁出现 502 错误。
- **解决方案**：检查 PHP 扩展冲突，删除 `opcache` 扩展。
- **参考截图**：
  - ![502 错误](https://doc.chatmoney.cn/docs/images/general/php/error/502-1.png)

---

## 忘记超级管理密码

- **问题描述**：忘记超级管理密码。
- **解决方案**：
  1. 登录宝塔面板，进入【网站】->【PHP 项目】，找到站点根目录。
  2. 点击【终端】，输入 `php think password (你想设置的密码,不含括号)`，回车即可重置密码。
- **参考截图**：
  - ![站点根目录](https://doc.chatmoney.cn/docs/images/general/php/error/password-1.png)
  - ![终端](https://doc.chatmoney.cn/docs/images/general/php/error/password-2.png)
  - ![重置密码](https://doc.chatmoney.cn/docs/images/general/php/error/password-3.png)

---

## 500 错误

- **问题描述**：系统出现 500 错误。
- **解决方案**：参考 [500 错误文档](https://doc.chatmoney.cn/chat/qa/error.html#_500%E9%94%99%E8%AF%AF) 进行排查。

---

## 至此常见错误问题处理完成

通过以上步骤，您可以解决系统运行中的常见错误问题。如有其他问题，请参考相关文档或联系技术支持。