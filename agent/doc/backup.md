# BuildingAI 系统备份与迁移指南

> 版本: 25.1.0  
> 更新日期: 2024-12-10

为了确保数据安全和业务连续性，在进行系统迁移、升级或作为日常运维的一部分时，必须对关键数据进行备份。

## 📦 核心备份目录

BuildingAI 系统的数据主要分布在以下三个位置，迁移时必须完整备份：

### 1. 数据库数据（最重要的核心数据）
- **路径**: `docker/data/postgres/postgres_data`
- **内容**: 存储了所有用户数据、账号信息、知识库索引、智能体配置、对话记录等核心业务数据。
- **注意**: 
  - 如果您使用的是 `docker-compose.yml` 默认启动的数据库，数据就在此目录下。
  - 如果使用外部独立 PostgreSQL 数据库，请使用 `pg_dump` 等工具进行导出备份，而忽略此目录。

### 2. 静态文件与上传资源
- **路径**: `storage/` 目录
- **内容**:
  - `storage/uploads/`: 用户上传的头像、图片、文档文件（RAG 知识库源文件）、附件等。
  - `storage/static/`: 系统运行时生成的静态资源。
- **重要性**: 知识库的源文件通常存储在这里，丢失会导致知识库无法重新索引或下载源文件。

### 3. 系统配置文件
- **路径**: `.env` 文件（项目根目录下）
- **内容**: 环境变量配置，包含数据库连接信息、Redis 密码、`JWT_SECRET`（用户认证密钥）、第三方 API Key 等敏感信息。
- **警告**: 
  - 迁移到新环境时，**必须**使用与旧环境完全相同的 `JWT_SECRET`，否则旧用户的 Token 将失效，且加密存储的敏感数据可能无法解密。
  - 数据库密码配置必须与 `postgres_data` 中的数据匹配。

---

## 🚀 备份与迁移操作步骤

### 第一步：停止服务
为了保证数据一致性，备份前建议暂停服务，避免有新数据写入。

```bash
cd /www/wwwroot/buildingai
docker compose down
```

### 第二步：打包备份
将上述关键目录和文件打包成一个压缩包。

```bash
# 在项目根目录下执行
tar -czvf buildingai_backup_$(date +%Y%m%d).tar.gz .env docker/data/postgres/postgres_data storage/
```

### 第三步：数据迁移
将压缩包传输到新服务器的相应目录。

```bash
# 示例：使用 scp 传输到新服务器
scp buildingai_backup_20241210.tar.gz root@new_server_ip:/www/wwwroot/buildingai/
```

### 第四步：恢复数据
在新服务器上解压备份文件，并确保文件权限正确。

```bash
# 1. 确保新服务器已有项目代码（git pull）
cd /www/wwwroot/buildingai

# 2. 解压备份数据
tar -xzvf buildingai_backup_20241210.tar.gz

# 3. 恢复目录权限（可选，视情况而定）
# 确保 Docker 容器内的用户有权读写 storage 和 data 目录
chmod -R 755 storage/ docker/data/
```

### 第五步：启动服务

```bash
docker compose up -d
```

### 第六步：验证
1. 登录系统，检查能否正常登录（验证数据库和 JWT 密钥）。
2. 访问知识库或用户头像，检查图片和文档能否正常加载（验证 storage 目录）。
3. 查看历史对话记录，确认数据完整性。
