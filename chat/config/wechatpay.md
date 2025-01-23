# 微信支付配置教程

本教程将指导您如何配置微信支付，包括开通支付产品、设置 APIv3 密钥、申请支付证书、配置支付目录以及关联微信公众号和小程序。

---

## 支付配置

### 登录微信支付

1. 打开 [微信支付官网](https://pay.weixin.qq.com/)，登录微信支付账号。如果没有账号，请先注册。

---

### 开通产品

1. 点击【产品中心】->【我的产品】，开通以下产品：
   - **JSAPI 支付**
   - **Native 支付**

![开通产品](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/product.png)

---

### APIv3 密钥设置

1. 点击【账户中心】->【API 安全】，找到 APIv3，点击【设置】。
2. 按要求输入 APIv3 密钥，然后保存。请妥善保存密钥，后续步骤需要填写。

![设置 APIv3 密钥](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/apiv3-1.png)
![保存 APIv3 密钥](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/apiv3-2.png)

---

### 支付证书申请

1. 点击【账户中心】->【API 安全】->【申请证书】。
2. 点击【下载工具】，下载并安装证书工具。
3. 打开证书工具，填写商户号和商户名称，点击【下一步】。
4. 复制证书请求串到微信支付官网，点击【下一步】。
5. 在微信支付官网点击【复制证书串】，在证书工具中点击【下一步】。
6. 点击【查看证书文件夹】，保存生成的证书压缩包，后续步骤需要用到。

![申请证书](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-1.png)
![下载工具](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-2.png)
![填写信息](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-3-1.png)
![复制证书串](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-5.png)
![保存证书](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-7-1.png)

---

### JSAPI 支付授权目录配置

1. 打开【产品中心】->【开发配置】，设置支付目录协议（一般为 HTTPS）。
2. 填写前台域名（如 `https://example.com/`），点击【添加】。

![配置支付目录](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/pay-href.png)

---

### 管理后台配置

1. 打开【产品中心】->【开发配置】，复制微信支付商户号。
2. 登录管理后台，点击【系统设置】->【支付设置】->【支付配置】。
3. 填写商户号、API 密钥，并上传支付证书内容，点击【提交】。

![管理后台配置](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/set.png)

---

## 微信公众号

### 关联微信支付

1. 点击【产品中心】->【我的产品】->【JSAPI 支付】->【开发配置】。
2. 添加支付授权目录（如 `https://example.com/`）。
3. 点击【AppID 账号管理】->【关联 AppID】，填写微信公众号的 AppID。
4. 登录微信公众号后台，点击【广告与服务】->【微信支付】，确认关联。

![关联微信公众号](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/oa-pay-1.png)
![添加支付目录](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/oa-pay-4.png)
![确认关联](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/oa-pay-7.png)

---

## 微信小程序

### 关联微信支付

1. 点击【产品中心】->【AppID 账号管理】->【关联 AppID】，填写微信小程序的 AppID。
2. 登录微信小程序后台，点击【微信支付】，确认关联。

![关联微信小程序](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/mnp-pay-1.png)
![确认关联](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/mnp-pay-3.png)

---

## 至此微信支付配置完成

通过以上步骤，您可以顺利完成微信支付的配置工作。如有任何问题，请参考相关文档或联系技术支持。