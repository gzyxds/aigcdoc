# LMstudio（本地大模型）

提示

使用Docker部署，支持服务器连接本地主机部署的大语言模型。使用大模型只需要一台主机，不需要其他费用。

信息

由于硬件等问题，部署存在一起难度，小白用户推荐购买已安装SD绘画和大模型的显卡AI主机：[https://www.goofish.com/item?id=836172376138](https://www.goofish.com/item?id=836172376138)

注意

本教程如果涉及本地主机部署，需要本地主机可以连接境外站点，请自行解决此问题。

## 安装LMstudio

打开[https://lmstudio.ai/](https://lmstudio.ai/)，找到适合自己系统环境的安装包，下载好后双击安装包进行安装。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/download-lmstudio.png)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/install-lmstudio.png)

## 下载大语言模型

注意

本步骤可能由于网络问题，无法显示大模型列表和下载。

在LMstudio上搜索大语言模型，这里以通义千问为例进行说明。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/search-model.png)然后从大模型列表中选择并下载模型。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/download-model.png)

## 测试大语言模型

点击【💬图标】，选择加载已经下载好的大语言模型，在聊天框输入信息即可得到大模型语言的回复。
回复速度与主机配置有关，同时也可以查阅关于如何配置LMstudio GPU的相关资料。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/loading-model.png)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/test-model.png)

## 启动大语言模型接口服务

点击【↔︎图标】-\>【Start Server】，启动接口服务，默认端口为1234。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/start-api.png)

## 服务器连接本地主机部署的服务

提示

全能AI知识库系统3.5以后的版本，支持使用frp连接本地部署的绘画服务器和模型，无需购买GPU服务器，即可使用开源模型。

注意

如果你在服务器部署大语言模型，直接绕过本步骤。

### 服务器上的设置

* **步骤1**: 打开项目下/docker/config/frps/frps.toml文件，将auth.token字符串的密钥重新定义，可以使用其他任意非中文字符串，然后保存。

ini

```
bindPort = 7314
auth.token = "自己设置的非中文字符串"
```

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/frps.toml.png)

* **步骤2**: 打开项目下/docker/config/supervisor/supervisor.ini文件，在最底部增加frps的守护进程，然后保存。

ini

```
[program:frps]
command=/usr/bin/frps -c /usr/local/etc/frps.toml
directory=/usr/local/etc
autostart=true
autorestart=true
stderr_logfile=/var/log/frps.err.log
stdout_logfile=/var/log/frps.out.log
```

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/supervisor.ini.png)

* **步骤3**: 点击【Docker】-\>【容器】，找到项目的PHP容器，点击【重启】。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/php-container-restart.png)
* **步骤4**: 点击在宝塔面板【安全】-\>【添加端口规则】，将7314端口放行。 然后在服务器服务商的（阿里云、腾讯云等）控制台的安全组开放7314端口，保障端口是连通的。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/port.png)

提示

如何测试端口是否放行，可以打开[https://tool.chinaz.com/port](https://tool.chinaz.com/port),输入服务器IP地址和端口，点击【开启扫描】，状态为开启，即端口是连通的。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/test-port.png)

⚠️ 警告

如果已经使用3.5以下老版本，步骤所有不同，步骤1的文件可能不存在，可以从新下载的源码复制进去，放在相同的位置，按步骤1的操作。步骤2照样操作。
然后打开项目下docker-compose.yml文件，找到PHP容器配置，将除了"user:xxxx"选项以外替换为新版本的内容，注意保持缩进（就是前面有多少空格不要更改）。
![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/docker-compose-php.png)返回【Docker】-\>【容器】，然后删除属于本项目下的所有容器，一般情况下，删除容器不会数据，如果不放心可先备份。接着返回【容器编排】，删除之前添加的容器编排，重新添加即可。

### 本地主机上的设置

提示

frp是一款非常优秀的内网穿透软件。

* **步骤1**: 在部署SD服务的主机上，打开[https://github.com/fatedier/frp/releases](https://github.com/fatedier/frp/releases)，下载自己系统相对应的frp0.58.1软件版本，“解压下载的压缩包。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/download-frp.png)
* **步骤2**: 右键点击【frpc.toml】文件，点击【在记事本中编辑】，打开文件，然后设置frpc信息，其中serverAddr为服务器ip地址，auth.token为服务器上frps.toml的auth.token的值一致，localPort和remotePort为SD服务器的端口，然后保存文件。

ini

```
serverAddr = "你的ip地址"
serverPort = 7314
auth.token = "你服务上设置的任意非中文字符串"

[[proxies]]
name = "sd"
type = "tcp"
localIP = "127.0.0.1"
localPort = 1234
remotePort = 1234
```

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/frpc.toml.png)

提示

frpc启动失败，可能是以下原因。
1.服务器公网IP地址、端口、auth.token设置不正确。
2.服务器端口没有对外开放，无法连通。
3.服务器上容器的frps没有正确运行。

* **步骤3**: 在frp目录空白处右键【在终端中打开】，在终端运行以下命令，运行frpc，启动成功好，可以看到以下界面。

shell

```
.\frpc.exe -c frpc.toml
```

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/start-frpc.png)

## 管理后台配置

登录管理后台，打开【AI应用】-\>【SD绘图】-\>【应用配置】，【AI域名】如果了使用【## 服务器连接本地主机部署的服务 】，设置为`http://127.0.0.1:1234`，如果不使用，直接配置服务器的公网IP地址和端口。配置完成以后，可以在前台选择LMstudio测试。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/admin-settings-model-1.png)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/admin-settings-model-2.png)