对象存储设置[​](https://doc.chatmoney.cn/pro/config/oss.html#%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E8%AE%BE%E7%BD%AE)
==============================================================================================================

七牛云存储、阿里云 OSS、腾讯云COS

腾讯云COS[​](https://doc.chatmoney.cn/pro/config/oss.html#%E8%85%BE%E8%AE%AF%E4%BA%91cos)
--------------------------------------------------------------------------------------

### 说明[​](https://doc.chatmoney.cn/pro/config/oss.html#%E8%AF%B4%E6%98%8E)

腾讯云COS的配置不是必须的，按实际需要配置。

### 配置[​](https://doc.chatmoney.cn/pro/config/oss.html#%E9%85%8D%E7%BD%AE)

*   **步骤1**: 打开腾讯云官网网站[https://cloud.tencent.com/](https://cloud.tencent.com/),使用腾讯云账号登录。单击右上角头像，单击【访问管理】。![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-1.png)
*   **步骤2**: 在腾讯云后台单击【访问密钥】->【API密钥管理】，如果没有密钥，则新建密钥。同时登录系统管理后台，单击【系统设置】->【存储设置】，找到腾讯云COS，单击【设置】。 从腾讯云后台复制SecretId和SecretKey到系统管理后台相对应选项。![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-2.png)
*   **步骤3**: 单击【云产品】->【对象存储】，进入对象存储设置页面。![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-3.png)
*   **步骤4**: 单击【创建存储桶】，根据需要选择【所属地址】，填写【名称】，选择【公有读私有写】，单击【下一步】。![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-4.png)
*   **步骤5**: 单击【下一步】。![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-5.png)
*   **步骤6**: 单击【创建】。![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-6.png)
*   **步骤7**: 单击【概况】，复制【存储桶名称】【访问域名】、【所属地区】、到后台相当【存储空间名称】、【空间域名】、【REGION】的输入框，选择【状态】为开启，单击【保存】。 保存以后，即可使用。![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-7.png)

注意事项[​](https://doc.chatmoney.cn/pro/config/oss.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
------------------------------------------------------------------------------------------

### 迁移数据[​](https://doc.chatmoney.cn/pro/config/oss.html#%E8%BF%81%E7%A7%BB%E6%95%B0%E6%8D%AE)

1.PHP版需要将server/public下面resource目录和uploads目录复制到OSS空间的根目录，原来的资源图片才可以正常显示 2.Java版需要将/public/uploads目录复制到OSS空间的根目录，原来的资源图片才可以正常显示。新建名称为api目录，需要将server/like-common/src/main/resources/static目录复制api中，上传完成后，图片例：/api/static/xxxxp.png。

### 跨域设置[​](https://doc.chatmoney.cn/pro/config/oss.html#%E8%B7%A8%E5%9F%9F%E8%AE%BE%E7%BD%AE)

使用了对象存储以后，需要设置资源允许跨域。 打开跨域相关设置，设置如下。

    *
    access-control-allow-credentials: true
    access-control-allow-origin: *

![](https://doc.chatmoney.cn/docs/images/general/config/oss/demo.png)