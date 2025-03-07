# 🎯 微信支付配置指南 [![链接](https://img.shields.io/badge/文档-查看详情-blue)](https://doc.chatmoney.cn/pro/config/wechatpay.html)

## 💳 支付配置

### 1. 🔑 登录微信支付
- 🌐 访问微信支付官网：[https://pay.weixin.qq.com](https://pay.weixin.qq.com/)
- 👤 使用已有账号登录，若无账号请先注册

### 2. 🛠️ 开通支付产品
- 📂 进入【产品中心】→【我的产品】
- ✅ 开通以下支付产品：
  - 📱 JSAPI支付
  - 💻 Native支付
![支付产品](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/product.png)

### 3. 🔐 APIv3密钥设置
1. 🏢 进入【账户中心】→【API安全】
2. 🔍 找到APIv3，点击【设置】
3. 📝 按要求输入API3密钥并保存
4. 💾 请妥善保存密钥，后续步骤需要使用
![APIv3设置1](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/apiv3-1.png)
![APIv3设置2](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/apiv3-2.png)

### 4. 📜 支付证书申请
1. 🏢 进入【账户中心】→【API安全】→【申请证书】
2. ⬇️ 下载并安装证书工具
3. 🔧 使用证书工具生成证书请求串
4. 📋 将请求串复制到微信支付官网
5. 📥 获取证书串并导入证书工具
6. 📦 生成证书压缩包并妥善保存
![证书申请流程](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-1.png)
![证书工具](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-2.png)
![证书生成](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-3-1.png)
![证书导入](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-3-2.png)
![证书保存](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-4.png)

### 5. 🌐 JSAPI支付授权目录配置
- 🏢 进入【产品中心】→【开发配置】
- 🔒 设置支付目录协议（建议使用https）
- 📝 填写前台域名（格式："域名/"）
- ➕ 点击【添加】完成配置
![支付目录配置](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/pay-href.png)

### 6. 🖥️ 管理后台配置
1. 🔢 获取商户号
   - 🏢 进入【产品中心】→【开发配置】
   - 📋 复制保存商户号
2. ⚙️ 配置支付信息
   - 👤 登录管理后台
   - ⚙️ 进入【系统设置】→【支付设置】→【支付配置】
   - 📝 填写商户信息
   - 📎 上传支付证书
   - ✅ 点击【提交】
![商户号](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/appid.png)
![支付配置](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/set.png)

## 📱 微信公众号支付关联
::: danger ⚠️ 重要提示
完成微信支付配置后，必须关联微信公众号并设置支付目录
:::

### 🔗 关联步骤
1. 🏢 进入【产品中心】→【我的产品】→【JSAPI支付】
2. ⚙️ 配置支付授权目录
3. 🔗 关联微信公众号AppID
4. ✅ 在公众号后台确认关联
![公众号支付关联](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/oa-pay-1.png)

## 📱 微信小程序支付关联
::: danger ⚠️ 重要提示
完成微信支付配置后，必须关联微信小程序并设置支付目录
:::

### 🔗 关联步骤
1. 🏢 进入【产品中心】→【AppID账号管理】→【关联AppID】
2. 📝 填写小程序AppID并提交
3. ✅ 在小程序后台确认关联
![小程序支付关联](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/mnp-pay-1.png)