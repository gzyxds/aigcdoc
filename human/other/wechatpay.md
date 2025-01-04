微信支付[​](https://doc.chatmoney.cn/dm/config/wechatpay.html#%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98)
===============================================================================================

支付配置[​](https://doc.chatmoney.cn/dm/config/wechatpay.html#%E6%94%AF%E4%BB%98%E9%85%8D%E7%BD%AE)
-----------------------------------------------------------------------------------------------

### 登录微信支付[​](https://doc.chatmoney.cn/dm/config/wechatpay.html#%E7%99%BB%E5%BD%95%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98)

打开微信支付官网：[https://pay.weixin.qq.com](https://pay.weixin.qq.com/)，登录微信支付账号，如果没有账号，先注册。

### 开通产品[​](https://doc.chatmoney.cn/dm/config/wechatpay.html#%E5%BC%80%E9%80%9A%E4%BA%A7%E5%93%81)

使用本项目，需要开通微信支付一下产品。点击【产品中心】->【我的产品】，开通【JSAPI支付】和【Native支付】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/product.png)

### APIv3密钥设置[​](https://doc.chatmoney.cn/dm/config/wechatpay.html#apiv3%E5%AF%86%E9%92%A5%E8%AE%BE%E7%BD%AE)

*   **步骤1**: 点击【账户中心】->【API安全】，找到APIv3，点击【设置】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/apiv3-1.png)
*   **步骤2**: 按要求输入API3密钥，然后保存，本机也需要保存密钥，后续步骤需要填写。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/apiv3-2.png)

### 支付证书申请[​](https://doc.chatmoney.cn/dm/config/wechatpay.html#%E6%94%AF%E4%BB%98%E8%AF%81%E4%B9%A6%E7%94%B3%E8%AF%B7)

*   **步骤1**: 点击【账户中心】->【API安全】->【申请证书】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-1.png)
*   **步骤2**: 点击【下载工具】，下载后安装该程序。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-2.png)
*   **步骤3**: 打开微信支付商户平台证书工具，同时返回微信支付官网，将商户号和商户名称填写到微信支付商户平台证书工具的界面，然后点击下一步。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-3-1.png)![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-3-2.png)
*   **步骤4**: 复制微信支付商户平台证书的证书请求串到微信支付官网小窗口，然后点击【下一步】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-4.png)
*   **步骤5**: 在微信支付官网点击【复制证书串】，在微信支付商户平台证书工具点击【下一步】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-5.png)
*   **步骤6**: 在微信支付商户平台证书工具点击【下一步】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-6.png)
*   **步骤7**: 在微信支付商户平台证书工具点击查看证书文件夹，这时可以看到一个压缩包，该压缩包是微信证书，需要保存好，后续步骤需要用到。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-7-1.png)![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/cert-7-2.png)

### JSAPI支付授权目录配置[​](https://doc.chatmoney.cn/dm/config/wechatpay.html#jsapi%E6%94%AF%E4%BB%98%E6%8E%88%E6%9D%83%E7%9B%AE%E5%BD%95%E9%85%8D%E7%BD%AE)

打开【产品中心】->【开发配置】，设置好支付目录协议，一般要设置https，填写前台"域名/",点击【添加】->【添加】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/pay-href.png)

### 管理后台配置[​](https://doc.chatmoney.cn/dm/config/wechatpay.html#%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0%E9%85%8D%E7%BD%AE)

**步骤1**: 打开【产品中心】->【开发配置】，可以看到微信支付商户号，复制保存，后续步骤需要用到。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/appid.png)

**步骤2**: 登录管理后台，点击【系统设置】->【支付设置】->【支付配置】，设置支付接口版本，商户类型，填写商户号、商户API密钥。解压之前的步骤保存的微信支付证书，使用文本软件打开，按要求将内容分别复制到为微信支付证书、微信支付证书密钥，点击【提交】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/set.png)

微信公众号[​](https://doc.chatmoney.cn/dm/config/wechatpay.html#%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7)
---------------------------------------------------------------------------------------------------------

⚠️ 警告

配置完微信支付以后，微信支付需要关联微信公众号并设置支付目录，步骤如下。

### 关联微信支付[​](https://doc.chatmoney.cn/dm/config/wechatpay.html#%E5%85%B3%E8%81%94%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98)

**步骤1**: 单击【产品中心】->【我的产品】->【JSAPI支付】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/oa-pay-1.png)**步骤2**: 单击【开发配置】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/oa-pay-2.png)**步骤3**: 找到支付配置项的支付授权目录，单击【添加】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/oa-pay-3.png)**步骤4**: 选择【http或https】，一定要与网站对应，否则无法支付，然后填写域名，注意域名后面有"/"，单击【添加】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/oa-pay-4.png)**步骤5**: 单击【AppID账号管理】->【关联AppID】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/oa-pay-5.png)**步骤6**: 填写微信公众号的AppID，单击【我已阅读并同意】->【提交】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/oa-pay-6.png)**步骤7**: 打开[https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)，登录微信公众号后台，单击【广告与服务】->【微信支付】，单击【确定】，这样微信支付就关联微信公众号。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/oa-pay-7.png)

微信小程序[​](https://doc.chatmoney.cn/dm/config/wechatpay.html#%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F)
---------------------------------------------------------------------------------------------------------

::: danger ⚠️ 警告
配置完微信支付以后，微信支付需要关联微信小程序并设置支付目录，步骤如下。
::: 
**步骤1**: 单击【产品中心】->【AppID账号管理】->【关联AppID】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/mnp-pay-1.png)**步骤2**: 填写微信公众号的AppID，单击【我已阅读并同意】->【提交】。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/mnp-pay-2.png)**步骤3**: 打开[https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)，登录微信小程序后台，单击【微信支付】，单击【确定】，这样微信支付就关联微信小程序。![](https://doc.chatmoney.cn/docs/images/general/config/wechatpay/mnp-pay-3.png)