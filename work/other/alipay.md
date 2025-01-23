# 支付宝支付配置指南

## 创建应用

1. 登录支付宝开放平台：[https://open.alipay.com](https://open.alipay.com/)
2. 进入控制台 -> 自研服务 -> 网页&移动应用
   ![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=05874d234af3f08b93f71bd14f3b195f)
3. 点击添加应用并配置相关能力
   ![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=ece349cb2883bbcbdfdca0102513c796)
4. 进入应用信息 -> 开发信息
5. 填写授权回调地址：`你的域名/payment/aliNotify`
   ![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=588b7970bd5936272d8c3c60ea3353e4)
6. 创建完成后保存好APPID

## 生成应用的公私钥

1. 参考[支付宝官方文档](https://opendocs.alipay.com/open/291/105971)生成密钥
   ![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=b583370a034c3ed395105a1116864760)
2. 妥善保存生成的应用私钥和支付宝公钥

## 系统配置

1. 进入系统后台
2. 设置 -> 支付设置 -> 支付宝设置
   ![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=2ec5daaced2a44ad5b4f8629c9fd2fa0)