
宝塔部署①/③ 推荐使用[​](https://doc.chatmoney.cn/dm/deployment/bt.html#%E5%AE%9D%E5%A1%94%E9%83%A8%E7%BD%B21-3)
=======================================================================================================

::: tip ⚠️提示

推荐服务器最低配置：CPU双核、内存4GB、带宽5兆
:::

::: tip ⚠️提示
强烈推荐正式环境使用宝塔面板部署项目，让部署更方便，减少出现运行环境问题。
:::

## 服务器环境设置
::: danger ⚠️ 警告
安装软件的时候，使用极速安装，一定要使用PHP8.0和MySQL5.7，否则无法使用。
:::



## 安装运行环境需要软件

点击【软件商店】->【运行环境】，安装Nginx、MySQL5.7、PHP-8.0、Redis。

![www.likeadmin.cn-宝塔面板安装likeadmin运行环境](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/bt-env.png)

## 安装PHP扩展 

找到PHP-8.0，然后点击【设置】->【安装扩展】，【安装】fileinfo扩展，【安装】redis扩展。

![www.likeadmin.cn-宝塔面板安装需要的PHP扩展](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/php-extension.png)

## 站点部署 

::: info  添加站点 
点击【网站】->【PHP项目】->【添加站点】，输入域名，填写目录、数据库等信息，点击【确定】. 然后记住数据库名、用户、密码等信息，也可以在菜单【数据库】查看，这些信息安装的时候需要用到。
:::
![www.likeadmin.cn-宝塔面板添加网站站点](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/add-site-1.png)![www.likeadmin.cn-宝塔面板添加网站站点](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/add-site-2.png)

## 上传解压源码 

::: danger ⚠️ 警告
1.注意项目目录及子目录用户要为www，如果后续步骤出现问题，重新设置一下项目目录及子目录用户为www。  
2.压缩包为likeadmin（PHP版）或基于likeadmin（PHP版）开发的软件产品，根据自己实际部署的软件产品部署。
::: 
点击【文件】，找到添加站点时创建的文件夹，点击【上传】->【上传文件】，上传源码包，点击【开始上传】。然后右键点击压缩包解压。

![www.likeadmin.cn-宝塔面板上传likeadmin代码](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/update-code.png)![www.likeadmin.cn-宝塔面板解压likeadmin代码](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/extract-code.png)


::: info  设置PHP运行目录 
点击【网站】->【PHP项目】->【添加站点】->【网站目录】，设置好【网站目录】->【保存】，设置好【运行目录】->【保存】。
:::
![www.likeadmin.cn-宝塔面板设置likeadmin-PHP运行目录](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/php-run-directory.png)

## 设置站点伪静态 

点击【伪静态】,选择【thinkphp】，点击【保存】。设置好项目的伪静态。![www.likeadmin.cn-宝塔面板设置thinkphp和likeadmin的伪静态](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/pseudo-static.png)

## 添加泛域名 

::: danger 提示
SaaS系统支持无限添加租户，所有租户默认会分配一个随机的二级域名，所以需要添加泛域名解析。
::: 

*   **步骤1**:  
    在域名购买服务商控制台添加域名解析，记录类型为`A`，主机记录为`*`，记录值为服务器的IP地址。  
    
*   **步骤2**:  
    找到站点，点击【设置】->【域名管理】，填写泛域名，泛域名为`*`开头，格式如`*.likeadmin.cn`，然后【添加】即可。![宝塔添加泛域名](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/add-wildcard-domain.png)

## 设置SSL证书（https）[​](https://doc.chatmoney.cn/dm/deployment/bt.html#%E8%AE%BE%E7%BD%AEssl%E8%AF%81%E4%B9%A6-https)

*   **步骤1**:  
    点击【面板设置】->【面板设置】，开启SSL菜单。![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/set-ssl-menu.png)
*   **步骤2**:

点击【SSL】->【域名管理】->【添加DNS接口】，验证类型选择域名所在的服务商，并填写服务商的AccessKey和Secretkey。![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/set-dns.png)

*   **步骤3**:  
    点击该站点的【设置】->【SSL】—>【Let's Encrypt】->【DNS验证支持通配符】->【自动组合泛域名】->【全选】->【配置DNS】，验证类型选择上步骤添加的DNS接口，点击【确定】->【申请证书】。![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/get-ssl.png)![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/ssl-success.png)

## 程序安装 
::: danger 注意
likeadmin 本身是免费开源的，采用 MIT 许可证，允许任意商业用途，可以用于二次开发以制作项目和产品。然而，基于 Likeadmin 开发的产品软件是否可以商用，请咨询具体软件产品的软件开发者，以免引发法律问题。
::: 

*   **步骤1**:  
    访问站点域名，点击【我已阅读并同意】。![www.likeadmin.cn-likeadmin安装](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/install-1.png)
    
*   **步骤2**:  
    检查运行环境，如果不符合，请按界面提示修改运行环境，除了【swoole\_loader扩展】，其他项都会通过，说明内容可能提示【非线程安全扩展】或【线程安全扩展】，记住说明内容，下面步骤需要用到。![www.likeadmin.cn-likeadmin安装](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/install-2.png)
    
*   **步骤3**:  
    打开宝塔文件，进入项目所在的/server/license目录，上一步说明内容如果是【非线程安全扩展】复制swoole\_loader80.so文件，如果是【线程安全扩展】复制swoole\_loader80\_zts.so文件。![码多多AI安装](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/copy-swoole_loader.png)
    
*   **步骤4**:  
    打开宝塔文件，进入/www/server/php/80/lib/php/extensions/no-debug-non-zts-20200930目录，粘贴文件，统一改名为swoole\_loader80.so 。![码多多AI数字人SaaS安装](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/paste-swoole_loader.png)
    
*   **步骤5**:  
    打开【软件商店】->【运行环境】->【设置】->【配置文件】，在末尾添加`extension = swoole_loader80.so`信息，点击【保存】。![码多多AI数字人SaaS安装](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/config-swoole_loader.png)
    
*   **步骤6**:  
    打开【服务】->【重启】。![码多多AI数字人SaaS安装](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/restart-php.png)
    
*   **步骤7**:  
    回到安装界面以后，点击【重新检测】后，点击【继续】。![码多多AI数字人SaaS安装](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/install-3.png)
    
*   **步骤8**:  
    填写上面步骤记录的数据库信息，设置好SaaS平台超级管理员账号密码，然后点击【继续】。![码多多AI数字人SaaS安装](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/install-4.png)![码多多AI数字人SaaS安装](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/install-5.png)![码多多AI数字人SaaS安装](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/install-6.png)
    

## 访问地址 


::: tip 提示
1.程序安装的时候使用的域名，会设置为平台域名。如需修改，请修改`server/.env`的`HTTP_HOST`值。  
2.租户添加后，默认会生成主域名下的随机二级域名。
:::  

::: info  访问地址​
- 平台后台访问：http://域名/platform
- 租户域名访问：http://租户域名/admin
- 租户移动端访问：http://租户域名/mobile
- 租户PC访问：http://租户域名/pc
::: 

## 定时任务 

::: tip 提示
为了保障系统业务可以正常运行，需要配置定时任务。
::: 

## 设置定时任务 

点击【计划任务】->【添加任务】，任务类型选择【访问URL-GET】，执行周期选择【N分钟】，填写【1】分钟，URL填写`https://实际域名/crontab`，点击【确定】。![likeadmin宝塔配置定时任务](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/set-crontab.png)

## 验证定时任务 
登录管理后台，点击【系统设置】->【系统维护】->【定时任务】，在定时任务列表中，任意一个定时任务执行时间为今天，则说明配置成功。![likeadmin宝塔配置定时任务](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/cat-crontab.png)

##  设置租户域名别名
 

::: tip 提示
某些业务场景下，租户需要使用自己的独立域名，平台后台支持给租户设置一个域名别名。
::: 

::: tip 提示
多个租户设置域名别名，重复此步骤即可。
::: 

## 解析与添加域名别名

*   **步骤1**:  
    登录平台后台，点击【租户列表】->【详情】，复制租户默认域名。![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/get-domain-alias-1.png)![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/get-domain-alias-2.png)
    
*   **步骤2**:  
    在域名服务商添加域名解析，将自定义的域名添加`CNAME`解析，记录值填写租户默认域名。
    
*   **步骤3**:  
    点击【编辑】，选择【启用】别名，填写想要自定义的域名，然后【保存】。![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/add-domain-alias-1.png)![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/add-domain-alias-2.png)
    

## 宝塔配置域名别名 

::: tip 提示
通常情况下，域名别名的证书和Saas默认域名不一样，所以需要另外添加。
:::  

::: info **步骤1**:  
点击【网站】->【PHP项目】->【添加站点】->【传统项目】，输入域名，根目录填写原来项目下的`server`目录，PHP版本选择8.0，点击【确定】。
:::  
![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/get-domain-alias-site-1.png)

::: info **步骤2**:  
点击站点的【设置】->【网站目录】，运行目录设置`public`,然后【保存】。
::: 
![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/get-domain-alias-site-2.png)
::: info **步骤3**:  
点击【SSL】->【Let's Encrypt】->【文件验证】->【全选】->【申请证书】，申请成功以后，访问域名即可到对应的租户。
:::
![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/get-domain-alias-site-3.png)![](https://doc.chatmoney.cn/docs/images/dm/deployment/bt/get-domain-alias-site-4.png)

 