# 宝塔面板Docker部署

::: info ⚠️提示
推荐服务器最低配置：CPU双核、内存4GB、硬盘20GB、带宽5兆
:::

::: tip ⚠️提示
v3.3.0之前版本升级上来，请看`旧版本文档`此文档只适合v3.3.0后版本全新部署的。
知识库系统涉及的运行环境比较复杂，建议使用Docker部署，Docker的使用在宝塔面板上操作非常方便。
:::

## 运行环境

::: warning ⚠️注意
在不影响其他站点的情况下，建议将宝塔升级到最新版本。
:::

* **步骤1**:
  登录宝塔面板后，单击左侧菜单最底部的【自定义菜单】，开启【Docker】菜单。单击左侧菜单【Docker】，出现提示安装Docker，单击【安装】。

![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/env-docker-1.png)

![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/env-docker-2.png)

* **步骤2**:
  单击【软件商店】，安装好【Nginx】和【进程守护管理器】。![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/env-other.png)

## 部署源码

* **步骤1**:
  点击【文件】，进入【/www/wwwroot】目录，在目录下新建目录，后续步骤，我们都称该目录为【站点目录】。![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/code-1.png)
* **步骤2**:
  进入【站点目录】，并上传源码包，上传完成后，右键点击【解压】源码包。![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/code-2.png)![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/code-3.png)

## Docker部署

### 修改Docker编排文件

::: tip Docker知识科普

一般情况下，docker端口挂载的格式都是"端口1:端口2"，"端口1"为挂载主机端口，"端口2"为容器内部端口。所以我们在主机访问端口时，要访问"127.0.0.1:端口1"。如果进入容器内部或者容器之间进行通信时，访问"端口2"。容器之间的访问，使用“容器名:端口"。本项目除了使用主机Nginx代理nginx容器，其他都是容器与容器他们之间通讯。
:::

::: warning 注意
修改的参数按自己实际情况填写，请勿直接复制文档。
:::
进入【站点目录】下的docker目录，右键单击【docker-compose.example.yml】文件，单击【重命名】，将新文件命名为【docker-compose.yml】。打开【docker-compose.yml】文件，修改①\~⑤的选项。

* **修改第①项**:
  浏览器打开新的窗口访问宝塔面板，单击【终端】，登录系统管理员账号，在终端输入`id www`并按回车键，可以看到终端返回的信息，信息为 www用户的用户id和用户组id，分别将uid的id和gid的id复制到【docker-compose.yml】文件中"user:"后面，要去掉前面”#“，格式如"uid的id:gid的id"，修改后【保存】文件，这样PHP容器就可以以www的权限进行运行。![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/www.png)


```
user: "1000:1000" ①【挂载主机ID】
```

* **修改第②项**:
  修改MySQL的root密码，记住密码，安装程序需要填写。
  

```
MYSQL_ROOT_PASSWORD: 123456Abcd #②【123456Abcd】为MySQL容器root账号的密码，建议修改成复杂密码。
```

* **修改第③④⑤项**: 分别修改postgres容器的帐号、密码、数据库名。记住这些信息，安装程序需要填写。


```
- POSTGRES_USER=postgres #③【postgres】为postgres容器的默认账号。
- POSTGRES_PASSWORD=123456Abcd #④【123456Abcd】为postgres容器默认账号的密码。
- POSTGRES_DB=postgres #④【postgres】为postgres容器的默认数据库名。
```

### 添加Docker编排模板


::: danger ⚠️ 警告
1.如果添加失败，很可能是编辑编排模板的时候没有操作正确，yml文件用缩进来表示层次结构，每一行需要有规则的对齐。
2.如果提示模板已存在，可以修改文件名，保持yml（结尾）格式。
:::


单击【Docker】-\>【编排模板】-\>【搜索本地模块】-\>【📂(文件夹小图标)】，选择【站点目录下】的docker目录，单击【搜索】，模板名选择编辑的docker-compose.yml文件，单击【添加】。![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/docker-compose-temp.png)

### 添加容器编排
::: danger ⚠️ 警告
如果添加失败，很可能是编排模板问题，请重新编排编辑模板。注意挂载主机的端口号，不要与主机已有的其他软件冲突。
:::

单击【容器编排】-\>【项目】-\>【添加Composer项目】，在【Composer模块】选择【docker】，填写名称，单击【添加】。添加成功以后，如图所示。然后在点击【容器】，可以看到项目运行的![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/docker-compose-1.png)![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/docker-compose-2.png)

## 反向代理容器

::: danger 提示
该反向代理为主机Nginx代理到Ngxin容器，代理的端口为Nginx容器挂载主机的端口。
:::
### 添加站点

单击【网站】-\>【反向代理】-\>【添加反代】,填写站点域名，【目标】选择URL地址，填写`http://127.0.0.1:180`，其中180为Docker的Nginx容器挂载主机的端口，按实际挂载的端口填写。传递域名时按默认填写\$http\_host，然后【确定】。![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/add-site.png)

### 设置代理参数

单击【URL代理】-\> 【设置】-\>【自定义配置】，复制下面配置内容填写，然后【保存】。


```
proxy_set_header X-Forwarded-Proto $scheme;
```

![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/proxy.png)

### 申请SSL证书

点击【SSL】-\> 【Let's Encrypt】,选择【DNS验证】，选中域名，点击【申请】。
出现了弹出窗，需要手动在域名服务商（阿里云腾讯云等）后台给域名添加TXT解析，按要求添加TXT解析，主机信息填写①的值，记录值填写②的值，点击选择可以复制到整值。TXT解析添加好完成以后，点击【验证】。![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/ssl-1.png)![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/ssl-2.png)![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/ssl-3.png)

## 程序安装
::: danger ⚠️ 警告
如果访问页面出现"No input file specified"，是因为站点目录设置为server/pulibc，宝塔面板生成.user.ini文件影响到容器运行。请将目录设置为项目根目录，并删除掉server/public/.user.ini文件，单击【Docker】-\>【容器】，选择所有容器，单击【批量操作】-\>【重启容器】。重新访问即可。
:::

::: danger ⚠️ 警告
如果安装的时候，出现了提示数据库密码错误，很大可能是创建容器后才修改docker-compose.yml的配置导致，这时密码是容器创建前docker-compose.yml的密码，不是后来修改的密码。确认数据不要保留的情况下，可以删除docker/data目录，然后删除所有容器和容器编排，重新创建容器编排。
:::

在浏览器访问站点，进入程序安装界面，单击【我已阅读并同意】-\>【继续】。
然后将编排模板docker-compose.yml文件的信息填写到安装界面。
其他所有数据库主机，都是填写容器名称，默认不需要修改。
MySQL数据库密码填写docker-compose.yml设置的密码。
postgreSQL项的数据库用户，数据库密码，数据名称，分别填写docker-compose.yml设置的值。
设置好后台管理员账号密码后，点击【继续】。![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/install-1.png)![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/install-2.png)![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/install-3.png)![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/install-4.png)

## 授权

::: danger 注意

- 1.授权文件与产品一一对应，如果不是同一产品，将无法使用。
- 2.授权文件与项目域名也是一一对应，不然无法使用。
  :::

* **步骤1**:
  - 购买源码后，联系客服授权文件!
* **步骤2**:
  - 添加授权文件到server/license目录
  - 并命名为：`my.license`如果仍无法使用，请联系客服。![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/license-2.png)

## 访问地址

`安装成功后，打开以下链接可以访问相应页面`

* 管理后台地址：http://域名/admin
* 用户PC前台地址：http://域名
* 用户PC前台地址：http://域名/mobile

## 验证自动任务

::: danger ⚠️提示
新版本在文件权限挂载正确情况下，会自动定时任务和守护进程。
配置在docker/config/supervisor/supervisor.ini，一般情况下不要修改
:::

:::  info ⚠️ 警告
如果登录后台发现定时任务没有执行，说明守护进程也没有执行，这时需要将docker/log/supervisor目录设置为777权限，然后重启PHP容器。
:::

登录后台，打开菜单【系统维护】-\>【定时任务】，如果有出现今天的执行时间，说明定时任务和守护进程配置正常。![](https://doc.chatmoney.cn/docs/images/pro/deployment/bt-docker/supervisor.png)

## 特别注意（使用必看）

::: info ⚠️ 警告
docker/data目录及其下文件不能修改权限，修改权限会导致异常，甚至无法恢复数据！！！
:::

::: tip ⚠️提示
docker/data为MySQL数据库，postgres数据库数据存在目录，备份数据和数据，备份server目录和docker目录即可
:::

