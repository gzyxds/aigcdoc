---
title: FastBuildAI 部署运维指南
description: FastBuildAI 的部署、配置和运维操作指南
---

# FastBuildAI 部署运维指南

本文档提供 FastBuildAI 的完整部署和运维操作指南。

## 部署步骤
### 1. 获取代码

从官方仓库克隆项目代码：

::: code-group

```bash [GitHub]
git clone https://github.com/FastbuildAI/FastbuildAI.git
```

```bash [Gitee]
git clone https://gitee.com/FastbuildAI/FastBuildAI.git
```

:::
### 2. 配置环境变量

在运行 Docker 命令前，首先需要配置环境变量。请确保项目根目录下存在 `.env.production.local` 文件。

```bash
# 进入项目根目录
cd FastBuildAI

# 复制环境变量配置文件
cp .env.production.local.example .env.production.local
```

然后根据您的需求编辑 `.env.production.local` 文件：

::: tip 配置说明
- **本地部署**：如无特殊需求，无需修改默认配置
- **线上部署**：需要配置前端接口域名 `VITE_APP_BASE_URL`
:::

**主要配置项包括：**
- 数据库连接信息
- API密钥和安全设置  
- 网络和端口配置
### 3. 启动服务

完成环境变量配置后，在项目根目录执行以下命令启动所有服务：

```bash
docker compose -p fastbuildai --env-file ./.env.production.local -f ./docker/docker-compose.yml up -d
```

**命令参数说明：**
- `-p fastbuildai` - 指定项目名称
- `--env-file ./.env.production.local` - 加载环境变量配置
- `-f ./docker/docker-compose.yml` - 指定 Docker Compose 配置文件
- `up -d` - 在后台启动所有服务
## 配置说明

### Docker Compose 配置

`./docker/docker-compose.yml` 文件定义了 FastBuildAI 所需的所有服务容器。

::: info
默认配置已经能满足大多数使用场景，但您也可以根据需要进行自定义。
:::
## 服务管理

### 查看运行状态

```bash
docker compose -p fastbuildai -f ./docker/docker-compose.yml ps
```

### 查看服务日志

::: code-group

```bash [查看所有服务日志]
docker compose -p fastbuildai -f ./docker/docker-compose.yml logs
```

```bash [查看特定服务日志]
# 例如查看 api 服务日志
docker compose -p fastbuildai -f ./docker/docker-compose.yml logs api
```

```bash [实时查看日志]
docker compose -p fastbuildai -f ./docker/docker-compose.yml logs -f
```

:::

### 停止服务

```bash
docker compose -p fastbuildai -f ./docker/docker-compose.yml down
```

### 重启服务

```bash
docker compose -p fastbuildai -f ./docker/docker-compose.yml restart
```
## 数据持久化

FastBuildAI 的数据默认存储在 Docker 卷中，确保数据在容器重启后不会丢失。

**主要的数据卷包括：**
- 数据库数据
- 上传的文件和资源
- 配置文件
## 常见问题

### 端口冲突

如果遇到端口冲突问题，可以修改 `.env.production.local` 文件中的端口配置，然后重新启动服务。

### 容器无法启动

请按以下步骤检查：

1. **检查 Docker 服务**：确认 Docker 服务是否正常运行
2. **检查环境变量**：确认环境变量文件是否正确配置
3. **查看错误日志**：
   ```bash
   docker compose -p fastbuildai -f ./docker/docker-compose.yml logs
   ```

## 品牌定制

### 修改主页底部版权

编辑文件：`apps/web/app/index.vue`

找到第295-302行，修改为：

```vue
<!-- 主页底部版权 -->
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

编辑文件：`apps/web/app/public/agent/_components/public-agent-chats-list.vue`

找到第420-430行，修改为：

```vue
<!-- 公共智能体页面底部版权 -->
<span>Powered by</span>
<a
    href="https://你的域名.com"
    target="_blank"
    class="text-primary font-medium hover:underline"
>
    你的品牌名称
</a>
```


### 管理后台配置

**"前往官网"地址配置：**
- 文件位置：`FastbuildAI/apps/web/common/components/console/layout/components/user-menu.vue`
- 修改位置：第 264 行

### 关键文件位置

| 功能 | 文件路径 |
|------|----------|
| 左侧配置面板 | `apps/web/app/console/decorate/layout/index.vue` |
| 用户菜单组件 | `apps/web/common/components/console/layout/components/user-menu.vue` |
| 公共智能体底部版权 | `apps/web/app/public/agent/_components/public-agent-chats-list.vue` |
| 主页底部版权 | `apps/web/app/index.vue` |

::: tip
更多详细规则请参考 `project_rules.md`
:::
## 数据迁移与备份

### 数据备份位置
- **Docker 数据**：`/docker/data`
- **图片文件**：`根目录/apps/server/storage`

## 重新编译部署

### 停止并移除容器

::: code-group

```bash [推荐方式1]
docker compose -p fastbuildai --env-file ./.env.production.local -f ./docker/docker-compose.yml down
```

```bash [推荐方式2]
docker compose -p fastbuildai -f ./docker/docker-compose.yml down
```

:::

### 重新构建并启动

::: code-group

```bash [完整重构建]
docker compose -p fastbuildai --env-file ./.env.production.local -f ./docker/docker-compose.yml up -d --build
```

```bash [仅重构建 nodejs 服务]
docker compose -p fastbuildai --env-file ./.env.production.local -f ./docker/docker-compose.yml up -d --build nodejs
```

:::

### 服务管理对比

| 操作 | 命令 | 使用场景 |
|------|------|----------|
| **down** | `docker compose ... down` | 完全停止服务、应用配置更改、释放系统资源或进行维护 |
| **restart** | `docker compose ... restart` | 重启服务解决临时问题，不移除容器 |
## 数据库操作

### 备份数据库

```bash
docker compose -p fastbuildai --env-file ./.env.production.local -f ./docker/docker-compose.yml exec postgres pg_dump -U postgres fastbuildai > backup.sql
```

### 恢复数据库

```bash
docker compose -p fastbuildai --env-file ./.env.production.local -f ./docker/docker-compose.yml exec -i postgres psql -U postgres fastbuildai < backup.sql
```

## 项目更新

**标准更新流程：**

1. **拉取最新代码**
   ```bash
   git pull
   ```

2. **重启 nodejs 服务**
   ```bash
   docker compose -p fastbuildai --env-file ./.env.production.local -f ./docker/docker-compose.yml restart nodejs
   ```

## Git 常用命令参考

### 仓库初始化与配置

```bash
# 初始化一个新的Git仓库
git init

# 克隆一个远程仓库到本地
git clone <url>

# 设置全局用户名
git config --global user.name "姓名"

# 设置全局邮箱
git config --global user.email "邮箱"

# 列出所有配置信息
git config --list

# 设置默认编辑器
git config --global core.editor "编辑器"
```


### 基本操作

```bash
# 查看工作区状态
git status

# 将文件添加到暂存区
git add <文件>

# 添加所有修改的文件到暂存区
git add .

# 添加所有文件（包括删除的文件）到暂存区
git add -A

# 提交暂存区的文件到本地仓库
git commit -m "提交信息"

# 跳过暂存区直接提交所有已跟踪的文件
git commit -am "提交信息"

# 修改最后一次提交
git commit --amend

# 删除文件并记录到暂存区
git rm <文件>

# 重命名文件并记录到暂存区
git mv <旧文件名> <新文件名>
```


### 查看与比较

```bash
# 查看提交历史
git log

# 以简洁形式查看提交历史
git log --oneline

# 以图形化方式查看分支合并历史
git log --graph

# 查看提交统计信息
git log --stat

# 查看每次提交的详细变更
git log -p

# 显示最近一次提交的详细信息
git show

# 查看工作区与暂存区的差异
git diff

# 查看暂存区与本地仓库的差异
git diff --cached

# 查看工作区与本地仓库的差异
git diff HEAD

# 比较两个分支的差异
git diff <分支1> <分支2>

# 查看文件每一行的修改者和提交信息
git blame <文件>
```


### 分支管理

::: details 点击查看详细命令

```bash
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 列出所有本地和远程分支
git branch -a

# 创建新分支
git branch <分支名>

# 删除已合并的分支
git branch -d <分支名>

# 强制删除分支（未合并的）
git branch -D <分支名>

# 切换到指定分支
git checkout <分支名>

# 创建并切换到新分支
git checkout -b <分支名>

# 将指定分支合并到当前分支
git merge <分支名>

# 取消正在进行的合并
git merge --abort

# 将当前分支变基到指定分支
git rebase <分支名>

# 取消正在进行的变基
git rebase --abort

# 继续变基过程
git rebase --continue

# 保存当前工作进度
git stash

# 列出所有保存的工作进度
git stash list

# 恢复最近保存的工作进度
git stash apply

# 删除最近保存的工作进度
git stash drop

# 恢复并删除最近保存的工作进度
git stash pop
```

:::


### 远程仓库操作

::: details 点击查看详细命令

```bash
# 列出所有远程仓库
git remote

# 列出所有远程仓库及其URL
git remote -v

# 添加新的远程仓库
git remote add <名称> <URL>

# 删除远程仓库
git remote remove <名称>

# 重命名远程仓库
git remote rename <旧名> <新名>

# 从远程仓库获取最新版本
git fetch <远程仓库名>

# 从远程仓库拉取并合并到当前分支
git pull <远程仓库名> <分支名>

# 推送本地分支到远程仓库
git push <远程仓库名> <分支名>

# 设置上游并推送
git push -u <远程仓库名> <分支名>

# 强制推送（覆盖远程历史）
git push --force

# 推送所有分支到远程仓库
git push --all

# 推送所有标签到远程仓库
git push --tags
```

:::


### 撤销与回退

::: details 点击查看详细命令

```bash
# 撤销工作区中文件的修改
git checkout -- <文件>

# 取消暂存区中的文件
git reset HEAD <文件>

# 重置工作区和暂存区到最近提交
git reset --hard HEAD

# 软重置，保留工作区和暂存区
git reset --soft HEAD~1

# 混合重置，保留工作区，清空暂存区
git reset --mixed HEAD~1

# 创建新提交来撤销指定提交
git revert <提交ID>

# 删除工作区中未跟踪的文件
git clean -f

# 删除工作区中未跟踪的文件和目录
git clean -fd
```

:::


### 标签管理

::: details 点击查看详细命令

```bash
# 列出所有标签
git tag

# 创建轻量标签
git tag <标签名>

# 创建带注释的标签
git tag -a <标签名> -m "标签信息"

# 删除本地标签
git tag -d <标签名>

# 推送指定标签到远程仓库
git push <远程仓库名> <标签名>

# 推送所有标签到远程仓库
git push <远程仓库名> --tags

# 检出指定标签（处于分离头指针状态）
git checkout <标签名>
```

:::


### 高级操作

::: details 点击查看详细命令

```bash
# 选择性地合并提交
git cherry-pick <提交ID>

# 开始二分查找
git bisect start

# 标记当前提交为有问题
git bisect bad

# 标记当前提交为无问题
git bisect good

# 重置二分查找状态
git bisect reset

# 重写分支历史
git filter-branch

# 添加子模块
git submodule add <URL> <路径>

# 更新子模块
git submodule update

# 创建归档文件
git archive --format zip --output <文件名>.zip HEAD

# 垃圾回收，优化仓库
git gc

# 检查仓库完整性
git fsck

# 清理无效的远程分支引用
git prune
```

:::




### 快速发布示例

```bash
# 先提交所有更改（如果有）
git add .
git commit -m "更新代码"

# 推送到Gitee仓库：https://gitee.com/artaigc/artaigc
git push gitee main

# 推送到GitHub仓库：https://github.com/gzyxds/cnaiagent
git push origin main
```

::: info 提示
这些命令涵盖了Git的日常使用场景，从基本的提交和分支管理到高级的历史重写和仓库维护。根据您的具体需求，可以选择使用相应的命令。
:::
        
## Logo 文件位置

### 主要 Logo 文件

| 功能 | 文件路径 |
|------|----------|
| 主 Logo | `/www/wwwroot/FastbuildAI/apps/web/.output/public/logo-full.svg` |
| 公共 Logo | `/www/wwwroot/FastbuildAI/apps/web/public/logo-full.svg` |
| 资源 Logo | `/www/wwwroot/FastbuildAI/packages/assets/images/logo-full.svg` |
| Web Logo | `/www/wwwroot/FastbuildAI/public/web/logo-full.svg` |

### 加载 Logo

| 功能 | 文件路径 |
|------|----------|
| 默认加载 Logo | `/www/wwwroot/FastbuildAI/public/web/spa-loading.svg` |
| 应用加载 Logo | `FastbuildAI/apps/web/public/spa-loading.svg` |  


## Logo-full.svg 文件应用分析

### 1. `apps/web/public/logo-full.svg`

**应用场景：** 前端Web应用的静态资源

- 这是前端源码中的静态资源文件

**用于登录页面** (`apps/web/app/login/index.vue`)：
- 当系统没有配置自定义 logo 时，作为默认的完整 logo 显示
- 显示在登录页面顶部，作为品牌标识

**用于后台管理布局** (`apps/web/common/components/console/layout/components/site-logo.vue`)：
- 在 "mixture" 布局模式下使用
- 当没有自定义 logo 时，作为后台管理系统的品牌标识

### 2. `apps/web/.output/public/logo-full.svg`

**应用场景：** 构建后的静态资源

- 这是 Nuxt.js 构建后的输出文件
- 与源码中的 `apps/web/public/logo-full.svg` 内容相同
- 在生产环境中被浏览器实际访问的文件
- 通过 `/logo-full.svg` 路径可以直接访问

### 3. `packages/assets/images/logo-full.svg`

**应用场景：** 共享资源包

- 这是项目共享资源包中的 logo 文件
- 作为项目的标准品牌资源，可被多个应用模块引用
- 用于保持项目中所有应用的品牌一致性
- 可能被后端应用或其他模块引用

### 4. `public/web/logo-full.svg`

**应用场景：** 根目录公共资源

- 根据目录结构分析，`public/web/` 目录当前是空的
- 这个文件路径在代码中没有被引用
- 可能是历史遗留文件或者用于特定的部署配置

---

## 使用逻辑总结

| 阶段 | 文件路径 | 说明 |
|------|----------|------|
| **源码开发阶段** | `apps/web/public/logo-full.svg` | 源码中的静态资源文件 |
| **构建生产阶段** | `apps/web/.output/public/logo-full.svg` | 自动复制到构建输出目录 |
| **共享资源管理** | `packages/assets/images/logo-full.svg` | 统一管理的共享资源 |
| **降级显示策略** | 所有相关文件 | 当系统未配置自定义 logo 时，使用 logo-full.svg 作为默认品牌标识 |