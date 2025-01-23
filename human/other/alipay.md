支付宝支付配置
==========================================================================================================================

创建应用
--------------------------------------------------------------------------------------------

登录支付宝开放平台[https://open.alipay.com/](https://open.alipay.com/) 控制台->自研服务->网页&移动应用![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=05874d234af3f08b93f71bd14f3b195f)点击刚刚添加的应用添加能力![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=ece349cb2883bbcbdfdca0102513c796)进入应用信息->开发信息,填写授权回调地址:你的域名/payment/aliNotify![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=588b7970bd5936272d8c3c60ea3353e4)创建完成后保存好APPID

生成应用的公私钥
------------------------------------------------------------------------------------------------------------------------------------

可以参考[支付宝官方文档](https://opendocs.alipay.com/open/291/105971)![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=b583370a034c3ed395105a1116864760)保存好生成的应用私钥和支付宝公钥

填写 
------------------------------------------------------------------------

设置->支付设置->支付宝设置![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=2ec5daaced2a44ad5b4f8629c9fd2fa0)