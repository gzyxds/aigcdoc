# 微信小程序一键上传教程

本教程将指导您如何通过后台一键上传微信小程序。如果上传失败，建议使用手动编译上传的方式。

## 微信小程序类目资质

请参考微信官方文档：[微信小程序类目资质](https://developers.weixin.qq.com/community/develop/article/doc/000a6c1c700c78bce2204942066813)

## AppID、AppSecret设置

1. 登录系统管理后台，点击【渠道设置】-【微信小程序】。
2. 打开[微信公众平台](https://mp.weixin.qq.com/)，登录微信小程序。
3. 单击【开发】->【开发管理】，复制AppID、AppSecret到管理后台，单击【保存】。

![AppID、AppSecret设置](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-1.png)

## 服务器域名设置

⚠️ **警告**：这里设置的域名都为本系统的域名。如果使用了对象存储或其他设置了图片代理域名的地方，请将使用的域名也增加进去，否则与域名相关的功能可能会出现异常。

1. 在微信小程序官方管理后台，单击【开发管理】，找到【服务器域名】项，单击【开始配置】。
2. 在系统管理后台，点击【渠道设置】-【微信小程序】，找到【服务器域名】项，将服务器域名复制到微信小程序管理后台对应输入框，单击【保存并提交】。

![服务器域名设置1](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-2.png)
![服务器域名设置2](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-3.png)

## 业务域名设置

**注意**：如果增加导航链接或其他非本系统链接需要在小程序webview打开，除了本系统的域名外，还需要增加该链接的域名。

### 步骤1
1. 在微信小程序官方管理后台，单击【开发管理】，找到【业务域名】项，单击【开始配置】。

![业务域名设置1](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-4.png)

### 步骤2
⚠️ **警告**：
1. 如果多次下载，文件可能会被电脑修改名称，请上传时保留原来的文件名称。
2. 注意不要弄错项目目录。

1. 单击【下载校验文件】，将文件上传到该域名对应的项目目录的"server/public"路径。

![业务域名设置2](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-5.png)
![业务域名设置3](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-6.png)

### 步骤3
1. 登录系统管理后台，单击【渠道设置】->【微信小程序】，【复制】业务域名。
2. 在微信小程序官方管理后台填写【保存】。

![业务域名设置4](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-7.png)
![业务域名设置5](https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-8.png)

## 环境配置

### 步骤1
1. 单击【网站】->【Node项目】->【安装node】，建议node18，设置命令版为安装的node版本。

![环境配置1](https://doc.chatmoney.cn/docs/images/general/front/fastmnp/mnp-env-1.png)

### 步骤2
1. 单击【文件】，找到项目目录下“server/extend/miniprogram-ci”，单击【终端】，运行以下命令安装node相关依赖。

```shell
npm install miniprogram-ci --save
```

![环境配置2](https://doc.chatmoney.cn/docs/images/general/front/fastmnp/mnp-env-2.png)

### 步骤3
1. 单击【软件商店】->【已安装】，找到项目所用的PHP版，单击【设置】->【禁用函数】->【删除】函数exec。

![环境配置3](https://doc.chatmoney.cn/docs/images/general/front/fastmnp/mnp-env-3.png)

## 后台上传

### IP白名单
如果设置了上传小程序的IP白名单，请填写服务器IP地址。

![IP白名单](https://doc.chatmoney.cn/docs/images/general/front/fastmnp/set-ip.png)

### 上传小程序
1. 单击【渠道设置】->【微信小程序】->【小程序一键上传】->【上传小程序】。

![上传小程序](https://doc.chatmoney.cn/docs/images/general/front/fastmnp/update.png)

## 用户隐私保护指引设置

### 步骤1
1. 在小程序官方后台单击【设置】->【更新】。

![用户隐私保护指引设置1](https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-1.png)

### 步骤2
1. 选择【本小程序处理了用户信息，将如实填写并及时更新用户信息处理情况。】->【确定以上内容】。

![用户隐私保护指引设置2](https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-2.png)

### 步骤3
1. 设置用户信息与使用接口对应关系，单击【确定】。

![用户隐私保护指引设置3](https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-3.png)
![用户隐私保护指引设置4](https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-4.png)

### 步骤4
1. 按下图设置，其中电话填写自己的手机号码，单击【确定并生成授权】。

## 提交审核
上传以后，登录小程序官方后台，可以看到小程序的开发版本，提交审核即可。等审核通过，点击按钮发布。

---

通过以上步骤，您可以顺利完成微信小程序的一键上传和发布。如有任何问题，请参考相关文档或联系技术支持。