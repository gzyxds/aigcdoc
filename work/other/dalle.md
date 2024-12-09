Dalle绘画配置[​](https://doc.chatmoney.cn/pro/config/dalle.html#dalle%E7%BB%98%E7%94%BB%E9%85%8D%E7%BD%AE)
======================================================================================================

提示

DALLE-3绘画目前使用官方渠道,由于网络原因需先配置API代理域名.  
DALLE-3绘画需设置任务提交队列，请按各自项目部署的方式选择对应的队列配置方式.  
若在宝塔或Linux中使用docker部署项目则按【docker部署】配置.  
若在宝塔中部署项目未使用docker则按【宝塔部署(非Docker)】配置.  

绘画任务队列配置[​](https://doc.chatmoney.cn/pro/config/dalle.html#%E7%BB%98%E7%94%BB%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E9%85%8D%E7%BD%AE)
------------------------------------------------------------------------------------------------------------------------------------

### Docker部署:[​](https://doc.chatmoney.cn/pro/config/dalle.html#docker%E9%83%A8%E7%BD%B2)

*   **步骤1**: 查看项目docker/config/supervisor/supervisor.ini是否存在任务进程配置,若不存在则添加并重启php容器即可.
*   ![](https://doc.chatmoney.cn/docs/images/general/config/dalle/sup_config.png)

    [program:dalle3]
    command=/usr/local/bin/php think queue:listen --timeout 300 --queue ChatMoneyDalleJob
    directory=/server
    autostart=true
    autorestart=true
    stderr_logfile=/var/log/dalle3.err.log
    stdout_logfile=/var/log/dalle3.out.log

### 宝塔部署(非Docker):[​](https://doc.chatmoney.cn/pro/config/dalle.html#%E5%AE%9D%E5%A1%94%E9%83%A8%E7%BD%B2-%E9%9D%9Edocker)

*   **步骤1**: 打开并登录宝塔,单击【软件商店】,安装进程守护管理器.![](https://doc.chatmoney.cn/docs/images/general/config/dalle/install_sup.png)
*   **步骤2**: 添加守护进程.![](https://doc.chatmoney.cn/docs/images/general/config/dalle/add_task.png)
    
    注意事项:
    
    启动命令: php80 think queue:listen --queue ChatMoneyDalleJob --timeout 300  
    如果宝塔中仅安装一个php的情况启动命令中php80需更改为php.  
    添加完守护进程后查看进程状态及日志,若状态异常或日志有报错信息则视实际情况调整.