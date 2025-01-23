# 对象存储设置

本教程将指导您如何配置腾讯云 COS（对象存储），包括创建存储桶、设置访问权限以及迁移数据等操作。

---

## 腾讯云 COS

### 说明

腾讯云 COS 的配置不是必须的，按实际需要配置。

---

### 配置

#### 步骤 1：登录腾讯云

1. 打开 [腾讯云官网](https://cloud.tencent.com/)，使用腾讯云账号登录。
2. 单击右上角头像，选择【访问管理】。

![访问管理](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-1.png)

---

#### 步骤 2：获取 API 密钥

1. 在腾讯云后台，点击【访问密钥】->【API 密钥管理】。
2. 如果没有密钥，则新建密钥。
3. 登录系统管理后台，点击【系统设置】->【存储设置】，找到腾讯云 COS，点击【设置】。
4. 从腾讯云后台复制 `SecretId` 和 `SecretKey`，粘贴到系统管理后台的对应选项。

![API 密钥管理](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-2.png)

---

#### 步骤 3：进入对象存储页面

1. 在腾讯云后台，点击【云产品】->【对象存储】，进入对象存储设置页面。

![对象存储](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-3.png)

---

#### 步骤 4：创建存储桶

1. 点击【创建存储桶】。
2. 根据需要选择【所属地区】，填写【名称】，选择【公有读私有写】，点击【下一步】。

![创建存储桶](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-4.png)

---

#### 步骤 5：完成创建

1. 点击【下一步】，然后点击【创建】。

![完成创建](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-5.png)
![创建成功](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-6.png)

---

#### 步骤 6：配置存储桶信息

1. 点击【概况】，复制【存储桶名称】、【访问域名】、【所属地区】。
2. 将这些信息分别填写到系统管理后台的【存储空间名称】、【空间域名】、【REGION】输入框中。
3. 选择【状态】为开启，点击【保存】。

![配置存储桶](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-7.png)

---

## 注意事项

### 迁移数据

1. **PHP 版**：
   - 将 `server/public` 下的 `resource` 目录和 `uploads` 目录复制到 OSS 空间的根目录。
   - 确保原来的资源图片可以正常显示。

2. **Java 版**：
   - 将 `/public/uploads` 目录复制到 OSS 空间的根目录。
   - 新建名为 `api` 的目录，将 `server/like-common/src/main/resources/static` 目录复制到 `api` 中。
   - 上传完成后，图片路径示例：`/api/static/xxxxp.png`。

---

### 跨域设置

1. 使用对象存储后，需要设置资源允许跨域。
2. 打开跨域相关设置，配置如下：

   ```plaintext
   *
   access-control-allow-credentials: true
   access-control-allow-origin: *
   ```

![跨域设置](https://doc.chatmoney.cn/docs/images/general/config/oss/demo.png)

---

## 至此对象存储配置完成

通过以上步骤，您可以顺利完成腾讯云 COS 的配置工作。如有任何问题，请参考相关文档或联系技术支持。