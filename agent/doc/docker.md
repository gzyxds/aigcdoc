# Docker方式安装

## 环境准备

### 服务器/本地配置要求

- 2核CPU
- 4GB内存
- ≥5GB 磁盘空间

在使用Docker部署FastBuildAI之前，请确保您的系统已经安装了以下软件：

- Docker (版本 20.10.0 或更高)
- Docker Compose (版本 2.0.0 或更高)

您可以通过以下命令检查它们是否已正确安装：

```bash
# 检查 Docker 版本
docker --version

# 检查 Docker Compose 版本
docker compose version
```
## 部署步骤

### 1. 获取代码

```bash
# Github
git clone https://github.com/FastbuildAI/FastbuildAI.git

# Gitee
git clone https://gitee.com/FastbuildAI/FastBuildAI.git
```

### 2. 配置环境变量

在运行 Docker 命令前，首先需要配置环境变量。请确保项目根目录下存在 `.env.production.local` 文件。您可以从示例文件复制并修改：

```bash
# 进入项目根目录
cd FastBuildAI

# 复制环境变量配置文件
cp .env.production.local.example .env.production.local
```

然后根据您的需求编辑 `.env.production.local` 文件。如果本地部署且无特殊需求，则无需修改，如果需要部署到线上环境，则需要配置前端接口域名 `VITE_APP_BASE_URL`。

主要配置项包括：

- 数据库连接信息
- API密钥和安全设置
- 网络和端口配置

### 3. 启动服务

完成环境变量配置后，在项目根目录执行以下命令启动所有服务：

```bash
docker compose -p artaigc --env-file ./.env.production.local -f ./docker/docker-compose.yml up -d
```

这个命令会：

- 使用 `-p fastbuildai` 参数指定项目名称
- 通过 `--env-file ./.env.production.local` 加载环境变量配置
- 使用 `-f ./docker/docker-compose.yml` 指定 Docker Compose 配置文件
- 通过 `up -d` 在后台启动所有服务
## 配置说明

### Docker Compose 配置

`./docker/docker-compose.yml` 文件定义了 FastBuildAI 所需的所有服务容器。默认配置已经能满足大多数使用场景，但您也可以根据需要进行自定义。

### 服务管理

#### 查看运行状态

```bash
docker compose -p fastbuildai -f ./docker/docker-compose.yml ps
```

#### 查看服务日志

```bash
# 查看所有服务的日志
docker compose -p fastbuildai -f ./docker/docker-compose.yml logs

# 查看特定服务的日志（例如 api 服务）
docker compose -p fastbuildai -f ./docker/docker-compose.yml logs api

# 实时查看日志
docker compose -p fastbuildai -f ./docker/docker-compose.yml logs -f
```

#### 停止服务

```bash
docker compose -p fastbuildai -f ./docker/docker-compose.yml down
```

#### 重启服务

```bash
docker compose -p fastbuildai -f ./docker/docker-compose.yml restart
```

### 数据持久化

FastBuildAI 的数据默认存储在 Docker 卷中，确保数据在容器重启后不会丢失。主要的数据卷包括：

- 数据库数据
- 上传的文件和资源
- 配置文件
## 常见问题

### 端口冲突

如果遇到端口冲突问题，可以修改 `.env.production.local` 文件中的端口配置，然后重新启动服务。

### 容器无法启动

请检查：

1. Docker 服务是否正常运行
2. 环境变量文件是否正确配置
3. 查看容器日志获取详细错误信息：

```bash
docker compose -p fastbuildai -f ./docker/docker-compose.yml logs
```

### 性能优化

对于生产环境，建议根据服务器配置调整容器资源限制，可以在 `docker-compose.yml` 文件中设置 CPU 和内存限制。
## 框架开发

为了更好的开发体验，我们提供了一些工具配置、项目说明，以便于您更好的开发。

### 技术栈

#### 前端

- Vue 3
- Nuxt 3

#### 后端

- NestJS

#### 数据库

- PostgreSQL
- Redis

#### 工具链

- TypeScript
- Vite
- Docker
- Docker Compose

### 环境要求

- Node.js 18+
- pnpm 8+
- Docker
- Docker Compose

### 目录结构

项目采用 Monorepo 架构，主要目录结构如下：

```
FastBuildAI/
├── api/                 # 后端 API 服务
├── web/                 # 前端应用
├── admin/               # 管理后台
├── docker/              # Docker 相关配置
├── docs/                # 项目文档
├── scripts/             # 脚本文件
├── .env.*               # 环境变量配置
├── package.json         # 项目依赖
└── tsconfig.json        # TypeScript 配置
```

### 子项目目录结构

#### 1. apps/server/ - 服务端应用

基于 NestJS 框架的后端应用，提供 API 服务和业务逻辑处理。

```
apps/server/
├── src/                 # 源代码目录
│   ├── main.ts         # 应用入口文件
│   ├── core/           # 核心功能模块（缓存、数据库、权限等）
│   ├── common/         # 通用组件（装饰器、过滤器、拦截器等）
│   ├── modules/        # 业务模块
│   │   ├── app.module.ts    # 根模块
│   │   ├── console/         # 后台管理 API 模块
│   │   └── web/             # 前台用户 API 模块
│   ├── plugins/        # 插件系统
│   └── assets/         # 静态资源
├── libs/               # 共享库
├── test/               # 测试文件
├── docs/               # 文档
├── dist/               # 构建输出目录
├── storage/            # 文件存储目录
├── package.json        # 依赖配置
├── tsconfig.json       # TypeScript 配置
├── nest-cli.json       # NestJS CLI 配置
└── .swcrc              # SWC 编译配置
```

#### 2. apps/web/ - 前端 Web 应用

基于 Nuxt.js 框架的前端应用，提供用户界面和交互功能。

```
apps/web/
├── .nuxt/              # Nuxt 构建缓存
├── .output/            # 构建输出
├── app/                # 页面组件
├── assets/             # 静态资源（CSS、图片等）
├── common/             # 通用模块（组件，hooks，通用数据等）
│   ├── components/         # 组件
│   ├── composables/        # 根模块
│   ├── config/             # 公共配置文件
│   ├── constants/          # 项目常量定义
│   └── utils/              # 工具函数
├── core/               # 核心功能模块（nuxt vue 核心模块）
│   ├── directives/         # vue 指令
│   ├── i18n/               # 国际化相关
│   ├── layouts/            # nuxt 布局
│   ├── middleware          # nuxt 中间件
│   ├── modules             # nuxt 模块
│   ├── plugins             # nuxt 插件
│   └── stores              # Pinia存储
├── libs/               # 共享库
├── models/             # 数据模型定义
├── plugins/            # 插件系统
├── public/             # 前端公共静态资源
├── server/             # nuxt 服务端应用
├── services/           # API 服务层
├── types/              # TypeScript 类型定义
├── app.vue             # 根组件
├── nuxt.config.ts      # Nuxt 配置
├── app.config.ts       # 应用配置
└── package.json        # 依赖配置
```

#### 3. apps/mobile/ - 移动端应用

基于 uni-app/Vite 框架的移动端应用，支持多平台部署。

```
apps/mobile/
├── src/                # 源代码目录
│   ├── pages/          # 页面组件
│   ├── components/     # 公共组件
│   ├── utils/          # 工具函数
│   ├── api/            # API 接口
│   ├── store/          # 状态管理
│   ├── static/         # 静态资源
│   └── styles/         # 样式文件
├── index.html          # 入口 HTML
├── vite.config.ts      # Vite 配置
├── package.json        # 依赖配置
└── tsconfig.json       # TypeScript 配置
```

#### 4. apps/doc/ - 文档站点

基于 Next.js + Fumadocs 的文档站点，提供项目文档和API参考。

```
apps/doc/
├── app/                # Next.js App Router 页面
├── docs/               # Markdown 文档文件
├── components/         # 文档组件
├── styles/             # 样式文件
├── public/             # 公共静态文件
├── lib/                # 工具库
├── hooks/              # React Hooks
├── types/              # TypeScript 类型
├── locales/            # 国际化文件
├── .next/              # Next.js 构建缓存
├── next.config.mjs     # Next.js 配置
├── source.config.ts    # Fumadocs 配置
├── mdx-components.tsx  # MDX 组件配置
└── package.json        # 依赖配置
```

#### 5. packages/ - 复用包与核心业务包

`packages/` 目录用于存放可被多个应用（如 server、web、mobile 等）复用的工具库、UI 组件、配置、资源等核心包，便于代码共享和统一维护。

```
packages/
├── utils/               # 通用工具库
│   ├── lib/            # 构建产物与类型声明
│   ├── scripts/        # 构建/发布脚本
│   ├── src/            # 源码目录
│   │   ├── index.ts    # 工具库主入口
│   │   └── parse-package-name.ts # 包名解析工具
│   ├── package.json    # 包配置
│   ├── tsconfig.json   # TypeScript 配置
│   └── ...
├── config/              # 配置相关包
│   ├── eslint/         # ESLint 相关配置
│   │   ├── base.js     # 基础 ESLint 配置
│   │   └── http.js     # HTTP 相关 ESLint 配置
│   ├── typescript/     # TypeScript 相关配置
│   │   └── base.json   # 基础 TS 配置
│   ├── ui/             # UI 相关配置
│   │   └── table.js    # 表格 UI 配置
│   ├── package.json    # 包配置
│   └── ...
├── ui/                  # 通用 UI 组件库
│   ├── src/            # 组件源码
│   │   ├── components/ # 具体组件（如 pro-modal、pro-uploader 等）
│   │   ├── composables/# 组合式函数
│   │   ├── utils/      # 工具函数
│   │   └── styles/     # 样式文件（全局
│   ├── package.json    # 包配置
│   ├── tsconfig.json   # TypeScript 配置
│   └── ...
├── designer/           # 设计器相关包
│   ├── src/            # 设计器源码
│   │   ├── components/ # 设计器专用组件
│   │   ├── composables/# 组合式函数
│   │   ├── utils/      # 工具函数
│   │   ├── stores/     # 状态管理
│   │   └── types/      # 类型定义
│   ├── package.json    # 包配置
│   ├── tsconfig.json   # TypeScript 配置
│   └── ...
├── http/               # HTTP 通信相关包
│   ├── src/            # 源码目录
│   │   ├── index.ts    # 主入口
│   │   ├── types.ts    # 类型定义
│   │   └── constants.ts# 常量定义
│   ├── test/           # 测试用例
│   │   ├── http-test.js
│   │   └── interceptor.test.ts
│   ├── package.json    # 包配置
│   ├── tsconfig.json   # TypeScript 配置
│   └── ...
├── assets/              # 资源包
│   ├── images/         # 图片资源
│   │   ├── files/      # 文件类型图标
│   │   ├── favicon.ico # 网站图标
│   │   └── logo.png    # 项目 Logo
│   ├── shims-image.d.ts# 图片类型声明
│   ├── package.json    # 包配置
│   └── tsconfig.json   # TypeScript 配置
└── ...                 # 其他可复用包
```

**目录说明**

- `utils/`：存放通用工具函数，便于各端复用。
- `config/`：存放各类配置文件和类型定义，支持多端统一配置。
- `ui/`：自研或三方封装的 UI 组件库，统一前端视觉和交互风格。
- `designer/`：低代码、可视化设计器相关的核心包。
- `http/`：HTTP 请求、拦截器、API 通信相关的封装。
- `assets/`：图片、图标、字体等静态资源包，供各端统一引用。

所有包均建议采用独立的 `package.json` 进行依赖管理，支持按需构建和发布。

### 插件系统

FastBuildAI 支持插件扩展，您可以通过插件来扩展系统功能。插件系统的主要特点：

- 模块化设计，易于扩展
- 统一的插件接口
- 支持热插拔

#### 插件开发

##### 创建插件

在 plugins 目录下创建新的插件目录，例如：

```
plugins/
└── my-plugin/
    ├── index.js         # 插件入口
    ├── package.json     # 插件配置
    └── README.md        # 插件说明
```

##### 插件接口

插件需要实现以下接口：

```javascript
module.exports = {
  name: 'my-plugin',
  version: '1.0.0',
  description: 'My custom plugin',
  init(app) {
    // 初始化逻辑
  },
  hooks: {
    // 钩子函数
  }
};
```
### 环境变量配置

FastBuildAI 使用环境变量来配置应用的行为。主要的环境变量包括：

#### 数据库配置

- `DB_HOST`: 数据库主机
- `DB_PORT`: 数据库端口
- `DB_USER`: 数据库用户名
- `DB_PASSWORD`: 数据库密码
- `DB_NAME`: 数据库名称

#### Redis配置

- `REDIS_HOST`: Redis 主机
- `REDIS_PORT`: Redis 端口
- `REDIS_PASSWORD`: Redis 密码

#### API配置

- `API_PORT`: API 服务端口
- `API_HOST`: API 服务主机
- `API_SECRET`: API 密钥

#### 前端配置

- `VITE_APP_BASE_URL`: 前端基础 URL
- `VITE_APP_TITLE`: 应用标题
- `VITE_APP_DESCRIPTION`: 应用描述

#### 示例配置

```env
# 数据库配置
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=fastbuildai

# Redis 配置
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# API 配置
API_PORT=3000
API_HOST=0.0.0.0
API_SECRET=your-secret-key

# 前端配置
VITE_APP_BASE_URL=http://localhost:3000
VITE_APP_TITLE=FastBuildAI
VITE_APP_DESCRIPTION=AI 驱动的构建工具
```
## 示例配置

### Base

```env
# 运行环境
NODE_ENV=production
# 应用名称（用于日志、PM2等标识）
APP_NAME=FastbuildAI
# 应用版本号（用于信息展示或灰度控制）
APP_VERSION=1.0.0-beta.3
```

### Server

```env
# 后端服务监听端口
SERVER_PORT=4090
# 是否启用 CORS
SERVER_CORS_ENABLED=true
# CORS 允许的来源，* 表示允许任意来源
SERVER_CORS_ORIGIN=*
# 是否显示详细错误（仅建议在开发环境开启）
SERVER_SHOW_DETAILED_ERRORS=true
# 是否演示环境（开启后可能限制写入/危险操作）
SERVER_IS_DEMO_ENV=false
```

### PM2

```env
# PM2 进程名称（使用 pm2 启动/管理时的标识）
PM2_APP_NAME=fastbuildai
```

### JWT

```env
# JWT 签名密钥（请在生产环境务必更换为强随机值）
JWT_SECRET=fastbuildai
# JWT 过期时间（如：60s, 10m, 1h, 1d）
JWT_EXPIRES_IN=1d
```

### Database

```env
# 数据库类型（例如：postgres、mysql）
DB_TYPE=postgres
# 数据库主机地址
DB_HOST=localhost
# 数据库端口
DB_PORT=5432
# 数据库用户名
DB_USERNAME=postgres
# 数据库密码
DB_PASSWORD=postgres
# 数据库名称
DB_DATABASE=fastbuildai
# 数据表前缀（用于区分不同业务）
DB_TABLE_PREFIX=fb_
# 是否自动同步实体到数据库（生产环境谨慎开启，涉及建表/变更）
DB_SYNCHRONIZE=true
# 是否输出 SQL 日志
DB_LOGGING=true
```

### Redis

```env
# Redis 主机地址
REDIS_HOST=localhost
# Redis 端口
REDIS_PORT=6379
# Redis 用户名（如未启用 ACL 可留空）
REDIS_USERNAME=
# Redis 密码（如无密码可留空）
REDIS_PASSWORD=
# Redis 数据库索引（0-15）
REDIS_DB=0
# 缓存默认过期时间（秒），支持表达式：60*60*24 表示 1 天
REDIS_TTL=60*60*24
```

### Logs

```env
# type LogLevel = "log" | "error" | "warn" | "debug" | "verbose" | "fatal"
# 输出的日志级别（逗号分隔，按需选择）
LOG_LEVELS=error,warn,debug,fatal,log
# 是否将日志写入文件（需确保有写入权限）
LOG_TO_FILE=true
# 是否打印数据库 schema 变更信息（用于调试）
LOG_DATABASE_SCHEMA=true
```

### Web

```env
# 前端接口请求域名，生产环境需填写
VITE_APP_BASE_URL=
# Web 与服务端通讯的 API 前缀
VITE_APP_WEB_API_PREFIX=/api
# 控制台管理端 API 前缀
VITE_APP_CONSOLE_API_PREFIX=/consoleapi
```

### Docker

```env
# npm镜像源
NPM_REGISTRY_URL=https://registry.npmmirror.com
# 是否使用快速启动模式（可能跳过部分检查/初始化）
QUICK_START_MODE=false
# 容器名称后缀（便于区分不同环境/开发者）
DOCKER_CONTAINER_SUFFIX=
# 容器内存上限（例如：512M, 2G）
DOCKER_MEMORY_LIMIT=2666M
# 容器 CPU 限制（核心数，可小数，如 1.0 表示 1 核）
DOCKER_CPU_LIMIT=1.0
# 容器内存预留（调度期望占用）
DOCKER_MEMORY_RESERVATION=512M
# Redis 宿主机映射端口（用于将容器内 6379 暴露到宿主机）
REDIS_EXTERNAL_PORT=
# Postgres 宿主机映射端口（用于将容器内 5432 暴露到宿主机）
POSTGRES_EXTERNAL_PORT=
```
## 插件包配置

插件包的基本配置信息统一在插件包根目录下的 `manifest.json` 中。这个文件会根据插件创建时填的表单信息自动生成，无需自己手动创建。

```json
{
  "name": "example-plugin",
  "version": "1.0.0",
  "title": "示例插件",
  "description": "示例插件，用于展示插件包的配置",
  "author": "FastBuildAI团队",
  "homepage": "https://www.mddai.cn",
  "dependencies": {},
  "devDependencies": {}
}
```

在插件包的前后端代码中，会生成带有自身特性的前缀。比如插件后端代码根目录下的 `package.json` 文件会给包名添加 `@server/` 前缀：

```json
{
  "name": "@server/example-plugin",
  "version": "1.0.0",
  "title": "示例插件",
  "description": "示例插件，用于展示插件包的配置",
  "enabled": true,
  "author": "FastBuildAI团队",
  "homepage": "https://www.mddai.cn",
  "dependencies": {},
  "devDependencies": {}
}
```

同理，插件前端代码根目录下的 `package.json` 文件会给包名添加 `@web/` 前缀：

```json
{
  "name": "@web/example-plugin",
  "version": "1.0.0",
  "title": "示例插件",
  "description": "示例插件，用于展示插件包的配置",
  "enabled": true,
  "author": "FastBuildAI团队",
  "homepage": "https://www.mddai.cn",
  "dependencies": {},
  "devDependencies": {}
}
```
## 常见问题

### 修改主页底部版权

文件位置：`apps/web/app/index.vue`

找到第295-302行，修改为：

```vue
<span class="space-x-1">
    <span>Powered by</span>
    <a
        class="text-primary font-bold"
        href="https://你的域名.com"
        target="_blank"
    >
        你的品牌名称
    </a>
</span>
```

### 修改公共智能体页面底部版权

文件位置：`apps/web/app/public/agent/_components/public-agent-chats-list.vue`

找到第420-430行，修改为：

```vue
<span>Powered by</span>
<a
    href="https://你的域名.com"
    target="_blank"
    class="text-primary font-medium hover:underline"
>
    你的品牌名称
</a>
```
