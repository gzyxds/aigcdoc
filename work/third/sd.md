# SD(stable-diffusion-webui)绘图部署

::: danger 提示

使用Docker部署，支持服务器连接本地主机部署的绘画模型。使用大模型只需要一台主机，不需要其他费用。
:::

信息
由于硬件等问题，部署存在一起难度，小白用户推荐购买已安装SD绘画和大模型的显卡AI主机：[https://www.goofish.com/item?id=836172376138](https://www.goofish.com/item?id=836172376138)

::: danger 注意
本教程如果涉及本地主机部署，需要本地主机可以连接境外站点，特别是安装依赖或者打开某些站点的时候。
请自行解决此问题。
::: 

## 安装Python环境

打开[https://www.python.org/downloads](https://www.python.org/downloads)，找到适合自己系统环境的安装包，下载并安装Python3.10.6。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/download-python-1.png)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/download-python-2.png)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/install-python.png)

## 安装Git

打开[https://git-scm.com](https://git-scm.com/)，找到适合自己系统环境的安装包，下载并安装git。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/install-git-1.png)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/install-git-2.png)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/install-git-3.png)

## 使用Git下载stable-diffusion-webui

::: danger 注意

由于github是境外网站，网络问题可能会导致命令执行失败，请弄好网络，多次重试。
:::  
右键点击桌面或者其他目录，选择【在终端中打开】，输入以下命令后，【回车键】执行命令，对项目git仓库进行克隆，项目会下载到对应目录。

```
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/download-sd-webui-1.png)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/download-sd-webui-2.png)

## 启动stable-diffusion-webui

::: danger 提示

在启动之前，可以根据系统或者硬件，编辑webui-user修改参数，优化生成图像速度。
具体可参考官网文档:[https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki)
:::  

* **步骤1**: 打开stable-diffusion-webui目录，找到webui-user.bat文件，右键编辑文件，添加`--api --listen --xformers --no-half`参数,然后保存文件。

 

```
@echo off

set PYTHON=
set GIT=
set VENV_DIR=
set COMMANDLINE_ARGS=--api --listen --xformers --no-half

call webui.bat
```

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/edit-webui-user.bat.png)

::: danger 提示

可以在本地主机打开[127.0.0.1:7860](https://doc.chatmoney.cn/pro/third-deployment/127.0.0.1:7860.html)，测试绘画是否可用。
:::  

* **步骤2**: 双击webui-user.bat文件，双击启动服务，启动成后，会启动弹出浏览器界面，默认端口为7860。如果你是使用云服务器，请在服务器运营商控制台开放7860端口，然后管理后台【AI应用】-\>【SD绘图】-\>【应用配置】-\>【AI域名】配置上：[http://公网IP+端口访问](http://xn--ip+-tw1ew6iu74fkogqz0an4u/)，设置好关于SD绘图分类模型等。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/start-sd.png)

## 添加绘画模型

::: danger 提示
不添加也可用使用SD默认的模型。
:::  

绘画模型可以在[https://www.liblib.art](https://www.liblib.art/)或者其他站点下载，有的模型商用需要授权，请自行判断。下载的模型文件格式为safetensors。models/Stable-diffusion目录放大模型、models/Lora目录放微调模型、models/VAE目录放美化模型。模型放好，关闭重启程序。

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/models.png)

## 服务器连接本地主机部署的服务

::: tip 提示

全能AI知识库系统3.5以后的版本，支持使用frp连接本地部署的绘画服务器和模型，无需购买GPU服务器，即可使用开源模型。
:::  


::: danger 注意

如果你在服务器部署大语言模型，直接绕过本步骤。
:::  
### 服务器上的设置

* **步骤1**: 打开项目下/docker/config/frps/frps.toml文件，将auth.token字符串的密钥重新定义，可以使用其他任意非中文字符串，然后保存。

 

```
bindPort = 7314
auth.token = "自己设置的非中文字符串"
```

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/frps.toml.png)

* **步骤2**: 打开项目下/docker/config/supervisor/supervisor.ini文件，在最底部增加frps的守护进程，然后保存。

 

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

::: tip 提示

如何测试端口是否放行，可以打开[https://tool.chinaz.com/port](https://tool.chinaz.com/port),输入服务器IP地址和端口，点击【开启扫描】，状态为开启，即端口是连通的。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/test-port.png)
::: 



::: danger ⚠️ 警告
如果已经使用3.5以下老版本，步骤所有不同，步骤1的文件可能不存在，可以从新下载的源码复制进去，放在相同的位置，按步骤1的操作。步骤2照样操作。
然后打开项目下docker-compose.yml文件，找到PHP容器配置，将除了"user:xxxx"选项以外替换为新版本的内容，注意保持缩进（就是前面有多少空格不要更改）。
![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/docker-compose-php.png)返回【Docker】-\>【容器】，然后删除属于本项目下的所有容器，一般情况下，删除容器不会数据，如果不放心可先备份。接着返回【容器编排】，删除之前添加的容器编排，重新添加即可。
:::  

### 本地主机上的设置

::: tip 提示

frp是一款非常优秀的内网穿透软件。

* **步骤1**: 在部署SD服务的主机上，打开[https://github.com/fatedier/frp/releases](https://github.com/fatedier/frp/releases)，下载自己系统相对应的frp0.58.1软件版本，“解压下载的压缩包。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/download-frp.png)
* **步骤2**: 右键点击【frpc.toml】文件，点击【在记事本中编辑】，打开文件，然后设置frpc信息，其中serverAddr为服务器ip地址，auth.token为服务器上frps.toml的auth.token的值一致，localPort和remotePort为SD服务器的端口，然后保存文件。
:::  
 

```
serverAddr = "你的ip地址"
serverPort = 7314
auth.token = "你服务上设置的任意非中文字符串"

[[proxies]]
name = "sd"
type = "tcp"
localIP = "127.0.0.1"
localPort = 7860
remotePort = 7860
```

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/frpc.toml.png)

::: danger ⚠️ 提示

frpc启动失败，可能是以下原因。
1.服务器公网IP地址、端口、auth.token设置不正确。
2.服务器端口没有对外开放，无法连通。
3.服务器上容器的frps没有正确运行。
:::  


* **步骤3**: 在frp目录空白处右键【在终端中打开】，在终端运行以下命令，运行frpc，启动成功好，可以看到以下界面。

shell 
```
.\frpc.exe -c frpc.toml
```

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/start-frpc.png)

## 管理后台配置

::: danger ⚠️ 提示

一般情况下，使用普通的独立显卡，绘制默认分辨率的画，在10秒内。
::: 

登录管理后台，打开【AI应用】-\>【SD绘图】-\>【应用配置】，【AI域名】如果了使用【## 服务器连接本地主机部署的服务 】，设置为`http://127.0.0.1:7860`，如果不使用，直接配置服务器的IP地址+端口，最好设置好关于SD绘图分类模型等，这样完成了，可以在前台测试绘画。![](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/settings-sd-local-domain.png)