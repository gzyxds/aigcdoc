## 宝塔面板部署**推荐方式**

服务器配置提示:

1. 推荐服务器最低配置：CPU双核、内存4GB、带宽5兆
2. 推荐服务器系统选择 `Dabian12系统` 是完美兼容的
3. **强烈推荐** 正式环境使用宝塔面板部署项目，让部署更方便，减少部署出现问题。

## 服务器系统设置

注意:

1. 服务器购买后安装 **Dabian12** 系统和 **宝塔面板** ，具体怎么安装宝塔面板请查看[宝塔官网Linux面板安装脚本](https://www.bt.cn/new/download.html)或直接复制以下 **Dabian12** 的脚本安装。

```
wget -O install.sh https://download.bt.cn/install/install_lts.sh && bash install.sh ed8484bec
```

## 服务器环境设置

### 1. 环境安装

点击【软件商店】->【运行环境】，安装Nginx、MySQL、PHP-8.0、Redis,其中Mysql选择5.7版本。

注意:

💡 安装软件的时候，使用极速安装，一定要使用 **PHP8.0** 和 **Mysql5.7** ，否则无法使用。

![](https://doc.2021it.com/assets/bt-env-1.BPL1WotD.png)

![](https://doc.2021it.com/assets/bt-env-2.et4oARBn.png)

### 2. php安装扩展

点击【软件商店】->【已安装】，找到PHP-8.0，然后点击【设置】->【安装扩展】，【安装】fileinfo扩展，【安装】redis扩展。

![](https://doc.2021it.com/assets/bt-env-3.BndumsaJ.png)

## 站点部署

### 1. 上传源代码

打开宝塔面板/www/wwwroot目录，上传下载的压缩包,解压压缩包，解压出来的文件夹就是项目目录。

注意:

💡 注意项目目录及子目录用户要为 **www** ！如果后续步骤出现问题，重新设置一下项目目录及子目录用户为 **www** 。

![](https://doc.2021it.com/assets/bt-1-1.DeT5xnRB.png)

![](https://doc.2021it.com/assets/bt-1-2.D-DYu3J7.png)

### 2. 添加站点

点击【网站】->【PHP项目】->【添加站点】，【域名】项填好已解析到本服务器的域名，【根目录】选择上一步解压好的项目目录的server目录，数据库选择【MySQL】，【数据库帐号】项设置好帐号密码，【PHP版本】选择【PHP-80】，点击【提交】。

注意:

💡 站点目录要选择 **server** ，请勿选择 **public** ，选择public会导致宝塔生成配置错误，等后面设置修改回来也无济于事，只能删除站点新添加。

![](https://doc.2021it.com/assets/bt-2.C-t2XkvC.png)

保存好数据库名、用户、密码，下面填写数据库步骤需要用到。

![](https://doc.2021it.com/assets/bt-3.BLBljI_o.png)

### 4. 申请SSL证书

找到网站，点击【设置】->【SSL】->【Let's Encrypt】->【文件验证】->【选择域名】->【申请】，申请SSL证书。

![](https://doc.2021it.com/assets/bt-4-1.C7b4_upf.png)

![](https://doc.2021it.com/assets/bt-4-2.DGOSumii.png)

### 5. 设置站点目录和运行目录

点击【网站目录】->【网站目录】，选择解压的项目目下的"server"目录，点击保存。【运行目录】选择"/public"项目，点击【保存】。

![](https://doc.2021it.com/assets/bt-5.BwA3rXud.png)

### 6. 设置伪静态

点击【伪静态】-选择【thinkphp】，点击【保存】。

![](https://doc.2021it.com/assets/bt-6.Cx4Jiags.png)

### 7. 程序安装

访问设置的网站，进入程序安装界面，点击【我已阅读同意】。

### 8. 环境检测

进入此步骤，对环境进行检测，一般情况，除了【swoole\_loader扩展】，其他项都会通过，说明内容可能提示【非线程安全扩展】或【线程安全扩展】，记住说明内容，下面9、10、11需要用到。

![](https://doc.2021it.com/assets/bt-8.i665yMjF.png)

### 9. 修改线程安全扩展

打开宝塔文件，进入项目所在的/server/license目录，上一步说明内容如果是【非线程安全扩展】复制swoole\_loader80.so文件，如果是【线程安全扩展】复制swoole\_loader80\_zts.so文件。

![](https://doc.2021it.com/assets/bt-9.BbrN-OJE.png)

### 10. 复制粘贴线程安全扩展

打开宝塔文件，进入/www/server/php/80/lib/php/extensions/no-debug-non-zts-20200930目录，粘贴文件，统一改名为swoole\_loader80.so 。

![](https://doc.2021it.com/assets/bt-10.CWYDXS_D.png)

### 11. 添加运行环境配置

打开【软件商店】->【运行环境】->【设置】->【配置文件】，在末尾添加以下代码信息，【保存】。

```
extension = swoole_loader80.so
```

![](https://doc.2021it.com/assets/bt-11-1.C_7pPTSU.png)

添加完后选择【服务】->【重启】。

![](https://doc.2021it.com/assets/bt-11-3.CQjAhfqB.png)

### 12. 重新检查环境监测

回到安装界面，然后点击【重新检测】。【swoole\_loader扩展】安装好以后，一般情况环境检测通过，直接点击【继续】。

### 13. 填写数据库

上面步骤2保存的数据库信息填写到数据库选项，填写Redis地址密码，没设置密码无需填写（一般都是默认），然后设置后台管理员帐号密码，点击【继续】。

### 14. 系统安装完毕添加授权文件

程序安装完成以后，可以点击【进入管理平台】，后台管理员登录之前，需要添加授权文件。

## 授权文件

📍 注意:

1.授权文件与AI系统要对应，如果不是同一AI系统，将无法使用。
2.授权文件与项目域名要对应，不然无法使用。

**步骤1**

付款后联系管理员发送需要绑定的域名，管理员会返回一个授权文件。

**步骤2**

添加授权文件到 `server/license` 目录，并命名为：`my.license` ，如果仍无法使用，请联系管理员。

![](https://doc.2021it.com/assets/5ce85c6c-e38a-41b3-9737-aaf5723945ab.DBZa4kJH.png)

## 访问地址

安装成功后，打开以下链接可以访问相应页面。
管理后台地址：[http://域名/admin](http://xn--eqrt2g/admin)
用户PC前台地址：[http://域名](http://xn--eqrt2g/)
用户H5前台地址：[http://域名/mobile](http://xn--eqrt2g/mobile)

## 定时任务

📍 注意:

定时任务不设置，会导致一些业务无法正常使用。

点击【计划任务】，设置任务类型为 【shell脚本】、填写任务名称、执行周期设置为【N分钟】【1分钟】，脚本内容为"php80 项目实际目录/server/think crontab"，请以项目实际域名为准，然后【添加任务】。

```
php80 项目实际目录/server/think crontab
```

![](https://doc.2021it.com/assets/crontab.ISMWXC6q.png)

## 任务队列

📍 注意:

1. 不配置任务队列将无法生成写作内容.
2. 队列进程数量按需设置.
3. 配置成功后查看守护进程日志，无错误则配置成功.

### 添加队列驱动配置

项目server文件夹下.env文件，添加队列驱动配置(驱动使用Redis)

```
[QUEUE]
NAME = "ws"
HOST = "127.0.0.1"
PORT = "6379"
PASSWORD = "填写你的Redis密码，没有设置密码则留空"
```

![](https://doc.2021it.com/assets/env-set.DGNvV9mQ.png)

![](https://doc.2021it.com/assets/redis-1.DvDNozfR.png)

### 添加队列守护进程

添加写作内容任务队列

```
php80 think queue:listen --queue maJob --timeout 0
```

![](https://doc.2021it.com/assets/supervisor-2.61RuUBoc.png)

添加降重任务队列

```
php80 think queue:listen --queue reJob --timeout 0
```

![](https://doc.2021it.com/assets/supervisor-1.DXVLWiHx.png)


