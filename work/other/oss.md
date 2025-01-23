# 对象存储设置

## 支持平台
- 七牛云存储
- 阿里云 OSS  
- 腾讯云 COS

## 腾讯云 COS 配置指南

### 配置说明
腾讯云 COS 的配置为可选配置，请根据实际业务需求进行配置。

### 详细配置步骤

1. **登录腾讯云控制台**
   - 访问 [腾讯云官网](https://cloud.tencent.com/)
   - 使用腾讯云账号登录
   - 点击右上角头像 -> 【访问管理】
   ![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-1.png)

2. **获取 API 密钥**
   - 进入【访问密钥】->【API 密钥管理】
   - 如无密钥，请新建密钥
   - 登录系统管理后台 -> 【系统设置】->【存储设置】-> 腾讯云 COS -> 【设置】
   - 将腾讯云的 SecretId 和 SecretKey 复制到系统后台对应位置
   ![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-2.png)

3. **创建存储桶**
   - 进入【云产品】->【对象存储】
   ![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-3.png)
   - 点击【创建存储桶】
   - 选择【所属地址】
   - 填写【存储桶名称】
   - 选择【公有读私有写】
   - 点击【下一步】
   ![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-4.png)
   - 确认配置后点击【创建】
   ![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-5.png)
   ![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-6.png)

4. **完成配置**
   - 进入存储桶【概况】页面
   - 复制以下信息到系统后台：
     - 存储桶名称 -> 存储空间名称
     - 访问域名 -> 空间域名  
     - 所属地区 -> REGION
   - 开启【状态】
   - 点击【保存】
   ![](https://doc.chatmoney.cn/docs/images/general/config/oss/cos-7.png)

## 注意事项

### 数据迁移指南

- **PHP 版本**
  1. 将 `server/public` 目录下的 `resource` 和 `uploads` 目录复制到 OSS 根目录
  2. 确保原有资源图片可正常显示

- **Java 版本**
  1. 将 `/public/uploads` 目录复制到 OSS 根目录
  2. 新建 `api` 目录
  3. 将 `server/like-common/src/main/resources/static` 目录复制到 `api` 中
  4. 上传完成后，图片路径示例：`/api/static/xxxxp.png`

### 跨域设置

使用对象存储后，需配置跨域访问权限：