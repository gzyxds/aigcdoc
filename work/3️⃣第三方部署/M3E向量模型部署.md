# 接入 M3E 向量模型

如果你想私有部署的话，可以使用 M3E 向量模型进行替换。M3E 向量模型属于小模型，资源使用不高，CPU 也可以运行。

## 部署教程

**1、下载Python文件:**  [点击Python文件](https://doc.chatmoney.cn/docs/download/m3e.zip)

```
// 1.解压压缩包:
    得到一个 m3e 的目录

// 2.在终端进入到目录中
    cd m3e
```

**2、下载m3e的模型**: [点击下载m3e-large模型](https://huggingface.co/moka-ai/m3e-large/tree/main)![](https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-down.png)

**3、最终整个目录**![](https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-dir.png)

**4、在终端安装依赖 (进入到m3e目录里)**

```
pip install -r requirements.txt
```

**5、运行项目**

```
python main.py
```

**6、运行起来的效果**![](https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-run.png)

## 接口测试

`注意: 需要传递header头参数:`![](https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-post.png)

```
PS: 注意设置请求头参数(header), 需要你传递1个密钥, 才可以正常访问
如果你没有传递密钥, 请求将会返回(即无权限):
{
    "detail": "Not authenticated"
}


Header传参示例:
    Authorization: Bearer sk-nvO0YlZEIrljq0QXB35b7e4f711d4087Ac215c18De75A407
参数说明:
    Authorization是参数的名称
    Bearer sk-nv... 值 
  
特别说明:
    sk-nvO0YlZEIrljq0QXB35b7e4f711d4087Ac215c18De75A407
    这个密钥是默认的密钥,如果你没有自行修改,默认就传这个值。
    如何修改他呢:
        m3e源码中的main.py, 搜索一直这个值,改成你自己的即可
```

## 接入系统

![](https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-set.png)