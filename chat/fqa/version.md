更新升级[​](https://doc.chatmoney.cn/chat/qa/version.html#%E6%9B%B4%E6%96%B0%E5%8D%87%E7%BA%A7)
===========================================================================================

更新操作[​](https://doc.chatmoney.cn/chat/qa/version.html#%E6%9B%B4%E6%96%B0%E6%93%8D%E4%BD%9C)
-------------------------------------------------------------------------------------------

⚠️ 警告

⚠️ 重要的事情说三遍！！！更新前请备份好数据库和源码目录，防止更新失败！！！  
⚠️ 重要的事情说三遍！！！更新前请备份好数据库和源码目录，防止更新失败！！！  
⚠️ 重要的事情说三遍！！！更新前请备份好数据库和源码目录，防止更新失败！！！  

### 方式1-在线升级[​](https://doc.chatmoney.cn/chat/qa/version.html#%E6%96%B9%E5%BC%8F1-%E5%9C%A8%E7%BA%BF%E5%8D%87%E7%BA%A7)

⚠️ 二开或者改变目录结构，没使用整个项目源码，无法使用在线更新。  
⚠️ 在线升级必须逐个版本升级。  
![](https://doc.chatmoney.cn/docs/images/general/php/update/update-error.jpg)

*   **步骤1**: 单击宝塔【网站列表】，选择项目网站【设置】->【网站目录】- 临时去掉【防跨站攻击(open\_basedir)】。 !\[\](/docs/images/cha t/update-1-1.png)
*   **步骤2**: 单击宝塔【软件商店】，找到 nignx，选择【设置】->【重启】。  
    ![](https://doc.chatmoney.cn/docs/images/general/php/update/update-1-2.png)
*   **步骤3**: 单击宝塔【软件商店】，找到 PHP-8.0，选择服务】->【重启】。  
    ![](https://doc.chatmoney.cn/docs/images/general/php/update/update-1-3.png)
*   **步骤4**: 登录后台，点击【系统设置】->【系统维护】->【系统更新】，点击【一键更新】。  
    
*   **步骤5**: 选择项目网站【设置】->【网站目录】- 选上【防跨站攻击(open\_basedir)】。  
    
*   **步骤6**: 登录后台，点击【系统设置】->【系统维护】->【系统缓存】->【清理缓存】。  
    
*   **步骤7**: 小程序需要重新发布。

### 方式2-最新源码包手动升级到最新版本[​](https://doc.chatmoney.cn/chat/qa/version.html#%E6%96%B9%E5%BC%8F2-%E6%9C%80%E6%96%B0%E6%BA%90%E7%A0%81%E5%8C%85%E6%89%8B%E5%8A%A8%E5%8D%87%E7%BA%A7%E5%88%B0%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC)

1.把原项目的server/.env、server/config/install.lock、server/pubulic/uploads、server/license/my.license备份起来。  
2.下载最新的源码包，把现在项目里面的server目录删掉，直接替换成源码包最新的server目录，再用步骤1备份的好的server/.env、server/config/install.lock、server/pubulic/uploads、server/license/my.license替换掉server目录一一对应的文件和目录。  
3.最新源码包有server/public/install/db/like.sql文件，如果正式上线的项目数据表不是ai\_开头，记得把like.sql的前缀替换成和在正式上线的项目一样。然后把在本地或者线上新建一个数据库，把like.sql导入进去。 然后使用软件把新的数据库的数据结构同步上去线上的项目，推荐同步的软件用navicat，记得是同步数据结构，不是同步数 据。

更新常见到问题[​](https://doc.chatmoney.cn/chat/qa/version.html#%E6%9B%B4%E6%96%B0%E5%B8%B8%E8%A7%81%E5%88%B0%E9%97%AE%E9%A2%98)
-------------------------------------------------------------------------------------------------------------------------

### 1\. 在先升级提示未授权[​](https://doc.chatmoney.cn/chat/qa/version.html#_1-%E5%9C%A8%E5%85%88%E5%8D%87%E7%BA%A7%E6%8F%90%E7%A4%BA%E6%9C%AA%E6%8E%88%E6%9D%83)

#### ①提示IP未授权[​](https://doc.chatmoney.cn/chat/qa/version.html#_1%E6%8F%90%E7%A4%BAip%E6%9C%AA%E6%8E%88%E6%9D%83)

打开[https://www.mddai.cn](https://www.mddai.cn/)，登录账号，在个人中心对IP地址和域名进行授权，其中ip为项目所在服务器的外网地址。![](https://doc.chatmoney.cn/docs/images/general/php/update/license.png)

#### ②官网授权了域名仍然提示域名未授权[​](https://doc.chatmoney.cn/chat/qa/version.html#_2%E5%AE%98%E7%BD%91%E6%8E%88%E6%9D%83%E4%BA%86%E5%9F%9F%E5%90%8D%E4%BB%8D%E7%84%B6%E6%8F%90%E7%A4%BA%E5%9F%9F%E5%90%8D%E6%9C%AA%E6%8E%88%E6%9D%83)

站点配置了两个域名，授权文件只支持单域名，无论访问哪个域名，都会提醒授权错误。删除没有授权的域名即可。![](https://doc.chatmoney.cn/docs/images/general/php/update/multiple-domain.png)

### 2\. 在线升级其他失败原因[​](https://doc.chatmoney.cn/chat/qa/version.html#_2-%E5%9C%A8%E7%BA%BF%E5%8D%87%E7%BA%A7%E5%85%B6%E4%BB%96%E5%A4%B1%E8%B4%A5%E5%8E%9F%E5%9B%A0)

#### ①提示关闭跨域攻击等[​](https://doc.chatmoney.cn/chat/qa/version.html#_1%E6%8F%90%E7%A4%BA%E5%85%B3%E9%97%AD%E8%B7%A8%E5%9F%9F%E6%94%BB%E5%87%BB%E7%AD%89)

![](https://doc.chatmoney.cn/docs/images/general/php/update/update-error.jpg)

#### ②出现500错误[​](https://doc.chatmoney.cn/chat/qa/version.html#_2%E5%87%BA%E7%8E%B0500%E9%94%99%E8%AF%AF)

##### 自行改变目录结构[​](https://doc.chatmoney.cn/chat/qa/version.html#%E8%87%AA%E8%A1%8C%E6%94%B9%E5%8F%98%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)

二开或者目录结构被改变，会导致无法升级。有些用户只上传server目录，也是改变目录结构的一种。会导致无法使用在线升级。

##### 目录权限不足[​](https://doc.chatmoney.cn/chat/qa/version.html#%E7%9B%AE%E5%BD%95%E6%9D%83%E9%99%90%E4%B8%8D%E8%B6%B3)

在线升级需要覆盖一些文件，如果项目目录或者子目录文件设置的权限PHP无法操作，也会导致无法升级。如果使用宝塔面板，可以设置一次项目目录，设置目录为www用户。

##### 站点使用的PHP版本缺少ZipArchive[​](https://doc.chatmoney.cn/chat/qa/version.html#%E7%AB%99%E7%82%B9%E4%BD%BF%E7%94%A8%E7%9A%84php%E7%89%88%E6%9C%AC%E7%BC%BA%E5%B0%91ziparchive)

![](https://doc.chatmoney.cn/docs/images/general/php/update/ZipArchive.png)

老版本必做[​](https://doc.chatmoney.cn/chat/qa/version.html#%E8%80%81%E7%89%88%E6%9C%AC%E5%BF%85%E5%81%9A)
-----------------------------------------------------------------------------------------------------

### 安装配置Redis[​](https://doc.chatmoney.cn/chat/qa/version.html#%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AEredis)

⚠️ 警告

宝塔会重置swoole扩展，需要按部署文档手动添加swoole扩展信息。

1.点击【软件商店】，安装好redis。 2.在【软件商店】找到PHP-80，点击设置，安装好Redis的PHP扩展。 3.打开项目下 server/.env文件，增加以下配置，该配置为Redis的配置，有密码设置密码，没有留空即可。

    [QUEUE]
    NAME = chatai
    HOST = 127.0.0.1
    PORT = 6379
    PASSWORD =

3.3.0版本更新注意事项[​](https://doc.chatmoney.cn/chat/qa/version.html#_3-3-0%E7%89%88%E6%9C%AC%E6%9B%B4%E6%96%B0%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
----------------------------------------------------------------------------------------------------------------------------------------------

⚠️ 警告

如果由较老的版本升级上来，检测一下有没配置Redis，没有请按上面文档配置。  

### 安装守护进程管理器[​](https://doc.chatmoney.cn/chat/qa/version.html#%E5%AE%89%E8%A3%85%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B%E7%AE%A1%E7%90%86%E5%99%A8)

参考部署文档设置守护进程。

3.4.0版本更新注意事项[​](https://doc.chatmoney.cn/chat/qa/version.html#_3-4-0%E7%89%88%E6%9C%AC%E6%9B%B4%E6%96%B0%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
----------------------------------------------------------------------------------------------------------------------------------------------

### 小程序一键上传[​](https://doc.chatmoney.cn/chat/qa/version.html#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%80%E9%94%AE%E4%B8%8A%E4%BC%A0)

首次使用小程序一键上传，先安装好node环境，然后在终端下使用cd命令进到项目下的server/extend/miniprogram-ci目录，运行命令 npm install miniprogram-ci --save; 建议使用node最新版本。

shell

    npm install miniprogram-ci --save;

3.5.0版本更新注意事项[​](https://doc.chatmoney.cn/chat/qa/version.html#_3-5-0%E7%89%88%E6%9C%AC%E6%9B%B4%E6%96%B0%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
----------------------------------------------------------------------------------------------------------------------------------------------

1.新版本优化了对话模型配置，更新后需要执行迁移数据脚本：请在浏览器访问https://(你的域名)/migration,注意执行脚本前务必备份好数据!!!!!!!!!  
2.智谱AI即将下架Std、Lite、Pro模型，新版也会移除这三个模型。  
4.本次更新需要重新编译，和提交小程序。  
5.Azure OpenAI申请注意的事项。 6.联网功能代理地址配置，使用新的域名按openai代理文档操作，然后把反向代理地址更改成[https://lite.duckduckgo.com](https://lite.duckduckgo.com/)，后台配置需要 [https://代理地址/lite/](https://xn--mnq35rnbw45p/lite/) 。

3.6.0版本更新注意事项[​](https://doc.chatmoney.cn/chat/qa/version.html#_3-6-0%E7%89%88%E6%9C%AC%E6%9B%B4%E6%96%B0%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
----------------------------------------------------------------------------------------------------------------------------------------------

1.gemini模型需要设置反向代理，参考文档[反向代理](https://www.mddai.cn/docs/mddai/deployment/proxy.html)。  
2.SD绘图需要本地部署SD项目，并让填写部署服务器的接口地址，参考文档[SD本地部署](https://www.mddai.cn/docs/mddai/deployment/sd.html)。  
3.本地SD绘图需要添加守护进程，参考文档[守护进程添加](https://www.mddai.cn/docs/chat/deployment/bt.html#%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B)。