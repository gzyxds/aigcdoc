# 安卓App打包教程

本教程将指导您如何完成安卓App的打包工作。请确保在打包前已完成所有必要的准备工作。

---

## 打包前准备

⚠️ **警告**：
- **APP上架需要ICP备案**。
- 请确保项目已经初始化完成后再进行打包。如果没有初始化完成，请查看左侧菜单的【二次开发】进行项目初始化。

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

## 安卓APP开始打包

1. 在`Hbuilder x`上方菜单选择【发行】 => 【原生APP-云打包】。

![打包步骤1](https://doc.chatmoney.cn/docs/images/general/front/app_build/10.png)
![打包步骤2](https://doc.chatmoney.cn/docs/images/general/front/app_build/and_build.png)

2. 打包完成后，Hbuilder x会在控制台中提示信息。

![打包完成提示](https://doc.chatmoney.cn/docs/images/general/front/app_build/and_build2.png)

---

### 得到安卓APP安装包后制作应用签名

⚠️ **警告**：
- 应用签名只需生成一次，不必每次打包都生成（安卓包名没有改的前提下）。

1. 打开[微信开放平台](https://open.weixin.qq.com/)并登录。
2. 点击【管理中心】-【移动应用】，点击【查看】。
3. 设置好包名和应用签名（根据输入框右下角提示进行生成应用签名）。
4. 某些安卓手机的第一次设置错误后，重新打包时可能有缓存，导致第二次安装还是上一次的错误。请尝试清除缓存或更换未安装过的手机。
5. 参数设置错误会导致无法使用微信登录和微信支付。

![应用签名1](https://doc.chatmoney.cn/docs/images/general/front/app_build/and_build3.png)
![应用签名2](https://doc.chatmoney.cn/docs/images/general/front/app_build/and_build4.png)
![应用签名3](https://doc.chatmoney.cn/docs/images/general/front/app_build/and_build5.png)

---

## 至此安卓APP打包完成

通过以上步骤，您可以顺利完成安卓App的打包工作。如有任何问题，请参考相关文档或联系技术支持。