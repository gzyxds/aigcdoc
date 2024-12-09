通用部署②/③ 开发人员使用[​](https://doc.chatmoney.cn/dm/deployment/general.html#%E9%80%9A%E7%94%A8%E9%83%A8%E7%BD%B22-3)
==============================================================================================================

项目入口[​](https://doc.chatmoney.cn/dm/deployment/general.html#%E9%A1%B9%E7%9B%AE%E5%85%A5%E5%8F%A3)
-------------------------------------------------------------------------------------------------

项目静态资源入口目录：`server/public` 　  
项目PHP入口文件：`server/public/index.php`

PHP扩展[​](https://doc.chatmoney.cn/dm/deployment/general.html#php%E6%89%A9%E5%B1%95)
-----------------------------------------------------------------------------------

`fileinfo`、`PDO_MYSQL`、`allow_url_fopen`、`GD2`、`DOM`、`redis`

nginx配置[​](https://doc.chatmoney.cn/dm/deployment/general.html#nginx%E9%85%8D%E7%BD%AE)
---------------------------------------------------------------------------------------

### nginx全配置[​](https://doc.chatmoney.cn/dm/deployment/general.html#nginx%E5%85%A8%E9%85%8D%E7%BD%AE)

⚠️ 警告

使用过泛域名和泛域名证书，租户如果使用自定义域名，请使用自抑域名添加相当的nginx配置。

nginx

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

### nginx伪静态部分[​](https://doc.chatmoney.cn/dm/deployment/general.html#nginx%E4%BC%AA%E9%9D%99%E6%80%81%E9%83%A8%E5%88%86)

nginx

    if (!-e $request_filename)
            {
                rewrite ^/(.*)$ /index.php?s=$1 last;
                break;
            }

apache配置[​](https://doc.chatmoney.cn/dm/deployment/general.html#apache%E9%85%8D%E7%BD%AE)
-----------------------------------------------------------------------------------------

### apache权配置[​](https://doc.chatmoney.cn/dm/deployment/general.html#apache%E6%9D%83%E9%85%8D%E7%BD%AE)

⚠️ 警告

使用过泛域名和泛域名证书，租户如果使用自定义域名，请使用自抑域名添加相当的apache配置。

apache

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

### apache伪静态[​](https://doc.chatmoney.cn/dm/deployment/general.html#apache%E4%BC%AA%E9%9D%99%E6%80%81)

apache

    <IfModule mod_rewrite.c>
      Options +FollowSymlinks -Multiviews
      RewriteEngine On
    
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]
    </IfModule>

安装[​](https://doc.chatmoney.cn/dm/deployment/general.html#%E5%AE%89%E8%A3%85)
-----------------------------------------------------------------------------

部署成功后，访问域名即可安装`likeadmin`，安装后生成配置文件`server/.env`。`server/.env`包含`Mysql`、`Redis`等配置信息。

访问地址[​](https://doc.chatmoney.cn/dm/deployment/general.html#%E8%AE%BF%E9%97%AE%E5%9C%B0%E5%9D%80)
-------------------------------------------------------------------------------------------------

提示

首次安装的域名就是平台域名，租户域名在平台

平台后台访问地址：[http://平台域名/platform](https://php-saas.likeadmin.cn/platform)  
租户后台访问地址：[http://租户域名/admin](https://php.likeadmin.cn/platform)  
租户PC端前台访问地址：[http://租户域名/pc](https://php.likeadmin.cn/pc)  
租户移动端前台访问地址：[http://域名/mobile](https://php.likeadmin.cn/mobile)

添加租户自定义域名[​](https://doc.chatmoney.cn/dm/deployment/general.html#%E6%B7%BB%E5%8A%A0%E7%A7%9F%E6%88%B7%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D)
---------------------------------------------------------------------------------------------------------------------------------------------------

将自定义租户域名做`CNAME`解析到系统生成的租户默认域名，在SaaS平台后台设置租户自定义域名，然后`Nginx`或`Apache`添加配置，配置出了域名以外，其它与上述的配置一致。