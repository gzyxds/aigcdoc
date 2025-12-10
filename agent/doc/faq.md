# 更新项目

针对使用 Docker Compose 部署的环境（包括宝塔 Docker 方式），更新步骤如下：

1. **进入项目目录**
   （请根据实际安装路径调整）
   ```bash
   cd /www/wwwroot/buildingai
   ```

2. **拉取最新代码**
   ```bash
   git pull
   # 如果有本地修改冲突，可尝试重置：git reset --hard
   ```

3. **拉取最新镜像**
   ```bash
   docker compose pull
   ```

4. **重启容器服务**
   此命令会重建容器并启动服务，启动过程会自动执行构建（可能需要几分钟）。
   ```bash
   docker compose up -d
   ```

#### 处理 Git 更新冲突

如果执行 `git pull` 时提示冲突（例如 `error: Your local changes...`），请根据情况选择以下方法：

**方法一：强制覆盖（推荐）**

这会丢弃服务器上所有未提交的修改，将代码重置为远程仓库的最新状态。

```bash
# 1. 重置所有文件到最新状态
git reset --hard  

- 这个命令会将当前分支的HEAD重置到当前分支的最新提交
- 它不会与远程仓库进行任何同步
- 如果您的本地已经落后于远程仓库，这个命令不会获取最新的远程更改
- 它只会丢弃您本地的未提交更改，但不会获取远程的新代码

# git reset --hard origin/master

- 这个命令会将当前分支的HEAD重置到远程仓库(origin)的master分支的最新提交
- 它会强制使您的本地分支与远程master分支完全一致
- 这会丢弃所有本地提交和未提交的更改
- 即使您的本地落后于远程，这个命令也会使您的本地与远程完全同步

# 2. 拉取最新代码
git pull

# 3. 重启容器（会自动重新构建）
docker compose up -d
```

**方法二：保留修改（仅当您修改了源码想保留时）**

```bash
# 1. 暂存您的修改
git stash

# 2. 拉取最新代码
git pull

# 3. 恢复您的修改（可能会有冲突需要手动解决）
git stash pop

# 4. 重启容器
docker compose up -d
```

---

## 📜 NPM Scripts

### 开发命令

```bash
pnpm dev              # 启动所有开发服务
pnpm dev:api          # 启动后端开发服务
pnpm dev:web          # 启动前端开发服务
pnpm dev:desktop      # 启动桌面应用开发
```

### 构建命令

```bash
pnpm build            # 构建所有包
pnpm build:api        # 构建后端
pnpm build:web        # 构建前端
pnpm build:desktop    # 构建桌面应用
```

### 代码质量

```bash
pnpm lint             # 代码检查
pnpm lint:fix         # 自动修复
pnpm format           # 代码格式化
pnpm typecheck        # 类型检查
```

### 其他命令

```bash
pnpm clean            # 清理构建产物
pnpm sync-env         # 同步环境变量
pnpm start            # 生产环境启动
```

---

## 🔐 环境变量

主要环境变量配置（参考 `.env.example`）：

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `APP_NAME` | 应用名称 | BuildingAI |
| `APP_DOMAIN` | 应用域名 | localhost |
| `SERVER_PORT` | 服务端口 | 4090 |
| `JWT_SECRET` | JWT 密钥 | - |
| `DB_HOST` | 数据库主机 | localhost |
| `DB_PORT` | 数据库端口 | 5432 |
| `DB_DATABASE` | 数据库名 | buildingai |
| `REDIS_HOST` | Redis 主机 | localhost |
| `REDIS_PORT` | Redis 端口 | 6379 |

---

## 📊 系统要求

### 最低配置

- **CPU**: ≥ 2 核
- **内存**: ≥ 4 GB RAM
- **存储**: ≥ 5 GB 可用空间
- **Node.js**: 22.20.x (< 23)

### 推荐配置

- **CPU**: ≥ 4 核
- **内存**: ≥ 8 GB RAM
- **存储**: ≥ 20 GB SSD
 
## 🖼️ Logo 资源路径

### 主要 Logo 文件

| 路径 | 说明 |
|------|------|
| `assets/logo.png` | 项目主 Logo |
| `packages/web/buildingai-ui/public/logo.svg` | 前端 Logo (SVG) |
| `packages/web/buildingai-ui/public/logo-full.svg` | 前端完整 Logo (SVG) |
| `public/web/logo.svg` | 构建输出 Logo |
| `public/web/logo-full.svg` | 构建输出完整 Logo |

### Favicon 图标

| 路径 | 说明 |
|------|------|
| `packages/web/buildingai-ui/public/favicon.ico` | 网站图标 |
| `packages/web/buildingai-ui/public/maskable-icon.png` | PWA 可遮罩图标 |
| `public/web/favicon.ico` | 构建输出图标 |

### 桌面应用图标 (Tauri)

| 路径 | 说明 |
|------|------|
| `packages/desktop/src-tauri/icons/icon.ico` | Windows 图标 |
| `packages/desktop/src-tauri/icons/icon.icns` | macOS 图标 |
| `packages/desktop/src-tauri/icons/32x32.png` | 32x32 PNG |
| `packages/desktop/src-tauri/icons/128x128.png` | 128x128 PNG |
| `packages/desktop/src-tauri/icons/128x128@2x.png` | 128x128 @2x PNG |

### Logo 组件

| 路径 | 说明 |
|------|------|
| `packages/web/@buildingai/layouts/src/console/components/site-logo.vue` | 后台 Logo 组件 |
| `packages/web/@buildingai/layouts/src/web/components/web-site-logo.vue` | 前台 Logo 组件 |





