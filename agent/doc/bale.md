# Build Desktop

在 `packages/desktop` 目录下执行命令：

```bash
pnpm dev:desktop   # 本地调试
pnpm build:desktop # 打包桌面应用
```

打包前会自动执行 `pnpm run prepare`，根据 `frontendDist` 的配置决定使用远程地址还是本地静态资源。

## 一、打包线上部署地址

如果想让桌面应用打开一个线上网站（例如 `https://你的项目线上部署地址`）：

1. 编辑 `src-tauri/tauri.conf.json`：

```jsonc
{
    "build": {
        "devUrl": "http://localhost:4090",
        "frontendDist": "https://你的项目线上部署地址",
        "beforeDevCommand": "pnpm run prepare",
        "beforeBuildCommand": "pnpm run prepare",
    },
}
```

2. 执行：

```bash
pnpm build:desktop
```

此时 `frontendDist` 是 URL，`prepare-frontend.js` 会**跳过修改**，直接使用远程地址。

## 二、打包本地静态资源

如果想把前端构建产物一起打包进桌面应用：

1. 在主项目根目录先构建 Web（命令按你的前端项目为准）：

```bash
# 示例
pnpm build:web
```

要求最终静态文件输出到：

- 优先：`public/web`
- 如果没有：使用 `public`

2. 保持或设置 `src-tauri/tauri.conf.json` 中的 `frontendDist` 为本地目录路径，例如：

```jsonc
{
    "build": {
        "devUrl": "http://localhost:4090",
        "frontendDist": "../../../public/web",
        "beforeDevCommand": "pnpm run prepare",
        "beforeBuildCommand": "pnpm run prepare",
    },
}
```

3. 执行：

```bash
pnpm build:desktop
```

此时 `frontendDist` 是本地目录，`prepare-frontend.js` 会自动在 `public/web` 和 `public`
之间选择，并写回配置。
