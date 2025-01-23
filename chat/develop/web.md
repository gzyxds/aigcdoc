# 前端开发指南

本指南将帮助您完成前端项目的环境准备、初始化、开发模式和生产模式的配置与运行。

---

## 环境准备

:::  danger ⚠️ 警告

- **Node 版本**：推荐使用 Node 16+ 版本。
- **包管理工具**：推荐使用 `yarn`。
- **首次使用**：如果未安装 `yarn`，可以通过以下命令安装：
:::
  ```shell
  npm install yarn -g
  ```

---

## 通过命令自动初始化项目

### 操作步骤

1. **进入项目目录**：
   - 下载安装包后，进入 `uniapp/`、`pc/` 或 `admin/` 目录。

2. **运行初始化命令**：
   - 在终端中运行以下命令：
     ```shell
     npm run init
     ```
   - 选择是否安装依赖（如果已安装过依赖，可以选择 `n`）。

3. **输入服务器域名**：
   - 输入您的服务器域名地址，例如：`https://xxx.com`。

4. **选择客户端**：
   - 选择需要运行的客户端。

5. **完成初始化**：
   - 运行成功后，项目初始化完成，可以开始二次开发。

---

## PC 端 (pc)

### 首次使用

1. **安装依赖**：
   - 确保 Node 版本为 16+，运行以下命令安装依赖：
     ```shell
     yarn install
     ```

2. **复制环境文件**：
   - 复制以下文件并重命名：
     - 复制 `.env.example` 为 `.env`。
     - 复制 `.env.development.example` 为 `.env.development`。
     - 复制 `.env.production.example` 为 `.env.production`。

3. **配置环境变量**：
   - **`.env`**：应用全局配置（通常无需修改）。
     ```plaintext
     NUXT_VERSION=1.0.0
     NUXT_API_PREFIX=/api
     NUXT_CLIENT=4
     NUXT_BASE_URL=/pc/
     NUXT_SSR=
     NITRO_PORT=3000
     ```
   - **`.env.development`**：开发环境。
     ```plaintext
     NUXT_API_URL='输入你的域名'
     ```
   - **`.env.production`**：生产环境。
     ```plaintext
     NUXT_API_URL='输入你的请求域名'  // 填空则跟随网站域名
     ```

---

### 开发模式

- **运行开发环境**：
  ```shell
  yarn dev
  ```

---

### 生产模式

1. **非 SEO 模式**：
   - 修改 `.env.production` 文件中的 `NUXT_API_URL` 为项目部署的服务端地址。
   - 运行以下命令打包：
     ```shell
     yarn build
     ```

2. **SEO 模式**：
   - 修改 `.env` 文件，开启 SSR：
     ```plaintext
     NUXT_SSR=1
     ```
   - 运行以下命令打包：
     ```shell
     yarn build:ssr
     ```

---

## 移动端 (uniapp)

### 首次使用

1. **安装依赖**：
   - 确保 Node 版本为 16+，运行以下命令安装依赖：
     ```shell
     yarn install
     ```

2. **复制环境文件**：
   - 复制以下文件并重命名：
     - 复制 `.env.development.example` 为 `.env.development`。
     - 复制 `.env.production.example` 为 `.env.production`。

3. **配置环境变量**：
   - **`.env.development`**：开发环境。
     ```plaintext
     NODE_ENV = 'development'
     VITE_APP_BASE_URL='输入你的请求域名'
     ```
   - **`.env.production`**：生产环境。
     ```plaintext
     NODE_ENV = 'production'
     VITE_APP_BASE_URL='输入你的请求域名'  // 填空则跟随网站域名
     ```

---

### 在 VSCode 中开发

1. **开发模式**：
   - **运行 H5**：
     ```shell
     yarn dev:h5
     ```
   - **运行小程序**：
     ```shell
     yarn dev:mp-weixin
     ```
     - 运行完成后，打开微信开发者工具，导入 `uniapp/dist/dev/mp-weixin` 目录。

2. **生产模式**：
   - **打包 H5**：
     ```shell
     yarn build:h5
     ```
     - 将打包后的代码上传到服务器或仓库。
   - **打包小程序**：
     ```shell
     yarn build:mp-weixin
     ```
     - 运行完成后，打开微信开发者工具，导入 `uniapp/dist/dev/mp-weixin` 目录并上传代码。

---

### 在 HbuilderX 中开发

1. **运行 uniapp**：
   - 导入项目：点击 `文件` -> `导入` -> `从本地目录导入`，选择 `uniapp` 目录。
   - 安装依赖：点击 `工具` -> `外部命令` -> `npm install`。
   - 运行 H5：点击 `运行` -> `运行到浏览器` -> `Chrome`。
   - 运行小程序：点击 `运行` -> `运行到小程序模拟器` -> `微信开发者工具`。

2. **发行 uniapp**：
   - **发行 H5**：
     - 点击 `发行` -> `网站-PC Web 或手机 H5`，输入标题并打包。
     - 将打包后的代码上传到服务器或仓库。
   - **发行小程序**：
     - 点击 `发行` -> `小程序-微信`，输入小程序名称和 AppID 并打包。
     - 运行完成后，自动打开微信开发者工具并上传代码。

---

## 后台管理 (admin)

### 首次使用

1. **安装依赖**：
   - 确保 Node 版本为 16+，运行以下命令安装依赖：
     ```shell
     yarn install
     ```

2. **复制环境文件**：
   - 复制以下文件并重命名：
     - 复制 `.env.development.example` 为 `.env.development`。
     - 复制 `.env.production.example` 为 `.env.production`。

3. **配置环境变量**：
   - **`.env.development`**：开发环境。
     ```plaintext
     NODE_ENV = 'development'
     VITE_APP_BASE_URL='输入你的请求域名'
     ```
   - **`.env.production`**：生产环境。
     ```plaintext
     NODE_ENV = 'production'
     VITE_APP_BASE_URL='输入你的请求域名'  // 填空则跟随网站域名
     ```

---

### 开发模式

- **运行开发环境**：
  ```shell
  yarn dev
  ```

---

### 生产模式

- **打包生产环境**：
  ```shell
  yarn build
  ```

---

## 注意事项

1. **依赖安装**：
   - 确保 Node 版本为 16+，运行 `yarn install` 安装依赖。
   - 如果安装或运行出错，尝试删除 `yarn.lock` 和 `node_modules` 后重新安装。

2. **持续更新**：
   - 本指南将持续更新，请关注最新版本。

---

## 至此前端开发指南完成

通过以上步骤，您可以顺利完成前端项目的初始化、开发和打包操作。如有其他问题，请参考相关文档或联系技术支持。