# 500错误处理

提示

500错误为服务器内部错误，所有服务端错误都会报500。如果只是反馈500错误，我们无法帮您解决问题，以下教程教大家如何获取具体错误信息。

## 如何获取具体的500错误并反馈

* **步骤1**: 登录宝塔，点击【文件】，找到网站所有目录，打开项目一下的server/.env文件，把"APP\_DEBUG"项的值改成true。

json

```
APP_DEBUG = true
```

![](https://doc.chatmoney.cn/docs/images/general/php/debug/debug-1.png)

* **步骤2**: 右键单击浏览器，单击【检查】-\>【Network(网络)】-\>【Fetch/XHR】,在左下角请求列表找到红色的请求，单击其中一行，单击【Preview(预览)】。蓝色框显示的信息，就是具体的错误信息，可将信息反馈给客服人员。![](https://doc.chatmoney.cn/docs/images/general/php/debug/debug-2.png)

## 通过错误信息自行解决问题

### 1.系统用户权限问题

#### 错误信息

"file\_put\_contents(/www/wwwroot/xxxxxx/server/runtime): Failed to open stream: Permission denied"![](https://doc.chatmoney.cn/docs/images/general/php/debug/permission-1.png)

#### 原因

此错误是由于系统文件权限引起报错，遇到类似的问题。

#### 解决方式

打开项目【文件】，找到项目所在目录，鼠标上浮到server，这个时候出现了【权限】，单击【权限】，所有者设置为【www】，设置为勾上【应用到子目录】，单击【确定】。处理好以后，就不会有报错了。![](https://doc.chatmoney.cn/docs/images/general/php/debug/permission-2.png)![](https://doc.chatmoney.cn/docs/images/general/php/debug/permission-3.png)