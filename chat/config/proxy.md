# 自定义API域名(大模型代理)

## 说明

本教程适合ChatGPT、DALLE-3、duckduckgo（联网）、gemini。
由于网络原因，境内无法直接访问某些接口。如果你使用的是境内服务器，则无法直接使用。本教程将向您详细介绍如何使用宝塔反向代理口。

## 购买服务器并安装宝塔

* **步骤1**:
  首页需要购买境外服务器，新加坡服务器，韩国服务器等。
* **步骤2**:
  在服务器安装好宝塔面板，登录宝塔面板安装nginx。

## 配置反向代理

* **步骤1**:
  打开并登录宝塔，单击【网站】-【添加站点】，【域名】填写解析好的域名或者直接填写服务器的 ip 地址，【PHP版本】选择【纯静态】，单击【提交】。![](https://doc.chatmoney.cn/docs/images/general/config/proxy/1.png)
* **步骤2**:
  单击【设置】-【反向代理】-【添加反向代理】，【目标URL】填写API地址。
  API地址代理不同的服务器填写不同。
  openai填写：`https://api.openai.com`
  DALLE-3填写：`https://api.openai.com`
  duckduckgo（联网）填写：`https://lite.duckduckgo.com`
  gemini填写：`https://generativelanguage.googleapis.com`
  单击【提交】。![](https://doc.chatmoney.cn/docs/images/general/config/proxy/2.png)
* **步骤3**:
  还需要做其他配置，单击【编辑】。![](https://doc.chatmoney.cn/docs/images/general/config/proxy/3.png)
* **步骤4**:
  在Nginx 配置文件添加红色框配置内容，单击【保存】。

nginx

```
    proxy_set_header X-Error-Message $upstream_http_x_error_message;
    proxy_buffering off;
    proxy_ssl_server_name on;
    proxy_ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
```

![](https://doc.chatmoney.cn/docs/images/general/config/proxy/4.png)

* **步骤5**:
  配置成功好，打开自己配置的域名，即可显示出openai 接口返回的内容，注意，如果没有配置 SSL 证书，不要使用 https 访问。![](https://doc.chatmoney.cn/docs/images/general/config/proxy/5.png)
* **步骤6**:
  如果你只想自己指定的服务器才能使用代理，在Nginx 配置文件添加红色框配置内容，其中将括号替换为服务器的 IP 地址。注意，服务器不是指你配置代理的服务器，而且要使openai接口的服务器。

nginx

```
allow (连括号一起替换成你服务器IP地址);
deny all;
```

![](https://doc.chatmoney.cn/docs/images/general/config/proxy/6.png)