支付宝支付配置[​](https://doc.chatmoney.cn/pro/config/alipay.html#%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%AF%E4%BB%98%E9%85%8D%E7%BD%AE)
===========================================================================================================================

创建应用[​](https://doc.chatmoney.cn/pro/config/alipay.html#%E5%88%9B%E5%BB%BA%E5%BA%94%E7%94%A8)
---------------------------------------------------------------------------------------------

登录支付宝开放平台[https://open.alipay.com/](https://open.alipay.com/) 控制台->自研服务->网页&移动应用![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=05874d234af3f08b93f71bd14f3b195f)点击刚刚添加的应用添加能力![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=ece349cb2883bbcbdfdca0102513c796)进入应用信息->开发信息,填写授权回调地址:你的域名/payment/aliNotify![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=588b7970bd5936272d8c3c60ea3353e4)创建完成后保存好APPID

生成应用的公私钥[​](https://doc.chatmoney.cn/pro/config/alipay.html#%E7%94%9F%E6%88%90%E5%BA%94%E7%94%A8%E7%9A%84%E5%85%AC%E7%A7%81%E9%92%A5)
-------------------------------------------------------------------------------------------------------------------------------------

可以参考[支付宝官方文档](https://opendocs.alipay.com/open/291/105971)![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=b583370a034c3ed395105a1116864760)保存好生成的应用私钥和支付宝公钥

填写[​](https://doc.chatmoney.cn/pro/config/alipay.html#%E5%A1%AB%E5%86%99)
-------------------------------------------------------------------------

设置->支付设置->支付宝设置![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=2ec5daaced2a44ad5b4f8629c9fd2fa0)