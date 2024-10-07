# MJ直连服务配置

## 简介

目前midjourney没有提供对外开放的接口，只能在discord平台上体验。但是我们可以通过模拟discord接口提交，配合discord机器人监听频道上的消息实现一个接口调用生图的效果。ChatMoneyAI聊天系统PHP版3.3.2以上版本，自带该服务。

## MJ监听服务器配置

* **步骤1**:
  浏览器打开[discord](https://discord.com/)。
* **步骤2**:
  添加discord服务器。![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696907570434.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696907584558.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696907604475.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696907656268.png)
* **步骤3**:
  添加discord频道(用默认的【常规】频道也可以)。![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696907791831.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696907829249.png)
* **步骤4**:
  添加discord机器人。浏览器打开浏览器打开[地址](https://discord.com/developers/applications) 。
  ![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696907917702.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696907955832.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696908063202.png)
* **步骤5**:
  这里token的就是机器人token，要复制下来保存好，后面需要用到。![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696908102716.png)
* **步骤6**:
  设置一下机器人的一些配置。![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696908534305.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696908576437.png)
* **步骤7**:
  设置完配置后复制一下最下方的地址，浏览器打开，添加机器人到discord服务器(即前面增加的discord服务器)。![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696908594668.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696908651915.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696908717889.png)
* **步骤8**:
  开启一下机器人的【MESSAGE CONTENT INTENT】配置。![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696908975659.png)
* **步骤9**:
  触发生图还需要将midjourney机器人加入到我们的服务器
  首先，浏览器打开[midjourney邀请地址](https://discord.com/invite/midjourney) 接受邀请。![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696909110278.png)
* **步骤10**:
  接受midjourney邀请后可以在discord页面看到midjourney的图标。选择其中一个midjourney频道，找到midjourney机器人，点击midjourney机器人的头像，将其加入到前面增加的discord服务器。![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696909217145.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696909248356.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696909277777.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696909298078.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696909339327.png)
* **步骤11**:
  在discord服务器页面按F12打开调试窗口，然后在输入框内输入/imagine cat，查看调试框内接口请求信息，把接口请求中的guild\_id，channel\_id，session\_id保存下来，后面会用到。(例图中的账号没有付费midjourney，所以输入/imagine后没有生图。)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696909377276.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696918722897.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/1696909815556.png)

## MJ代理设置

提示

由于网络原因，境内无法直接访问discord。如果你使用的是境内服务器，discord中付费midjourney绘图服务。本教程将向您详细介绍如何使用宝塔反向代理 discord。 MJ代理需要配置3个域名。

### 图片代理域名

提示

MJ绘图后，需要显示图片，境内用户访问无法直接查看图片，需要我们配置一个反向代理域名，用来显示图片。配置图片域名代理，建议使用带宽大一些，没其他业务的境外服务器。

* **步骤1**: 单击【网站】-\>【PHP项目】-\>【添加站点】，填写已经解析到此服务器的域名，设置PHP版为纯静态，单击【提交】。![](https://doc.chatmoney.cn/docs/images/general/config/mj/pic-1.png)
* **步骤2**: 单击【设置】-\>【SSL】，选择【文件验证】-\>选择【域名】,单击【申请】，为站点申请SSL证书。![](https://doc.chatmoney.cn/docs/images/general/config/mj/pic-2.png)
* **步骤3**: 单击【反向代理】-\>【添加反向代理】，【目标URL】填写`https://cdn.discordapp.com`，单击【提交】。![](https://doc.chatmoney.cn/docs/images/general/config/mj/pic-3.png)

### API代理域名

单击【网站】-\>【PHP项目】-\>【添加站点】，填写已经解析到此服务器的域名，设置PHP版为纯静态，单击【提交】。![](https://doc.chatmoney.cn/docs/images/general/config/mj/pic-1.png)

* **步骤2**: 单击【设置】-\>【SSL】，选择【文件验证】-\>选择【域名】,单击【申请】，为站点申请SSL证书。![](https://doc.chatmoney.cn/docs/images/general/config/mj/pic-2.png)
* **步骤3**: 单击【反向代理】-\>【添加反向代理】，【目标URL】填写`https://discord.com`，单击【提交】。![](https://doc.chatmoney.cn/docs/images/general/config/mj/api-3.png)

### WSS代理域名

单击【网站】-\>【PHP项目】-\>【添加站点】，填写已经解析到此服务器的域名，设置PHP版为纯静态，单击【提交】。![](https://doc.chatmoney.cn/docs/images/general/config/mj/pic-1.png)

* **步骤2**: 单击【设置】-\>【SSL】，选择【文件验证】-\>选择【域名】,单击【申请】，为站点申请SSL证书。![](https://doc.chatmoney.cn/docs/images/general/config/mj/pic-2.png)
* **步骤3**: 单击【反向代理】-\>【添加反向代理】，【目标URL】填写`https://gateway.discord.gg`，单击【提交】。![](https://doc.chatmoney.cn/docs/images/general/config/mj/wss-3.png)

## 模型配置

⚠️ 警告

注意WSS域名必须是wss协议，非https协议。

①填写MJ图片域名，方便境内访问显示，代理域名设置。
②填写discord代理域名，境外服务器默认不需要代理即可访问。
③填写discord WSS代理域名，境外服务器默认不需要代理即可访问。
④填写步骤11的guild\_id。
⑤填写步骤11的channel\_id。
⑥填写步骤11的session\_id。
⑦填写步骤5的机器人token。![](https://doc.chatmoney.cn/docs/images/general/config/mj/config.png)

## MJ密钥配置

### 使用前提

* 拥有discord账号并且已在discord中付费midjourney绘图服务。
* 知道如何访问外境站点，部分配置操作需要魔法。以下内容默认你已解决网络访问问题。

### 配置流程

* **1**：登录discord账号，获取discord的用户token(需要魔法)。
* **2**：后台系统填写获取到的token和图片代理域名。图片代理域名需自行处理，用于替换discord图片域名，替换后可在没有魔法的情况下图片显示不受影响。如果你的服务器在香港或海外，则无需填写图片代理域名。

### discord

* **1**: 浏览器打开[discord](https://discord.com/)![](https://doc.chatmoney.cn/docs/images/general/config/mj/discord1.png)
* **2**：登录discord账号后，浏览器按F12，查看network中接口请求中authorization的值。复制并保存这个token值。 此token值后续将填写在ChatAl聊天系统后台AI绘画配置处。注意：获取token值后请勿主动退出discord，退出discord账号后已获取的token将失效![](https://doc.chatmoney.cn/docs/images/general/config/mj/discord2.png)

### 后台添加discord的token

登录后台系统，进入【AI设置/key池管理】页面。选择AI绘画点击【新增密钥】,接口类型选择码多多MJ ApiKey填入discord中获取到的token值。![](https://doc.chatmoney.cn/docs/images/general/config/mj/admin-set1.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/admin-set2.png)

## 其他配置

### 小程序图片下载需配置下载域名

下载域名即为图片代理域名。无需图片代理域名情况下，则填写站点域名。如ChatAl聊天系统后台开启模型计费，支持多个绘画模型的情况，则填写多个图片域名。 (例：码多多MJ图片代理域名假设为xxx.com,知数云MJ图片域名为[https://midjourney.cdn.zhishuyun.com](https://midjourney.cdn.zhishuyun.com/)，则downloadFile合法域名填写xxx.com;[https://midjourney.cdn.zhishuyun.com](https://midjourney.cdn.zhishuyun.com/)😉
![](https://doc.chatmoney.cn/docs/images/general/config/mj/mnp-set2.png)![](https://doc.chatmoney.cn/docs/images/general/config/mj/mnp-set1.png)

## 错误排查

#### 1.MJ可以发起指令，可以画图，图片未返回或者超过10分钟更久时间才返回，openssl版本过低，导致机器人监控出问题。

终端运行一下命令域名加443端口号：

shell

```
openssl s_client -connect (自己配置的wss的域名,不带协议头,不含括号):443
```

如果最后返回内容code不是等于0，说明openssl版本过低。

shell

```
Start Time: 1703497628
Timeout   : 300 (sec)
Verify return code: 0 (ok)
```

终端运行一下命令更新openssl。

shell

```
yum update
yum update openssl
```

或者

shell

```
apt update
apt update openssl
```

#### 2.未按文档配置两个守护进程。

配置好参数以后，设置好守护进程。

#### 3.参数配置不正确。

MJ绘画本身不提供接口，依靠程序模拟人的行为去绘图，MJ账号登录以后，不要去退出登录或者其他地方登录，参数可能会改变，参数不对可能导致无法绘画。重新按文档设置参数以后，再重启两个守护进程。

#### 4.某种原因系统权限不足，守护进程无法写入日志。

重新给server/runtime目录www 用户权限。

#### 5.MJ封号

无法绘图的原因可能是MJ封号，可以在MJ网站直接绘画测试。不行则需要更换账号。

### 6.代理地址不通

使用ping命令在部署系统的服务器测试和代理服务器是否可以通讯。

shell

```
ping 域名1
ping 域名2
ping 域名3
```

### 7.代理站点SSL证书过期或者证书的域名和使用域名不完全匹配。

重新申请正确的SSL证书。