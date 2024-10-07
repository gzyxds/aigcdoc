# 通用部署

如果你非常熟悉PHP项目的部署安装，可以参考一下信息部署项目。不熟悉可参考其他部署方式。

## 项目入口

项目入口目录：server/public 　
项目入口文件：server/public/index.php

## PHP扩展设置

项目server/license目录有PHP扩展，都是统一个配置扩展，针对不同系统使用。

```
swoole_loader80.so //linux系统、PHP非线程安全,一般nginx环境使用
swoole_loader80_zts.so //linux系统、PHP线程安全
swoole_loader80_nzts_x64.dll //windows系统、PHP非线程安全,一般nginx环境使用
swoole_loader80_zts_x64.dll //windows系统、PHP线程安全
```

## nginx配置

nginx全配置

**nginx**

```
server {
    listen 80;
    listen 443 ssl;
    server_name  www.chat.localhost;
    ssl_certificate /ssl/www.chat.localhost.crt;
    ssl_certificate_key /ssl/www.localhost.key;
    access_log /logs/demo.likeadmin.cnt_access_nginx.log;
    error_log /logs/demo.likeadmin.cn_error_nginx.log;
    client_max_body_size 5M;
    location / {
        root  chat/server/public;#入口文件目录
        index  index.html index.htm index.php;
        if (!-e $request_filename)
        {
            rewrite ^/(.*)$ /index.php?s=$1 last;
            break;
        }
    }
    location ~ /.*\.php/ {
        rewrite ^(.*?/?)(.*\.php)(.*)$ /$2?s=$3 last;
        break;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /var/www/html;
    }

    location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  chat/server/public$fastcgi_script_name; #入口文件目录
        include        fastcgi_params;
    }
    location = /favicon.ico {
            log_not_found off;
            access_log off;
        }
}
```

nginx伪静态

**nginx**

```
if (!-e $request_filename)
        {
            rewrite ^/(.*)$ /index.php?s=$1 last;
            break;
        }
```

## apache配置

apache伪静态

**apache**

```
<IfModule mod_rewrite.c>
  Options +FollowSymlinks -Multiviews
  RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]
</IfModule>
```

## 授权

注意

1.授权文件与产品一一对应，如果不是同一产品，将无法使用。
2.授权文件与项目域名也是一一对应，不然无法使用。

* ​**步骤1**​:
  购买后源码，聯係客服獲取授权文件。
* ​**步骤2**​:
  添加授权文件到server/license目录，并命名为：my.license ，如果仍无法使用，请联系客服。![](https://doc.chatmoney.cn/docs/images/chat/deployment/server/license-2.png)

## 定时任务

使用crontab命令设置以下命令为定时任务，1分钟运行1次，注意，运行用户要和PHP运行用户一致。

**shell**

```
php /www/wwwroot/项目/server/think crontab
```

## 任务队列

1.5.2版本开始，写作内容生成从定时任务生成方式调整为任务队列的方式生成，并且新增了文章降重功能，所以需配置两个队列任务，建议使用supervisor进行管理。

```
写作任务处理
php think queue:listen --queue maJob --timeout 0
降重任务处理
php think queue:listen --queue reJob --timeout 0
```

## 访问地址

- 管理后台地址：http://域名/admin
- PC端地址：http://域名/pc
- 手机端地址：http://域名/mobile

