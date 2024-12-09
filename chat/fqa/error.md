常见错误问题处理[​](https://doc.chatmoney.cn/chat/qa/error.html#%E5%B8%B8%E8%A7%81%E9%94%99%E8%AF%AF%E9%97%AE%E9%A2%98%E5%A4%84%E7%90%86)
=================================================================================================================================

授权错误提示[​](https://doc.chatmoney.cn/chat/qa/error.html#%E6%8E%88%E6%9D%83%E9%94%99%E8%AF%AF%E6%8F%90%E7%A4%BA)
-------------------------------------------------------------------------------------------------------------

### ①站点设置多域名[​](https://doc.chatmoney.cn/chat/qa/error.html#_1%E7%AB%99%E7%82%B9%E8%AE%BE%E7%BD%AE%E5%A4%9A%E5%9F%9F%E5%90%8D)

站点配置了两个域名，授权文件只支持单域名，无论访问哪个域名，都会提醒授权错误。删除没有授权的域名即可。

### ②反向代理和docker运行[​](https://doc.chatmoney.cn/chat/qa/error.html#_2%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%E5%92%8Cdocker%E8%BF%90%E8%A1%8C)

使用了反向代理，导致授权文件识别不出来，发送域名选项需要填写$host，如果反向代理的是docker，需要将docker域名设置为和授权域名一致。 改完nginx以后记得重启nginx，改完nginx容器以后，记得重启容器。![](https://doc.chatmoney.cn/docs/images/general/qa/error/license-3-1.png)![](https://doc.chatmoney.cn/docs/images/general/qa/error/license-3-2.png)

PC端无法扫码登录[​](https://doc.chatmoney.cn/chat/qa/error.html#pc%E7%AB%AF%E6%97%A0%E6%B3%95%E6%89%AB%E7%A0%81%E7%99%BB%E5%BD%95)
---------------------------------------------------------------------------------------------------------------------------

### ①缺少配置[​](https://doc.chatmoney.cn/chat/qa/error.html#_1%E7%BC%BA%E5%B0%91%E9%85%8D%E7%BD%AE)

登录管理后台->【渠道设置】->【微信公众号设置】->【公众号配置】。 登录微信公众平台[https://mp.weixin.qq.com/，【设置与开发】-](https://mp.weixin.qq.com/%EF%BC%8C%E3%80%90%E8%AE%BE%E7%BD%AE%E4%B8%8E%E5%BC%80%E5%8F%91%E3%80%91-)\>【基本设置】。 按一下步骤，将信息填写即可。![](https://doc.chatmoney.cn/docs/images/general/qa/error/pc-wechat-login.png)

### ①域名被微信封了[​](https://doc.chatmoney.cn/chat/qa/error.html#_1%E5%9F%9F%E5%90%8D%E8%A2%AB%E5%BE%AE%E4%BF%A1%E5%B0%81%E4%BA%86)

在后台设置了公众号，设置的时候参数都正确，但是报错了，或者设置好了，无法扫码登录。很可能是域名被微信封了。可以用微信发条链接，自己打开试试，可以申诉解决。

微信支付问题[​](https://doc.chatmoney.cn/chat/qa/error.html#%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98%E9%97%AE%E9%A2%98)
-------------------------------------------------------------------------------------------------------------

### ①没有填写API3密钥[​](https://doc.chatmoney.cn/chat/qa/error.html#_1%E6%B2%A1%E6%9C%89%E5%A1%AB%E5%86%99api3%E5%AF%86%E9%92%A5)

本系统要求填写的是微信API3的密钥，并非API2密钥，虽然填写API2密钥完可以支付，但是微信支付回调会异常，导致会员没开通或者次数无增加。

### ②API2密钥与API3密钥设置一样[​](https://doc.chatmoney.cn/chat/qa/error.html#_2api2%E5%AF%86%E9%92%A5%E4%B8%8Eapi3%E5%AF%86%E9%92%A5%E8%AE%BE%E7%BD%AE%E4%B8%80%E6%A0%B7)

如果将微信的API2和API3密钥设置一样，虽然填写完可以支付，但是微信支付回调会异常，导致会员没开通或者次数无增加。

### ③设置支付的时候，微信支付证书和微信支付证书密钥搞反[​](https://doc.chatmoney.cn/chat/qa/error.html#_3%E8%AE%BE%E7%BD%AE%E6%94%AF%E4%BB%98%E7%9A%84%E6%97%B6%E5%80%99-%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98%E8%AF%81%E4%B9%A6%E5%92%8C%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98%E8%AF%81%E4%B9%A6%E5%AF%86%E9%92%A5%E6%90%9E%E5%8F%8D)

微信支付证书和微信支付证书密钥搞反会导致无法支付或者支付完会员没开通或者次数无增加。

海报无法生成[​](https://doc.chatmoney.cn/chat/qa/error.html#%E6%B5%B7%E6%8A%A5%E6%97%A0%E6%B3%95%E7%94%9F%E6%88%90)
-------------------------------------------------------------------------------------------------------------

之前部分环境无法使用海报，更新系统以后，重新选图片设置海报背景即可。

小程序编译错误[​](https://doc.chatmoney.cn/chat/qa/error.html#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BC%96%E8%AF%91%E9%94%99%E8%AF%AF)
-----------------------------------------------------------------------------------------------------------------------

在上传小程序的时候，出现HbuilderX编译错误，请重新下载最新的源码，按教程重新操作。如果已是使用最新源码，删除依赖，然后重新编译。![](https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-build.png)

小程序无法下载绘图生成的图片[​](https://doc.chatmoney.cn/chat/qa/error.html#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%97%A0%E6%B3%95%E4%B8%8B%E8%BD%BD%E7%BB%98%E5%9B%BE%E7%94%9F%E6%88%90%E7%9A%84%E5%9B%BE%E7%89%87)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

提示"downloadFile:fail ur not in domain list"，因为绘图的链接与小程序接口不是同一域名，可能是第三方或者反向代理的域名。![](https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-download-error.png)需要在小程序后台设置该图片域名。获取改域名的方法是打开后台菜单【绘画记录】，然后右键生成的图片，或者链接，内容前面的域名为图片域名。![](https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-download-url.png)

MJ直链绘图失败[​](https://doc.chatmoney.cn/chat/qa/error.html#mj%E7%9B%B4%E9%93%BE%E7%BB%98%E5%9B%BE%E5%A4%B1%E8%B4%A5)
-----------------------------------------------------------------------------------------------------------------

### ①MJ官网绘图失败[​](https://doc.chatmoney.cn/chat/qa/error.html#_1mj%E5%AE%98%E7%BD%91%E7%BB%98%E5%9B%BE%E5%A4%B1%E8%B4%A5)

首先登录MJ账号，看看账号里绘图是否成功，如果没成功话，可能是词的问题或者其他原因，JM官方绘图失败。  

### ②图片代理域名错误[​](https://doc.chatmoney.cn/chat/qa/error.html#_2%E5%9B%BE%E7%89%87%E4%BB%A3%E7%90%86%E5%9F%9F%E5%90%8D%E9%94%99%E8%AF%AF)

如果登录MJ账号绘图成功了，系统却看不到图或者没成功，检查一下图片代理域名是否有问题，检查一下是否防火墙阻挡了绘图回调。代理域名不要使用http，需要 https。

### ③完全没看MJ直连文档或者跳着看就操作[​](https://doc.chatmoney.cn/chat/qa/error.html#_3%E5%AE%8C%E5%85%A8%E6%B2%A1%E7%9C%8Bmj%E7%9B%B4%E8%BF%9E%E6%96%87%E6%A1%A3%E6%88%96%E8%80%85%E8%B7%B3%E7%9D%80%E7%9C%8B%E5%B0%B1%E6%93%8D%E4%BD%9C)

所有文档都是没多余的字，需要全部阅读理解。

频繁出现502[​](https://doc.chatmoney.cn/chat/qa/error.html#%E9%A2%91%E7%B9%81%E5%87%BA%E7%8E%B0502)
-----------------------------------------------------------------------------------------------

部署好，访问网站频繁出现502，要考虑为PHP扩展冲突，检测所有的PHP版本是否安装opcache，建议删除。该扩展删除一般对系统没有任何影响。![](https://doc.chatmoney.cn/docs/images/general/php/error/502-1.png)

忘记超级管理密码怎么办？[​](https://doc.chatmoney.cn/chat/qa/error.html#%E5%BF%98%E8%AE%B0%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%AF%86%E7%A0%81%E6%80%8E%E4%B9%88%E5%8A%9E)
----------------------------------------------------------------------------------------------------------------------------------------------------------------

登录宝塔以后，单击【网站】->【PHP项目】,在站点列表找到网站的站点，根目录里面点击进入站点根目录。![](https://doc.chatmoney.cn/docs/images/general/php/error/password-1.png)点击【终端】。![](https://doc.chatmoney.cn/docs/images/general/php/error/password-2.png)输入root账号密码并登录，在终端输入 `php think passwor (你想设置的密码,不含括号)`，回车即可重新设置管理密码。![](https://doc.chatmoney.cn/docs/images/general/php/error/password-3.png)

### 500错误[​](https://doc.chatmoney.cn/chat/qa/error.html#_500%E9%94%99%E8%AF%AF)

具体请参考500错误文档