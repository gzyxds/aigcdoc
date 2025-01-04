微信公众号[​](https://doc.chatmoney.cn/dm/front/oa.html#%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7)
=================================================================================================

::: danger ⚠️ 警告
需要使用企业认证的服务号，订阅号不可用。
:::

IP白名单配置 
 

打开[https://mp.weixin.qq.com](https://mp.weixin.qq.com/)，登录微信公众号。单击【设置与开发】->【基本设置】，找到IP白名单项，设置你使用服务器的外网IP，一般为宝塔可以登录的地址的IP。! 

开发者信息与服务器配置 

::: danger ⚠️ 警告
此步骤比较多，没按步骤做，容易出错。  
1.第⑲步一定要先保存，不然第⑳步启用的时候，会报token验证失败。  
2.最后一步一定要让公众号服务器配置属于启用状态，否则PC端无法使用。
:::

①②③登录管理后台，单击【渠道设置】->【微信公众号】->【公众号设置】。  
④⑤浏览器打开新的窗口，登录微信公众号后台，单击【设置与开发】->【基本配置】。  
⑥⑦在公众号后台复制AppID到管理后台相应输入框。  
⑧⑨在公众号后台复制AppSecret到管理后台相应输入框。  
⑩在公众号后台单击【修改配置】。  
⑪⑫在管理后台复制【服务器配置】->【URL】到公众号后台【服务器配置】->【服务器地址(URL)】。  
⑬⑭按要求在管理后台自行填写【服务器配置】的【Token】值，Token值可以自己定义填写，然后复制到【服务器配置】->【令牌(Token)】。  
⑮⑯在公众号管理后台的【消息加密密钥(EncodingAESkey)】随机生成一个值，复制到管理后台的【EncodingAESkey】。  
⑰⑱在管理后台设置【服务器配置】->【消息加密方式】为【明文模式】，然后在公众号后台的【消息加解密方式】设置为【明文模式】。 ⑲在管理后台单击【保存】。  
⑳在公众号单击【启用】，要用服务器配置为启用状态。  
 
域名配置 
---------------------------------------------------------------------------------------

::: danger ⚠️ 警告

下载验证文件，重复下载系统可能会对文件进行改名，文件名要与公众号后台显示的一直，否则无法验证。
:::
在公众号后台单击【设置与开发】->【公众号设置】，【业务域名】->【设置】，下载验证文件。![](https://doc.chatmoney.cn/docs/images/general/front/oa/domain-1.png)登录宝塔，点击【文件】，找到项目的server/public目录，上验证传文件。![](https://doc.chatmoney.cn/docs/images/general/front/oa/domain-2.png)在【业务域名】项中填写项目域名，单击【保存】。![](https://doc.chatmoney.cn/docs/images/general/front/oa/domain-3.png)在【JS接口安全域名】项中填写项目域名，单击【保存】。![](https://doc.chatmoney.cn/docs/images/general/front/oa/domain-4.png)在【网页授权域名】项中填写项目域名，单击【保存】。![](https://doc.chatmoney.cn/docs/images/general/front/oa/domain-5.png)

#### 菜单设置 

::: danger 注意
填写域名一定要加上mobile，否则IOS设备进入页面后分享链接会出现问题。
:::

在管理后台单击【渠道设置】->【微信公众号】->【菜单管理】，填写菜单名称，设置跳转链接，填写 [https://域名/mobile](https://xn--eqrt2g/mobile) ,单击【保存】。![](https://doc.chatmoney.cn/docs/images/general/front/oa/menu.png)