通用部署②/③ 开发人员使用[​](https://doc.chatmoney.cn/dm/deployment/general.html#%E9%80%9A%E7%94%A8%E9%83%A8%E7%BD%B22-3)
==============================================================================================================

项目入口
----------------------------------------------------------------------------------------------

项目静态资源入口目录：`server/public` 　  
项目PHP入口文件：`server/public/index.php`

PHP扩展 
-----------------------------------------------------------------------------------

`fileinfo`、`PDO_MYSQL`、`allow_url_fopen`、`GD2`、`DOM`、`redis`

nginx配置 
---------------------------------------------------------------------------------------

### nginx全配置 

::: danger ⚠️ 警告
使用过泛域名和泛域名证书，租户如果使用自定义域名，请使用自抑域名添加相当的nginx配置。
:::


```
    server {
        listen 80;
        listen 443 ssl;
        server_name  *.likeadmin.localhost;
        ssl_certificate /ssl/likeadmin.localhost.crt;
        ssl_certificate_key /ssl/likeadmin.localhost.key;
        access_log /logs/likeadmin.localhost_t_access_nginx.log;
        error_log /logs/likeadmin.localhost_error_nginx.log;
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
            fastcgi_param  SCRIPT_FILENAME  likeadmin/server/public$fastcgi_script_name; #入口文件目录
            include        fastcgi_params;
        }
        location = /favicon.ico {
                log_not_found off;
                access_log off;
            }
    }
```
### nginx伪静态部分 

```

    if (!-e $request_filename)
            {
                rewrite ^/(.*)$ /index.php?s=$1 last;
                break;
            }
```
apache配置 
-----------------------------------------------------------------------------------------

### apache权配置 

::: info ⚠️ 警告
使用过泛域名和泛域名证书，租户如果使用自定义域名，请使用自抑域名添加相当的apache配置。
:::
````
    <VirtualHost *:80>
        ServerName *.likeadmin.localhost
        DocumentRoot /path/to/likeadmin/server/public
        ErrorLog ${APACHE_LOG_DIR}/demo.likeadmin.cn_error_apache.log
        CustomLog ${APACHE_LOG_DIR}/demo.likeadmin.cnt_access_apache.log combined
    
        <Directory /path/to/likeadmin/server/public>
            Options Indexes FollowSymLinks
            AllowOverride All
            Require all granted
        </Directory>
    
        # Rewrite settings
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^(.*)$ /index.php?s=$1 [L]
    
        # PHP settings
        <FilesMatch "\.php$">
            SetHandler "proxy:fcgi://127.0.0.1:9000"
        </FilesMatch>
    
        # Error page handling
        ErrorDocument 500 /50x.html
        ErrorDocument 502 /50x.html
        ErrorDocument 503 /50x.html
        ErrorDocument 504 /50x.html
    
        # Disable favicon logging
        <Files favicon.ico>
            LogLevel emerg
            CustomLog /dev/null common
        </Files>
    
    </VirtualHost>
    
    <VirtualHost *:443>
        ServerName *.likeadmin.localhost
        DocumentRoot /path/to/likeadmin/server/public
        ErrorLog ${APACHE_LOG_DIR}/demo.likeadmin.cn_error_apache.log
        CustomLog ${APACHE_LOG_DIR}/demo.likeadmin.cnt_access_apache.log combined
    
        SSLEngine on
        SSLCertificateFile /ssl/*.likeadmin.localhost.crt
        SSLCertificateKeyFile /ssl/www.localhost.key
    
        <Directory /path/to/likeadmin/server/public>
            Options Indexes FollowSymLinks
            AllowOverride All
            Require all granted
        </Directory>
    
        # Rewrite settings
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^(.*)$ /index.php?s=$1 [L]
    
        # PHP settings
        <FilesMatch "\.php$">
            SetHandler "proxy:fcgi://127.0.0.1:9000"
        </FilesMatch>
    
        # Error page handling
        ErrorDocument 500 /50x.html
        ErrorDocument 502 /50x.html
        ErrorDocument 503 /50x.html
        ErrorDocument 504 /50x.html
    
        # Disable favicon logging
        <Files favicon.ico>
            LogLevel emerg
            CustomLog /dev/null common
        </Files>
    </VirtualHost>
````
### apache伪静态 

```

    <IfModule mod_rewrite.c>
      Options +FollowSymlinks -Multiviews
      RewriteEngine On
    
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]
    </IfModule>
```

### 安装
部署成功后，访问域名即可安装`likeadmin`，安装后生成配置文件`server/.env`。`server/.env`包含`Mysql`、`Redis`等配置信息。

访问地址 

::: tip 提示
首次安装的域名就是平台域名，租户域名在平台
::: 

- 平台后台访问地址：http://平台域名/platform
- 租户后台访问地址：http://租户域名/admin
- 租户PC端前台访问地址：http://租户域名/pc
- 租户移动端前台访问地址：http://域名/mobile

### 添加租户自定义域名 

将自定义租户域名做`CNAME`解析到系统生成的租户默认域名，在SaaS平台后台设置租户自定义域名，然后`Nginx`或`Apache`添加配置，配置出了域名以外，其它与上述的配置一致。