# 苹果 iOS App 打包教程

本教程将指导您如何完成苹果 iOS App 的打包工作。请确保在打包前已完成所有必要的准备工作。

---

## 打包前准备

⚠️ **警告**：
1. **APP上架需要ICP备案**。
2. 请确保项目已经初始化完成后再进行打包。如果没有初始化完成，请查看左侧菜单的【二次开发】进行项目初始化。
3. 打包苹果APP需要HBuilder的版本大于指定版本。
4. **2024-05-01开始**，需要在隐私清单文件中描述所使用的API，否则将不被苹果应用商店接受审核。
5. HBuilder<^4.0.8>更新云端打包机支持 uni-app 项目配置隐私清单。
6. 点击查看 --> [隐私清单说明](https://uniapp.dcloud.net.cn/tutorial/app-ios-privacyinfo.html)。

---

## 配置准备工作

### 1. APP图标配置
1. 点击`uniapp/src/manifest.json`文件。
2. 点击【APP图标配置】，选择图标。
3. 可设置【自动生成所有图标并替换】。

![APP图标配置](https://doc.chatmoney.cn/docs/images/general/front/app_build/1.png)

---

### 2. APP模块配置

#### 开放平台申请【移动应用】
1. 点击打开[微信开放平台](https://open.weixin.qq.com/)。
2. 登录后，点击【管理中心】-【移动应用】。
3. 如果没有创建移动应用，请为准备上线的APP创建一个，填写资料并提交审核。
4. 审核通过后，点击【查看】，获取AppID和AppSecret。

![开放平台申请1](https://doc.chatmoney.cn/docs/images/general/front/app_build/2.png)
![开放平台申请2](https://doc.chatmoney.cn/docs/images/general/front/app_build/3.png)

---

#### 微信支付后台设置关联APP支付
1. 点击打开[微信支付后台](https://pay.weixin.qq.com/)。
2. 登录后，点击【产品中心】-【我的产品】，开通APP支付。
3. 点击【产品中心】-【AppID账号管理】，关联在微信开放平台申请通过的移动应用。

![微信支付后台设置1](https://doc.chatmoney.cn/docs/images/general/front/app_build/4.png)
![微信支付后台设置2](https://doc.chatmoney.cn/docs/images/general/front/app_build/5.png)

---

#### HBuilder APP模块配置
⚠️ **警告**：
- 点击【App模块配置】。
- 在微信登录项填写从微信开放平台获取的AppID。
- IOS平台通用链接是苹果手机需要的，可根据HBuilder提示自动生成。
- 根据[uniapp官网](https://uniapp.dcloud.net.cn/api/plugins/universal-links.html)文档，设置好3个IOS平台通用链接。
- 需要勾选Auth(登录鉴权)的【微信登录】，以及Payment(支付)，还有Share(分享)。

![HBuilder配置1](https://doc.chatmoney.cn/docs/images/general/front/app_build/6.png)
![HBuilder配置2](https://doc.chatmoney.cn/docs/images/general/front/app_build/7.png)
![HBuilder配置3](https://doc.chatmoney.cn/docs/images/general/front/app_build/8.png)

---

#### 后台管理配置
1. 登录后台，点击【渠道】-【APP设置】。
2. 填写从微信开放平台获取的AppID和AppSecret。

![后台管理配置](https://doc.chatmoney.cn/docs/images/general/front/app_build/9.png)

---

## iOS APP开始打包

1. 在`Hbuilder x`上方菜单选择【发行】 => 【原生APP-云打包】。

![打包步骤1](https://doc.chatmoney.cn/docs/images/general/front/app_build/10.png)
![打包步骤2](https://doc.chatmoney.cn/docs/images/general/front/app_build/ios_build.png)

2. 打包完成后，Hbuilder x会在控制台中提示信息。

![打包完成提示](https://doc.chatmoney.cn/docs/images/general/front/app_build/and_build2.png)

---

### 设置Bundle ID和Universal Links

1. 打开[微信开放平台](https://open.weixin.qq.com/)并登录。
2. 点击【管理中心】-【移动应用】，点击【查看】。
3. 设置好Bundle ID和Universal Links（这个在上面的manifest.json的【模块配置】中已有）。
4. 参数设置错误会导致无法使用微信登录和微信支付。

![Bundle ID设置1](https://doc.chatmoney.cn/docs/images/general/front/app_build/and_build3.png)
![Bundle ID设置2](https://doc.chatmoney.cn/docs/images/general/front/app_build/ios_build2.png)
![Bundle ID设置3](https://doc.chatmoney.cn/docs/images/general/front/app_build/ios_build3.png)

---

### 设置完成后上传iOS APP到App Store中测试或上架

1. 点击下载[Transporter](https://apps.apple.com/cn/app/transporter/id1450874784?mt=1)。
2. 在Transporter软件中上传ipa文件（Transporter需要在MacOS系统的电脑运行）。
3. 上传成功后，点击[苹果开发者后台](https://appstoreconnect.apple.com/apps)进行测试或上架。

---

## 至此iOS APP打包完成

通过以上步骤，您可以顺利完成iOS App的打包工作。如有任何问题，请参考相关文档或联系技术支持。