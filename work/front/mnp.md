# 编译上传微信小程序 推荐使用

⚠️ 警告

需要使用企业认证微信小程序。

提示

本教程为微信小程序的发布流程，如果有版本更新，请下载最新源码，重复操作编译上传发布微信小程序的步骤。

## 微信小程序类目资质

[https://developers.weixin.qq.com/community/develop/article/doc/000a6c1c700c78bce2204942066813](https://developers.weixin.qq.com/community/develop/article/doc/000a6c1c700c78bce2204942066813)

## AppID、AppSecret设置

登录系统管理后台，点击【渠道设置】-【微信小程序】，打开[https://mp.weixin.qq.com](https://mp.weixin.qq.com/)，登录微信小程序，单击【开发】-\>【开发管理】，复制AppID、AppSecret到管理后台，单击【保存】。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-1.png)

## 服务器域名设置

⚠️ 警告

这里设置的域名，都为本系统的域名，如果有使用对象存储、或者其他地方设置了图片代理域名等，请将使用的域名也增加进去，不然和域名相关的功能可以存在异常。

在微信小程序官方管理后台，单击【开发管理】，找到【服务器域名】项，单击【开始配置】。
在系统管理后台，点击【渠道设置】-【微信小程序】，找到【服务器域名】项，将服务器域名复制到微信小程序管理后台对应输入框，单击【保存并提交】。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-2.png)![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-3.png)

## 业务域名设置

注意

如果增加导航链接或者其他非本系统链接需要在小程序webview打开，除了本系统的域名外，还需要再增加该链接的域名。

* **步骤1**: 在微信小程序官方管理后台，单击【开发管理】，找到【业务域名】项，单击【开始配置】。
  ![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-4.png)
* **步骤2**:

⚠️ 警告

1.如果多次下载，文件可能会被电脑修改名称，请上传时保留原来的文件名称。
2.注意不要弄错项目目录。

单击【下载校验文件】，将文件上传到该域名对应的项目目录的"server/public"路径。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-5.png)![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-6.png)

* **步骤3**: 登录系统管理后台，单击【渠道设置】-\>【微信小程序】，【复制】业务域名。然后在微信小程序官方管理后台填写【保存】。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-7.png)![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-8.png)

## 编译上传微信小程序

### 下载安装

打开[https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，下载适合自己系统的版本，并进行安装。

### 登录账号

打开微信开发者工具，微信扫码登录，扫码的微信必须是该小程序的管理员或者开发者，是否后续步骤会有问题。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-login.png)

### 配置微信开发者工具

点击【设置】-\>【安全】，并启用【服务端口】。这样，下面的步骤中 Hbuilder X 才能够与微信开发者工具进行通信。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-develop.png)

### 下载安装Hbuilder X

访问 Hbuilder X 官网 [https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)，下载适合自己系统的版本，然后进行安装。

### 打开项目

⚠️ 警告

请勿打开源码根目录，要打开源码包下面的uniapp目录。

* **步骤1**: 本地电脑解压下载源码包。
* **步骤2**: 启动Hbuilder X，单击【文件】-\>【打开目录】，现在步骤1解压的源码目录，选择目录下的uniapp目录，【打开】。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-open-1.png)![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-open-2.png)![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-open-3.png)

### 配置uni-app应用标识

打开unaipp/src/manifest.json文件，找到uni-app 应用标识这一项，然后单击 【重新获取】，这样就可以重新设置 uni-app 应用标识。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/get-uni-app-appid.png)

### 服务端配置

注意

1.注意了文件名称前面有个“.”。
2.记得改成配置以后，保存文件。
3.配置的服务端域名一定使用https。 4.Java版配置前台的域名。

* **步骤1**:
  复制.env.production.example文件并改成为.env.production。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/copy-config.png)
* **步骤2**:
  点击.env.production文件，文件配置里面的VITE\_APP\_BASE\_URL值改成自己服务端的https域名，点击【文件】-\>【保存】。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/settings-api.png)

### 安装依赖

单击【工具】-\>【外部命令】-\>【npm install】进行依赖安装。如果提示需要安装插件，请单击确认并继续安装。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/npm-install.png)

### 编译发行

单击【发行】-\>【小程序-微信】，并填写小程序名称和 AppID。然后单击【发行】，这时需要登录小程序编译。如果编译不成功，请重试。编译成功后，会自动弹出微信开发者工具。如果多次编译不成功，可能是前面的步骤没有完成。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-release-1.png)![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-release-2.png)

### 上传小程序

编译成功后，会自动弹出小程序开发者窗口，可以在其中预览微信小程序。点击【上传】-\>【确定】，填写版本号后，点击【上传】，这样就完成微信小程序上传。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-upload-1.png)![](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-upload-2.png)

## 用户隐私保护指引设置

* **步骤1**:
  在小程序官方后台单击【设置】-\>【更新】。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-1.png)
* **步骤2**:
  选择【本小程字处理了用户信息，将如实填写并及时更新用户信息处理情况。】-\>【确定以上内容】。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-2.png)
* **步骤3**:
  设置用户信息与使用接口对应关系，单击【确定】。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-3.png)![](https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-4.png)
* **步骤4**:
  按下图设置，其中电话填写自己的手机号码，单击【确定并生成授权】。

## 提交审核

上传以后，登录小程序官方后台，可以看到小程序的开发版本，提交审核即可。等审核通过，点按钮发布。![](https://doc.chatmoney.cn/docs/images/general/front/mnp/audit.png)