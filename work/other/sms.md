短信设置
阿里云短信设置
阿里云短信配置

配置用户AccessKey和签名
----------------

#### 1、打开[阿里云](https://www.aliyun.com/)，找到控制台。

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=a88ab269df87740961295f061393cb7f)  
  

#### 2、配置用户AccessKey

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=3256aa23410dbc30009f85e024fc779a)

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=448d39cc56cd6ea15a09f1e9073a199f)

#### 3、创建成功后点击显示

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=5017563e3ef3948d252fc292270d2673)  
  

#### 4、然后创建【短信签名】

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=c2fa4864f814b53936dd2165d6532765)  
  

#### 5、打开管理后台-设置-短信管理，把对应的短信签名和app\_key、secret\_key设置上去。

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=e2b61b139722f5acf2f8ff87d36f8bf9)

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=1b03bf80006482d8b266f8d3a4f03e47)  
  

配置短信模板
------

#### 1、创建【短信模版】

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=17cea280783e5b7814a2eb80bbc46ea9)

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=bdc9293709b76748ea315a61bf6fd422)  
  

#### 2、填写好模板类型和模板名称，然后模板内容在LikeShop管理后台复制过去即可，

#### 3、打开管理后台-设置-信息管理。

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=63fe0396dd8a28e3633cac1ee0b4936d)  
![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=6e7a840261f26bdfe2f14facd223e1e6)  
  
  
**注意：从管理后台复制到阿里云的模板内容时，变量前面需要加$符号！！！！！**  
填写完成后，点击提交，等待审核通过后，将code填写回likeshop的对应短信的模板ID  
![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=dc9286ec33a32221f2d79e4f3c520663)

## 腾讯云短信设置
腾讯云短信配置

打开管理后台-设置-短信管理-找到腾讯云选项点配置  
![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=dc078b99dea0dff0ddeaf0c282a1d71c)

**短信签名：** 打开腾讯云管理后台-短信-国内短信，从签名管理列表中创建签名。  
![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=1ada07e414c242b8c44476a2425e2a85)

**appID：** 打开腾讯云管理后台-短信-应用管理，从应用列表复制【SDKAppID】到管理后台相应的输入框。  
![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=c1686466380ee15da964b76a60b28be2)

**SecretId与Secretkey：** 1、打开腾讯云的右上角【访问管理】  
![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=b290895ad0e3a5ad6152ca66614603e1)

2、打开访问密钥管理，复制密钥的相应的内容到管理后台相应输入框，保存即可。  
![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=f280376e9e70dba74dcb1c949cc1ffca)

**腾讯云平台配置模板**
-------------

在添加腾讯云短信模板时,需要按照腾讯云的要求填写．变量为花括号加数字:{1}。

模板示例：尊敬的{1}，您的订单已发货，订单号{2}。（其中{1}、{2}为可自定义的内容，须从1开始连续编号，如{1}、{2}等）

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=14eef667df3f463b2f79b3c76c1f1c8f)

2，在系统内配置模板时需要使用系统定义的变量，且需要在变量前加上$ 例如 ${code}

![](https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&sign=d762c32c4fd0c1024aa785c776af69b4)