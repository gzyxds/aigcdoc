# 宝塔面板部署①/③ 推荐使用

```
提示
推荐服务器最低配置：CPU双核、内存4GB、带宽5兆
```

```
提示
强烈推荐正式环境推荐使用宝塔面板部署项目，让部署更方便，减少部署出现问题。
```

## 服务器环境设置

* **步骤1**: 点击【软件商店】-\>【运行环境】，安装Nginx、MySQL、PHP-8.0、Redis,其中Mysql选择5.7版本。

⚠️ 警告

安装软件的时候，使用极速安装，一定要使用PHP8.0和Mysql5.7，否则无法使用。

![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-env-1.png)
![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-env-2.png)

* **步骤2**: 点击【软件商店】-\>【已安装】，找到PHP-8.0，然后点击【设置】-\>【安装扩展】，【安装】fileinfo扩展，【安装】redis扩展。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-env-3.png)

## 站点部署

* **步骤1**: 打开宝塔面板/www/wwwroot目录，上传下载的压缩包,解压压缩包，解压出来的文件夹就是项目目录。

⚠️ 警告

注意项目目录及子目录用户要为www！如果后续步骤出现问题，重新设置一下项目目录及子目录用户为www。

![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-1-1.png)
![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-1-2.png)

* **步骤2**: 点击【网站】-\>【PHP项目】-\>【添加站点】，【域名】项填好已解析到本服务器的域名，【根目录】选择上一步解压好的项目目录的server目录，数据库选择【MySQL】，【数据库帐号】项设置好帐号密码，【PHP版本】选择【PHP-80】，点击【提交】。

⚠️ 警告

站点目录要选择server，请勿选择public，选择public会导致宝塔生成配置错误，等后面设置修改回来也无济于事，只能删除站点新添加。

![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-2.png)

* **步骤3**: 保存好数据库名、用户、密码，下面步骤13需要用到。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-3.png)
* **步骤4**: 找到网站，点击【设置】-\>【SSL】-\>【Let's Encrypt】-\>【文件验证】-\>【选择域名】-\>【申请】，申请SSL证书。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-4-1.png)
  ![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-4-2.png)
* **步骤5**: 点击【网站目录】-\>【网站目录】，选择解压的项目目下的"server"目录，点击保存。【运行目录】选择"/public"项目，点击【保存】。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-5.png)
* **步骤6**: 点击【伪静态】-选择【thinkphp】，点击【保存】。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-6.png)

### 程序安装

* **步骤7**: 访问设置的网站，进入程序安装界面，点击【我已阅读同意】。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-7-1.png)
  ![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-7-2.png)
* **步骤8**: 进入此步骤，对环境进行检测，一般情况，除了【swoole\_loader扩展】，其他项都会通过，说明内容可能提示【非线程安全扩展】或【线程安全扩展】，记住说明内容，下面步骤9、10、11需要用到。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-8.png)
* **步骤9**: 打开宝塔文件，进入项目所在的/server/license目录，上一步说明内容如果是【非线程安全扩展】复制swoole\_loader80.so文件，如果是【线程安全扩展】复制swoole\_loader80\_zts.so文件。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-9.png)
* **步骤10**: 打开宝塔文件，进入/www/server/php/80/lib/php/extensions/no-debug-non-zts-20200930目录，粘贴文件，统一改名为swoole\_loader80.so 。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-10.png)
* **步骤11**: 打开【软件商店】-\>【运行环境】-\>【设置】-\>【配置文件】，在末尾添加`extension = swoole_loader80.so` 信息，【保存】。
  ![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-11-1.png)
  打开【服务】-\>【重启】。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-11-3.png)
* **步骤12**: 回到安装界面，然后点击【重新检测】。【swoole\_loader扩展】安装好以后，一般情况环境检测通过，直接点击【继续】。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-12-1.png)
  ![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-12-2.png)
* **步骤13**: 保存的数据库信息设置好数据库，填写Redis地址密码，没设置密码无需填写，然后设置后台管理员帐号密码，点击【继续】。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-13-1.png)
  ![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-13-2.png)
* **步骤14**: 程序安装中，完成以后，可以点击【进入管理平台】，使用安装设置的帐号密码登录之前，需要添加授权文件。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-14-1.png)
  ![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/bt-14-2.png)

  ### 授权

注意

1.授权文件与产品一一对应，如果不是同一产品，将无法使用。
2.授权文件与项目域名也是一一对应，不然无法使用。

* **步骤1**: 购买后源码，登录官网，下载授权文件。![](https://doc.chatmoney.cn/docs/images/chat/deployment/server/license-1.png)
* **步骤2**: 添加授权文件到server/license目录，并命名为：my.license ，如果仍无法使用，请联系客服。![](https://doc.chatmoney.cn/docs/images/chat/deployment/server/license-2.png)

## 访问地址

管理后台地址：[http://域名/admin](https://chat-demo.likeshop.cn/admin)
PC端地址：[http://域名/pc](https://chat.likeshop.cn/pc)
手机端地址：[http://域名/mobile](https://chat.likeshop.cn/mobile)

## 定时任务

⚠️ 警告

定时任务不设置，会导致一些业务无法正常使用。

点击【计划任务】，设置任务类型为 【访问URL】、填写任务名称、执行周期设置为【N分钟】【1分钟】，URL地址为"[https://域名/crontab](https://xn--eqrt2g/crontab)"，请以项目实际域名为准，然后【添加任务】。![](https://doc.chatmoney.cn/docs/images/chat/deployment/server/crontab-1.png)

## 守护进程

### 安装守护进程管理器

点击【软件商店】，搜索【进程守护】，安装进程守护管理器。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/supervisor.png)

### 守护进程设置

注意

**运行守护进程失败原因：** 
1.请在终端运行一下php80命令是否有效，无效请在宝塔面板首页右上角点击修复。
2.默认情况下要求用www用户运行守护进程，如果运行失败，可能是www用户无执行php命令，请调整www用户权限或者改用root运行。
3.检查Redis的账号密码是否配置正确。
4.没有选择站点目录下的server目录，站点下的server目录有"think"这个文件。

#### 添加意间绘画

⚠️ 警告

如果不使用 MJ直连绘图功能，此守护进程可不添加。
管理后台设置意间相关参数。

点击进程守护管理器的【设置】-\>【添加守护进程】，启动用户选择www，运行目录选择站点目录下的server目录，添加以下命令，点击【确定】，添加成功，可看到守护进程正在运行。

shell

```
php80 think queue:listen --queue AiYjJob
```

![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/supervisor-yj.png)![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/supervisor-success.png)

#### MJ直连监听

⚠️ 警告

如果不使用 MJ直连绘图功能，此守护进程可不添加。
管理后台先[配置MJ相关参数](https://www.mddai.cn/docs/mddai/deployment/midjourney.html) 相关参考再添加守护进程。

点击进程守护管理器的【设置】-\>【添加守护进程】，启动用户选择www，运行目录选择站点目录下的server目录，添加以下命令，点击【确定】，添加成功，可看到守护进程正在运行。

shell

```
php80 think discord
```

![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/supervisor-mj-listen.png)![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/supervisor-success.png)

#### MJ直连提交任务

⚠️ 警告

如果不使用 MJ直连绘图功能，此守护进程可不添加。
管理后台先[配置MJ相关参数](https://www.mddai.cn/docs/mddai/deployment/midjourney.html) 相关参考再添加守护进程。

点击进程守护管理器的【设置】-\>【添加守护进程】，启动用户选择www，运行目录选择站点目录下的server目录，添加以下命令，点击【确定】，添加成功，可看到守护进程正在运行。

shell

```
php80 think queue:listen --queue AiMjJob
```

![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/supervisor-mj.png)![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/supervisor-success.png)

#### dalle3绘画

⚠️ 警告

如果不使用dalle3绘图功能，此守护进程可不添加。
管理后台先dalle3绘图功能参数。

点击进程守护管理器的【设置】-\>【添加守护进程】，启动用户选择www，运行目录选择站点目录下的server目录，添加以下命令，点击【确定】，添加成功，可看到守护进程正在运行。

shell

```
php80 think queue:listen --queue AiDalleJob
```

![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/supervisor-dalle.png)![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/supervisor-success.png)

#### SD绘画

⚠️ 警告

如果不使用SD绘图功能，此守护进程可不添加。
管理后台先SD绘图功能参数。

点击进程守护管理器的【设置】-\>【添加守护进程】，启动用户选择www，运行目录选择站点目录下的server目录，添加以下命令，点击【确定】，添加成功，可看到守护进程正在运行。

shell

```
php80 think queue:listen --queue AiSdJob --timeout 300
```

![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/supervisor-sd.png)![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/supervisor-success.png)

## 其它设置

### 超时设置

提示

超时时间超级不够长，对话时间过长可能失败。

点击【软件商店】，找到项目使用的PHP-8.0，点击【设置】-\>【配置修改】，找到default\_socket\_timeout，超时间时间设置为300，点击【保存】。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/php-timeout-1.png)![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/php-timeout-2.png)

点击【软件商店】，Nginx，点击【设置】-\>【性能调整】，找到keepaliv\_timeout项，超时间时间设置为300，点击【保存】。![](https://doc.chatmoney.cn/docs/images/chat/deployment/bt/nginx-timeout.png)

Pager