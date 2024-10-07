# 宝塔面板部署-推荐使用①/③

```
提示
推荐服务器最低配置：CPU双核、内存4GB、硬盘20GB、带宽5兆
```

**强烈推荐正式环境推荐使用宝塔面板部署项目，让部署更方便，减少部署出现问题。**

## 服务器环境设置

* ​**步骤1**​: 点击【软件商店】->【运行环境】，安装Nginx、MySQL、PHP-8.0、Redis,其中Mysql选择5.7版本。

```
⚠️ 警告
安装软件的时候，使用极速安装，一定要使用PHP8.0和Mysql5.7，否则无法使用。
```

```
⚠️ 警告
安装软件的时候，使用极速安装，一定要使用PHP8.0和Mysql5.7，否则无法使用。
```

![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-env-1.png)
![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-env-2.png)

* ​**步骤2**​: 点击【软件商店】->【已安装】，找到PHP-8.0，然后点击【设置】->【安装扩展】，【安装】fileinfo扩展，【安装】redis扩展。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-env-3.png)

## 站点部署[​](https://doc.chatmoney.cn/cp/deployment/bt.html#%E7%AB%99%E7%82%B9%E9%83%A8%E7%BD%B2)

* ​**步骤1**​: 打开宝塔面板/www/wwwroot目录，上传下载的压缩包,解压压缩包，解压出来的文件夹就是项目目录。

⚠️ 警告

注意项目目录及子目录用户要为www！如果后续步骤出现问题，重新设置一下项目目录及子目录用户为www。

![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-1-1.png)
![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-1-2.png)

* ​**步骤2**​: 点击【网站】->【PHP项目】->【添加站点】，【域名】项填好已解析到本服务器的域名，【根目录】选择上一步解压好的项目目录的server目录，数据库选择【MySQL】，【数据库帐号】项设置好帐号密码，【PHP版本】选择【PHP-80】，点击【提交】。

⚠️ 警告

站点目录要选择server，请勿选择public，选择public会导致宝塔生成配置错误，等后面设置修改回来也无济于事，只能删除站点新添加。

![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-2.png)

* ​**步骤3**​: 保存好数据库名、用户、密码，下面步骤13需要用到。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-3.png)
* ​**步骤4**​: 找到网站，点击【设置】->【SSL】->【Let's Encrypt】->【文件验证】->【选择域名】->【申请】，申请SSL证书。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-4-1.png)
  ![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-4-2.png)
* ​**步骤5**​: 点击【网站目录】->【网站目录】，选择解压的项目目下的"server"目录，点击保存。【运行目录】选择"/public"项目，点击【保存】。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-5.png)
* ​**步骤6**​: 点击【伪静态】-选择【thinkphp】，点击【保存】。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-6.png)

### 程序安装[​](https://doc.chatmoney.cn/cp/deployment/bt.html#%E7%A8%8B%E5%BA%8F%E5%AE%89%E8%A3%85)

* ​**步骤7**​: 访问设置的网站，进入程序安装界面，点击【我已阅读同意】。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-7-1.png)
  ![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-7-2.png)
* ​**步骤8**​: 进入此步骤，对环境进行检测，一般情况，除了【swoole\_loader扩展】，其他项都会通过，说明内容可能提示【非线程安全扩展】或【线程安全扩展】，记住说明内容，下面步骤9、10、11需要用到。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-8.png)
* ​**步骤9**​: 打开宝塔文件，进入项目所在的/server/license目录，上一步说明内容如果是【非线程安全扩展】复制swoole\_loader80.so文件，如果是【线程安全扩展】复制swoole\_loader80\_zts.so文件。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-9.png)
* ​**步骤10**​: 打开宝塔文件，进入/www/server/php/80/lib/php/extensions/no-debug-non-zts-20200930目录，粘贴文件，统一改名为swoole\_loader80.so 。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-10.png)
* ​**步骤11**​: 打开【软件商店】->【运行环境】->【设置】->【配置文件】，在末尾添加`extension = swoole_loader80.so` 信息，【保存】。
  ![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-11-1.png)
  打开【服务】->【重启】。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-11-3.png)
* ​**步骤12**​: 回到安装界面，然后点击【重新检测】。【swoole\_loader扩展】安装好以后，一般情况环境检测通过，直接点击【继续】。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-12-1.png)
  ![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-12-2.png)
* ​**步骤13**​: 保存的数据库信息设置好数据库，填写Redis地址密码，没设置密码无需填写，然后设置后台管理员帐号密码，点击【继续】。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-13-1.png)
  ![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-13-2.png)
* ​**步骤14**​: 程序安装中，完成以后，可以点击【进入管理平台】，使用安装设置的帐号密码登录之前，需要添加授权文件。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-14-1.png)
  ![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/bt-14-2.png)
  ### 授权[​](https://doc.chatmoney.cn/cp/deployment/bt.html#%E6%8E%88%E6%9D%83)

注意

1.授权文件与产品一一对应，如果不是同一产品，将无法使用。
2.授权文件与项目域名也是一一对应，不然无法使用。

* ​**步骤1**​:
  购买后源码，登录官网，下载授权文件。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/license-1.png)
* ​**步骤2**​:
  添加授权文件到server/license目录，并命名为：my.license ，如果仍无法使用，请联系客服。![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/license-2.png)

## 访问地址[​](https://doc.chatmoney.cn/cp/deployment/bt.html#%E8%AE%BF%E9%97%AE%E5%9C%B0%E5%9D%80)

管理后台地址：[http://域名/admin](https://chat-demo.likeshop.cn/admin)
PC端地址：[http://域名/pc](https://chat.likeshop.cn/pc)
手机端地址：[http://域名/mobile](https://chat.likeshop.cn/mobile)

## 定时任务[​](https://doc.chatmoney.cn/cp/deployment/bt.html#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1)

⚠️ 警告

定时任务不设置，会导致一些业务无法正常使用。

点击【计划任务】，设置任务类型为 【shell脚本】、填写任务名称、执行周期设置为【N分钟】【1分钟】，脚本内容为"php80 项目实际目录/server/think crontab"，请以项目实际域名为准，然后【添加任务】。

**shell**

```
php80 项目实际目录/server/think crontab
```

![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/crontab.png)

## 任务队列[​](https://doc.chatmoney.cn/cp/deployment/bt.html#%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97)

⚠️ 警告

**1.5.2**版本开始，原写作内容生成从**定时任务**方式调整为**任务队列**的方式。
​**不配置任务队列将无法生成写作内容**​，系统定时任务中的【​**生成任务**​】已可关闭。

注意

队列进程数量按需设置
配置成功后查看守护进程日志，无错误则配置成功。

* **步骤1** 项目server文件夹下.env文件，添加队列驱动配置(驱动使用Redis)

**shell**

```
[QUEUE]
NAME = "ws"
HOST = "127.0.0.1"
PORT = "6379"
PASSWORD = "填写你的Redis密码，没有则留空"
```

![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/env-set.png)![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/redis-1.png)

* **步骤2** 添加队列守护进程

**shell**

```
添加写作内容任务队列
php80 think queue:listen --queue maJob --timeout 0
```

![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/supervisor-2.png)

**shell**

```
添加降重任务队列
php80 think queue:listen --queue reJob --timeout 0
```

![](https://doc.chatmoney.cn/docs/images/cp/deployment/bt/supervisor-1.png)

