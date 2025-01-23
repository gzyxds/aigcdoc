# Stable Diffusion WebUI 绘图部署教程

本教程将指导您如何部署 Stable Diffusion WebUI（SD WebUI）绘图服务，支持服务器连接本地主机部署的绘画模型。使用大模型只需要一台主机，无需其他费用。

---

## 提示

- **使用 Docker 部署**：支持服务器连接本地主机部署的绘画模型。
- **硬件要求**：由于硬件等问题，部署存在一定难度。小白用户推荐购买已安装 SD 绘画和大模型的显卡 AI 主机：[https://www.goofish.com/item?id=836172376138](https://www.goofish.com/item?id=836172376138)。
- **网络要求**：如果涉及本地主机部署，需要本地主机可以连接境外站点（如 GitHub）。请自行解决此问题。

---

## 安装 Python 环境

1. 打开 [Python 官网](https://www.python.org/downloads)，找到适合自己系统环境的安装包，下载并安装 **Python 3.10.6**。

![下载 Python](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/download-python-1.png)
![安装 Python](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/install-python.png)

---

## 安装 Git

1. 打开 [Git 官网](https://git-scm.com/)，找到适合自己系统环境的安装包，下载并安装 Git。

![安装 Git](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/install-git-1.png)
![安装 Git 完成](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/install-git-3.png)

---

## 使用 Git 下载 Stable Diffusion WebUI

⚠️ **注意**：由于 GitHub 是境外网站，网络问题可能导致命令执行失败。请确保网络畅通，必要时多次重试。

1. 右键点击桌面或其他目录，选择【在终端中打开】。
2. 输入以下命令，按【回车键】执行，将项目克隆到当前目录：

   ```bash
   git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
   ```

![下载 SD WebUI](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/download-sd-webui-1.png)
![下载完成](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/download-sd-webui-2.png)

---

## 启动 Stable Diffusion WebUI

### 优化启动参数
1. 打开 `stable-diffusion-webui` 目录，找到 `webui-user.bat` 文件。
2. 右键编辑文件，添加以下参数，然后保存：

   ```bat
   @echo off

   set PYTHON=
   set GIT=
   set VENV_DIR=
   set COMMANDLINE_ARGS=--api --listen --xformers --no-half

   call webui.bat
   ```

![编辑 webui-user.bat](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/edit-webui-user.bat.png)

### 启动服务
1. 双击 `webui-user.bat` 文件，启动服务。
2. 启动成功后，浏览器会自动打开默认端口为 `7860` 的界面。
3. 如果是云服务器，请在服务器运营商控制台开放 `7860` 端口，并在管理后台【AI应用】->【SD绘图】->【应用配置】->【AI域名】中配置为 `http://公网IP:7860`。

![启动 SD WebUI](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/start-sd.png)

---

## 添加绘画模型

⚠️ **提示**：不添加模型也可使用 SD 默认的模型。

1. 绘画模型可以在 [Liblib](https://www.liblib.art/) 或其他站点下载（部分模型商用需要授权，请自行判断）。
2. 下载的模型文件格式为 `.safetensors`。
3. 将模型文件放入以下目录：
   - 大模型：`models/Stable-diffusion`
   - 微调模型：`models/Lora`
   - 美化模型：`models/VAE`
4. 放置完成后，关闭并重启程序。

![模型目录](https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/models.png)

---

## 服务器连接本地主机部署的服务

### 服务器上的设置

1. **配置 frps.toml**：
   - 打开项目目录 `/docker/config/frps/frps.toml` 文件。
   - 修改 `auth.token` 为任意非中文字符串，保存文件。

   ```ini
   bindPort = 7314
   auth.token = "自己设置的非中文字符串"
   ```

   ![编辑 frps.toml](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/frps.toml.png)

2. **配置 supervisor.ini**：
   - 打开项目目录 `/docker/config/supervisor/supervisor.ini` 文件。
   - 在文件底部添加以下内容，保存文件。

   ```ini
   [program:frps]
   command=/usr/bin/frps -c /usr/local/etc/frps.toml
   directory=/usr/local/etc
   autostart=true
   autorestart=true
   stderr_logfile=/var/log/frps.err.log
   stdout_logfile=/var/log/frps.out.log
   ```

   ![编辑 supervisor.ini](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/supervisor.ini.png)

3. **重启 PHP 容器**：
   - 在 Docker 中，找到项目的 PHP 容器，点击【重启】。

   ![重启 PHP 容器](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/php-container-restart.png)

4. **开放端口**：
   - 在宝塔面板【安全】->【添加端口规则】，开放 `7314` 端口。
   - 在服务器运营商控制台（如阿里云、腾讯云）的安全组中开放 `7314` 端口。

   ![开放端口](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/port.png)

5. **测试端口连通性**：
   - 打开 [端口扫描工具](https://tool.chinaz.com/port)，输入服务器 IP 和端口，点击【开启扫描】。状态为“开启”即表示端口连通。

   ![测试端口](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/test-port.png)

---

### 本地主机上的设置

1. **下载 frp**：
   - 打开 [frp 发布页](https://github.com/fatedier/frp/releases)，下载适合自己系统的 `frp 0.58.1` 版本，并解压。

   ![下载 frp](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/download-frp.png)

2. **配置 frpc.toml**：
   - 右键编辑 `frpc.toml` 文件，设置以下内容并保存：

   ```ini
   serverAddr = "你的服务器IP地址"
   serverPort = 7314
   auth.token = "你在服务器上设置的任意非中文字符串"

   [[proxies]]
   name = "sd"
   type = "tcp"
   localIP = "127.0.0.1"
   localPort = 7860
   remotePort = 7860
   ```

   ![编辑 frpc.toml](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/frpc.toml.png)

3. **启动 frpc**：
   - 在 frp 目录空白处右键【在终端中打开】，运行以下命令启动 frpc：

   ```bash
   .\frpc.exe -c frpc.toml
   ```

   ![启动 frpc](https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/start-frpc.png)

---

## 管理后台配置

1. 登录管理后台，打开【AI应用】->【SD绘图】->【应用配置】。
2. 如果使用了服务器连接本地主机部署的服务，将【AI域名】设置为 `http://127.0.0.1:7860`。
3. 如果不使用，直接配置服务器的 IP 地址 + 端口。
4. 设置好 SD 绘图分类模型等，即可在前台测试绘画。

---

## 至此 Stable Diffusion WebUI 部署完成

通过以上步骤，您可以顺利完成 Stable Diffusion WebUI 的部署工作。如有任何问题，请参考相关文档或联系技术支持。