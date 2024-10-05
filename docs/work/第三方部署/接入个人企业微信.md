# 对接微信

## 接入说明

提示

我们使用 **chatgpt-on-wechat** 这个项目来接入；
无论是个人微信还是企业微信都使用这个项目。
具体如何安装这边不过多阐述，请自行阅读官方文档安装。
**官方项目地址:**  **[https://github.com/zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat)**

## 需要设备

* **1. 一台服务器，国内国外均可**
* **2. 一个企业微信账号，个人和已认证的企业均支持**
* **3. 特别说明: 企业微信的监听需要 windows 的系统**
* **PS: 必须是已进行实名认证的微信号 (未实名的无法登录)**

## 一、接入企业微信

企业微信的接入在开源项目 `chatgpt-on-wechat` 的基础上进行。

**步骤一:**

`根据自己的系统版本获取到apiKey`

[【1.7.* 版本 获取密钥的方法, 点击跳转查看】](https://doc.chatmoney.cn/pro/third-deployment/on-wechat.html#v1%E7%89%88%E6%9C%AC%E7%9A%84%E5%88%86%E4%BA%AB%E5%AF%86%E9%92%A5)

[【&gt;=2.0.0版本 获取密钥的方法, 点击跳转查看】](https://doc.chatmoney.cn/pro/third-deployment/on-wechat.html#v2%E7%89%88%E6%9C%AC%E7%9A%84%E5%88%86%E4%BA%AB%E5%AF%86%E9%92%A5)

**步骤二:**

* 1、下载 `chatgpt-on-wechat` 第三方开源项目
* 2、下载地址: `https://github.com/zhayujie/chatgpt-on-wechat`
* 3、下载完成后得到一个压缩包: `chatgpt-on-wechat-master.zip` (把它解压)

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/chatgpt-on-wechat.png)

**步骤三:**

* 1、打开 `chatgpt-on-wechat` 解压出来的项目,进行配置修改
* 2、主要修改三个配置参数, (PS: 配置文件里面没有的配置自行加上即可)
* 3、操作如下图所示:

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/config_001.png)

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/config_002.png)

注意事项：

企业微信需要 下载一个 指定的企业微信版本 用来监听
具体使用请参考以下文档:
**文档地址:**  **[https://github.com/zhayujie/chatgpt-on-wechat/pull/1385](https://github.com/zhayujie/chatgpt-on-wechat/pull/1385)**

**文档提到要安装一个依赖:** 
pip install ntwork
**这个依赖你可能无法安装上,你可以用以下命令进行安装:** 
(国内源安装): pip install -i [https://pypi.tuna.tsinghua.edu.cn/simple](https://pypi.tuna.tsinghua.edu.cn/simple) ntwork
**PS: 经测试需要使用** **​`3.10.*`​**  **python的版本才能安装该依赖, 否则可能会提示找不到依赖包的错误。**

**步骤四 (安装依赖):**

shell

```
# 1、终端打开项目
cd chatgpt-on-wechat-master

# 2、安装核心依赖：
pip3 install -r requirements.txt

# 3、安装拓展依赖：
pip3 install -r requirements-optional.txt

# 4、安装好依赖后、就可以把项目运行起来了
python app.py

# 5、运行后会弹出一个二维码, 企业微信扫码登录, 按提示等待大概1分钟左右

# PS: 企业微信上述有提到 要安装指定的版本, 别搞错了。还要安装 ntwork依赖
```

**步骤五:**

* 1、其实到这里整个项目的部署已经完成了
* 2、接下来就是打开企业微信正常使用即可
* 3、如何使用就自行看 `chatgpt-on-wechat` 文档吧
* 4、私聊: 私聊默认是发送: @bot 要提问的问题
* 5、群聊: 是@登录的企业微信账号
* **PS: 群聊需要在 config.json 配置群名称白名单, 否则无法群聊。（官方文档有说）**

## 二、接入个人微信

* 需要修改 config.json 的几个配置项
* 如企业微信不一样的是 channel\_type 等于 wx
* 配置如下:

json

```
{
  "channel_type": "wx",
  "open_ai_api_key": "YOUR API KEY",
  "open_ai_api_base": "YOUR BASE URL",
}
```

**启动运行：**

* 1、然后运行项目 `python app.py`
* 2、按提示登录扫码登录微信
* 3、PS: 群聊需要在 config.json 配置群名称白名单, 否则无法群聊。（官方文档有说）

**个人微信的部署和企业微信的区别**

* **1、**​**​`channel_type`​** **参数值不一样**
* **2、 个人微信不需要指定微信版本, 企业微信需要指定版本**
* **3、 个人微信不需要安装额外的依赖, 企业微信需要安装** **​`ntwork`​** **依赖**
* **除上述3个不一样的地方, 其它的地方是完全一样的。**

## v1版本的分享密钥

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/get_key_001.png)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/get_key_002.png)

## v2版本的分享密钥

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/2.0-key-001.png)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/2.0-key-002.png)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/2.0-key-003.png)