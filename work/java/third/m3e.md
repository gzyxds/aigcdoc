# 🧮 接入 M3E 向量模型

如果你想私有部署的话，可以使用 M3E 向量模型进行替换。M3E 向量模型属于小模型，资源使用不高，CPU 也可以运行。

## 🚀 部署教程

### 1️⃣ 下载Python文件
[📥 点击下载Python文件](https://doc.chatmoney.cn/docs/download/m3e.zip)

```bash
# 1. 解压压缩包
#    得到一个 m3e 的目录

# 2. 在终端进入到目录中
cd m3e
```

### 2️⃣ 下载m3e的模型
[📥 点击下载m3e-large模型](https://huggingface.co/moka-ai/m3e-large/tree/main)

![m3e下载](https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-down.png)

### 3️⃣ 最终目录结构
![目录结构](https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-dir.png)

### 4️⃣ 安装依赖
```bash
pip install -r requirements.txt
```

### 5️⃣ 运行项目
```bash
python main.py
```

### 6️⃣ 运行效果
![运行效果](https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-run.png)

## 🔧 接口测试

> ⚠️ 注意: 需要传递header头参数

![postman示例](https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-post.png)

```markdown
### 请求头参数说明

- **Header传参示例:**
  ```
  Authorization: Bearer sk-nvO0YlZEIrljq0QXB35b7e4f711d4087Ac215c18De75A407
  ```

- **参数说明:**
  - `Authorization` 是参数的名称
  - `Bearer sk-nv...` 是值

- **特别说明:**
  - `sk-nvO0YlZEIrljq0QXB35b7e4f711d4087Ac215c18De75A407` 是默认密钥
  - 如需修改，请在 `m3e` 源码中的 `main.py` 文件中搜索并修改该值
```

## 🔗 接入系统
![接入设置](https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-set.png)