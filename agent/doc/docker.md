---
title: Docker 方式安装 BuildingAI
description: 通过 Docker 一键部署 BuildingAI 的完整指南
---

# Docker 方式安装 BuildingAI

通过 Docker 一键部署 BuildingAI，快速搭建您的 AI 应用平台。

## 环境准备

### 最低配置要求

| 资源 | 最低配置 | 推荐配置 |
|------|----------|----------|
| CPU | ≥2核 | ≥4核 |
| 内存 | ≥4GB RAM | ≥8GB RAM |
| 存储 | ≥5GB 空闲空间 | ≥10GB 空闲空间 |

在使用 Docker 部署 BuildingAI 之前，请确保您的系统已经安装了以下软件：

- Docker (版本 20.10.0 或更高)
- Docker Compose (正常情况下已随 Docker 一起安装)

您可以通过以下命令检查它们是否已正确安装：

::: code-group

```bash [检查 Docker 版本]
docker --version
```

```bash [检查 Docker Compose 版本]
docker compose version
```

:::

## 部署步骤

### 1. 获取代码

::: code-group

```bash [GitHub]
git clone https://github.com/BidingCC/BuildingAI.git ./buildingai
```

```bash [Gitee]
git clone https://gitee.com/BidingCC/BuildingAI.git ./buildingai
```

:::

### 2. 配置环境变量

在运行 Docker 命令前，首先需要配置环境变量。请确保项目根目录下存在 `.env` 文件。

```bash
# 进入项目根目录
cd buildingai

# 复制环境变量配置文件
cp .env.example .env
```

然后根据您的需求编辑 `.env` 文件。

::: tip 配置说明
- **本地部署**：如无特殊需求，无需修改默认配置
- **线上部署**：需要配置前端接口域名 `APP_DOMAIN`
:::

### 3. 启动服务

完成环境变量配置后，在项目根目录执行以下命令启动所有服务：

```bash
docker compose up -d
```

拉取完所有镜像之后，需要 5~10 分钟等待项目构建完成（取决于设备性能和网络环境），具体进度可以查看 nodejs 服务日志。

当日志出现 `➜ Local: http://localhost:4090` 等字样，则表示项目构建完成。

## 访问应用

本地部署访问地址：http://localhost:4090/install 进行站点初始化配置

## 服务管理

### 查看运行状态

```bash
docker compose ps
```

### 查看服务日志

::: code-group

```bash [查看所有服务日志]
docker compose logs
```

```bash [查看特定服务日志]
# 例如查看 nodejs 服务日志
docker compose logs nodejs
```

```bash [实时查看日志]
docker compose logs -f
```

:::

### 停止服务

```bash
docker compose down
```

### 重启服务

```bash
docker compose restart
```

## 常见问题

### 端口冲突

如果遇到端口冲突问题，可以修改 `.env` 文件中的端口配置，然后重新启动服务。

### 容器无法启动

请按以下步骤检查：

1. **检查 Docker 服务**：确认 Docker 服务是否正常运行
2. **检查环境变量**：确认环境变量文件是否正确配置
3. **查看错误日志**：
   ```bash
   docker compose logs
   ```

### 构建时间过长

构建时间取决于以下因素：
- 设备性能（CPU、内存）
- 网络环境（镜像拉取速度）
- 磁盘 I/O 性能

::: tip 优化建议
- 使用 SSD 硬盘可显著提升构建速度
- 确保网络连接稳定
- 如果在中国大陆，可考虑配置 Docker 镜像加速器
:::