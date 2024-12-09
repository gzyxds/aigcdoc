数据库[​](https://doc.chatmoney.cn/chat/develop/database.html#%E6%95%B0%E6%8D%AE%E5%BA%93)
=======================================================================================

cw\_admin(管理员表) 
---------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| root | tinyint | 超管: \[0=否, 1=是\] |
| name | varchar | 管理名称 |
| avatar | varchar | 用户头像 |
| account | varchar | 账号 |
| password | varchar | 密码 |
| login\_time | int | 最后登录时间 |
| login\_ip | varchar | 最后登录的IP |
| multipoint\_login | tinyint | 多处登录: \[1=是, 0=否\] |
| disable | tinyint | 是否禁用: \[0=否, 1=是\] |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_admin\_dept(部门关联表) 
------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| admin\_id | int | 管理ID |
| dept\_id | int | 部门ID |
|   
 |  |  |

cw\_admin\_jobs(岗位关联表) 
------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| admin\_id | int | 管理ID |
| jobs\_id | int | 岗位ID |
|   
 |  |  |

cw\_admin\_role(角色关联表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-admin-role-%E8%A7%92%E8%89%B2%E5%85%B3%E8%81%94%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| admin\_id | int | 管理ID |
| role\_id | int | 角色ID |
|   
 |  |  |

cw\_admin\_session(管理会话表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-admin-session-%E7%AE%A1%E7%90%86%E4%BC%9A%E8%AF%9D%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| admin\_id | int | 用户ID |
| terminal | tinyint | 平台类型: 1=PC管理后台, 2=Mobile手机管理后台 |
| token | varchar | 令牌的值 |
| expire\_time | int | 到期时间 |
| update\_time | int | 更新时间 |
|   
 |  |  |

cw\_article(文章内容表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-article-%E6%96%87%E7%AB%A0%E5%86%85%E5%AE%B9%E8%A1%A8)
-----------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 文章id |
| cid | int | 文章分类 |
| title | varchar | 文章标题 |
| desc | varchar | 文章简介 |
| abstract | text | 文章摘要 |
| image | varchar | 文章图片 |
| author | varchar | 文章作者 |
| content | text | 文章内容 |
| click\_virtual | int | 虚拟浏览量 |
| click\_actual | int | 实际浏览量 |
| is\_show | tinyint | 是否显示: \[1=是, 0=否\] |
| sort | int | 排序编号 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_article\_cate(文章分类表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-article-cate-%E6%96%87%E7%AB%A0%E5%88%86%E7%B1%BB%E8%A1%A8)
----------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 文章分类id |
| name | varchar | 分类名称 |
| sort | int | 排序 |
| is\_show | tinyint | 是否显示:1-是;0-否 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_article\_collect(文章收藏表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-article-collect-%E6%96%87%E7%AB%A0%E6%94%B6%E8%97%8F%E8%A1%A8)
----------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | int | 用户ID |
| article\_id | int | 文章ID |
| status | tinyint | 收藏状态 0-未收藏 1-已收藏 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_background(背景图)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-background-%E8%83%8C%E6%99%AF%E5%9B%BE)
---------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| url | varchar | 图片 |
| type | int | 版型类型：1-竖版；2-横版 |
| category\_id | int | 分类id |
| sort | int | 排序 |
| status | tinyint | 状态:1-开启,0-关闭 |
| media\_id | varchar | 媒体id |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_background\_category(背景图分类)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-background-category-%E8%83%8C%E6%99%AF%E5%9B%BE%E5%88%86%E7%B1%BB)
------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| name | varchar | 分类名称 |
| sort | int | 排序 |
| status | tinyint | 状态:1-开启,0-关闭 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_chat\_category(示例分类表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-chat-category-%E7%A4%BA%E4%BE%8B%E5%88%86%E7%B1%BB%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| name | varchar | 类目名称 |
| sort | int | 排序 |
| status | int | 状态: \[1=开启, 0=关闭\] |
| image | varchar | 图标 |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_chat\_record(对话记录表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-chat-record-%E5%AF%B9%E8%AF%9D%E8%AE%B0%E5%BD%95%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| user\_id | int | 用户ID |
| category\_id | int | 记录分类 |
| other\_id | int | 创作的ID |
| ask | text | 提问 |
| reply | text | 回复 |
| channel | varchar | 模型渠道 |
| model | varchar | 对话模型 |
| tokens | decimal | 消耗金额 |
| type | int | 记录类型: \[1=对话, 2=创作,3-角色\] |
| is\_show | tinyint | 是否显示: \[1=是的, 0=否的\] |
| censor\_status | tinyint | 审核状态: \[0=未审核, 1=合规, 2=不合规, 3=疑似, 4=审核失败\] |
| censor\_result | text | 审核结果 |
| censor\_num | int | 审核次数 |
| extra | text | 预留字段 |
| flows | text | tokens信息 |
| reply\_type | tinyint | 回复类型：1-模型回复；2-默认回复 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_chat\_record\_category(对话分类表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-chat-record-category-%E5%AF%B9%E8%AF%9D%E5%88%86%E7%B1%BB%E8%A1%A8)
---------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| user\_id | int | 用户id |
| name | varchar | 对话分类名称 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_chat\_record\_collect(对话收藏表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-chat-record-collect-%E5%AF%B9%E8%AF%9D%E6%94%B6%E8%97%8F%E8%A1%A8)
-------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| user\_id | int | 用户ID |
| records\_id | int | 对话记录ID |
| create\_time | int | 创建时间 |
|   
 |  |  |

cw\_chat\_sample(对话示例表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-chat-sample-%E5%AF%B9%E8%AF%9D%E7%A4%BA%E4%BE%8B%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| category\_id | int | 类目id |
| sort | int | 排序 |
| content | varchar | 内容 |
| status | tinyint | 状态: \[1=是, 0=否\] |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_config(全局配置表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-config-%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE%E8%A1%A8)
---------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| type | varchar | 类型 |
| name | varchar | 名称 |
| value | text | 值 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
|   
 |  |  |

cw\_creation\_category(创作类别表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-creation-category-%E5%88%9B%E4%BD%9C%E7%B1%BB%E5%88%AB%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| image | varchar | 分类图标 |
| name | varchar | 类目名称 |
| sort | int | 排序编号 |
| status | int | 启用状态: \[1=开启, 0=关闭\] |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_creation\_model(创作模型表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-creation-model-%E5%88%9B%E4%BD%9C%E6%A8%A1%E5%9E%8B%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| name | varchar | 名称 |
| image | varchar | 图标 |
| sort | int | 排序 |
| category\_id | int | 类别 |
| status | int | 状态：1-开启，0-关闭 |
| content | text | 主题内容 |
| tips | text | 提示文字 |
| context\_num | int | 上下文总数 |
| n | int | 最大回复 |
| top\_p | decimal | 随机属性 |
| presence\_penalty | decimal | 话题属性 |
| frequency\_penalty | decimal | 重复属性 |
| temperature | decimal | 词汇属性 |
| max\_tokens | int | 最大回复 |
| form | text | 表单数据 |
| virtual\_use\_num | int | 虚拟使用 |
| system | varchar | 全局指令 |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_creation\_model\_collect(创作收藏表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-creation-model-collect-%E5%88%9B%E4%BD%9C%E6%94%B6%E8%97%8F%E8%A1%A8)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| creation\_id | int | 创作ID |
| user\_id | int | 用户ID |
| create\_time | int | 创建时间 |
|   
 |  |  |

cw\_decals(贴纸)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-decals-%E8%B4%B4%E7%BA%B8)
---------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| url | varchar | 图片 |
| category\_id | int | 分类id |
| sort | int | 排序 |
| status | tinyint | 状态:1-开启,0-关闭 |
| media\_id | varchar | 媒体id |
| type | tinyint | 类型：1-图片；2-动图 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
| source | tinyint | 类型：1-阿里官方；2-后台上传 |
|   
 |  |  |

cw\_decals\_category(贴纸分类)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-decals-category-%E8%B4%B4%E7%BA%B8%E5%88%86%E7%B1%BB)
------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| name | varchar | 分类名称 |
| sort | int | 排序 |
| status | tinyint | 状态:1-开启,0-关闭 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_decorate\_nav()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-decorate-nav)
-------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| name | varchar | 导航名称 |
| icon | varchar | 导航图标 |
| link | varchar | 链接地址 |
| is\_show | tinyint | 是否显示 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
|   
 |  |  |

cw\_decorate\_page(装修页面表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-decorate-page-%E8%A3%85%E4%BF%AE%E9%A1%B5%E9%9D%A2%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| type | tinyint | 页面类型: \[1=首页装修, 2=悬浮菜单\] |
| name | varchar | 页面名称 |
| data | text | 页面数据 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
|   
 |  |  |

cw\_decorate\_tabbar()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-decorate-tabbar)
-------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| name | varchar | 导航名称 |
| selected | varchar | 未选图标 |
| unselected | varchar | 已选图标 |
| link | varchar | 链接地址 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
|   
 |  |  |

cw\_dept(部门管理表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-dept-%E9%83%A8%E9%97%A8%E7%AE%A1%E7%90%86%E8%A1%A8)
-----------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | id |
| name | varchar | 部门名称 |
| pid | bigint | 上级部门 |
| sort | int | 排序 |
| leader | varchar | 负责人 |
| mobile | varchar | 联系电话 |
| status | tinyint | 部门状态: \[0=停用, 1=正常\] |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_dev\_crontab(计划任务表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-dev-crontab-%E8%AE%A1%E5%88%92%E4%BB%BB%E5%8A%A1%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| name | varchar | 定时任务名称 |
| type | tinyint | 类型 1-定时任务 |
| system | tinyint | 是否系统任务 0-否 1-是 |
| remark | varchar | 备注 |
| command | varchar | 命令内容 |
| params | varchar | 参数 |
| status | tinyint | 状态 1-运行 2-停止 3-错误 |
| expression | varchar | 运行规则 |
| error | varchar | 运行失败原因 |
| last\_time | int | 最后执行时间 |
| time | varchar | 实时执行时长 |
| max\_time | varchar | 最大执行时长 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_dev\_pay\_config(支付方式表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-dev-pay-config-%E6%94%AF%E4%BB%98%E6%96%B9%E5%BC%8F%E8%A1%A8)
---------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| name | varchar | 模版名称 |
| pay\_way | tinyint | 支付方式: \[1=余额支付, 2=微信支付, 3=支付宝支付\] |
| config | text | 支付配置 |
| icon | varchar | 图标 |
| remark | varchar | 备注 |
| sort | int | 排序 |
|   
 |  |  |

cw\_dev\_pay\_way(支付配置表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-dev-pay-way-%E6%94%AF%E4%BB%98%E9%85%8D%E7%BD%AE%E8%A1%A8)
---------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| pay\_config\_id | int | 支付配置ID |
| scene | tinyint | 支付场景: \[1=微信小程序, 2=微信公众号, 3=H5, 4=PC, 5=APP\] |
| is\_default | tinyint | 默认支付: \[0=否, 1=是\] |
| status | tinyint | 配置状态: \[0=关闭, 1=开启\] |
|   
 |  |  |

cw\_dict\_data(字典数据表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-dict-data-%E5%AD%97%E5%85%B8%E6%95%B0%E6%8D%AE%E8%A1%A8)
----------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | id |
| name | varchar | 数据名称 |
| value | varchar | 数据值 |
| type\_id | int | 字典类型id |
| type\_value | varchar | 字典类型 |
| sort | int | 排序值 |
| status | tinyint | 状态 0-停用 1-正常 |
| remark | varchar | 备注 |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_dict\_type(字典类型表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-dict-type-%E5%AD%97%E5%85%B8%E7%B1%BB%E5%9E%8B%E8%A1%A8)
----------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | id |
| name | varchar | 字典名称 |
| type | varchar | 字典类型名称 |
| status | tinyint | 状态 0-停用 1-正常 |
| remark | varchar | 备注 |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_email\_log(邮件记录表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-email-log-%E9%82%AE%E4%BB%B6%E8%AE%B0%E5%BD%95%E8%A1%A8)
----------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | ID |
| scene\_id | int | 场景ID |
| email | varchar | 邮箱 |
| content | varchar | 发送内容 |
| code | varchar | 验证码 |
| is\_verify | tinyint | 是否已验证: \[0=否, 1=是\] |
| check\_num | int | 验证次数 |
| send\_status | tinyint | 发送状态: \[0=发送中, 1=发送成功, 2=发送失败\] |
| send\_time | int | 发送时间 |
| results | text | 发送结果 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_file(文件管理表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-file-%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86%E8%A1%A8)
-----------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键ID |
| cid | int | 类目ID |
| source\_id | int | 上传者ID |
| source | tinyint | 来源类型: \[0=后台, 1=用户\] |
| type | tinyint | 文件类型: \[10=图片, 20=视频\] |
| name | varchar | 文件名称 |
| uri | varchar | 文件路径 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_file\_cate(文件分类表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-file-cate-%E6%96%87%E4%BB%B6%E5%88%86%E7%B1%BB%E8%A1%A8)
----------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键ID |
| pid | int | 父级ID |
| type | tinyint | 类型: \[10=图片，20=视频，30=文件\] |
| name | varchar | 分类名称 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_generate\_column(生成字段表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-generate-column-%E7%94%9F%E6%88%90%E5%AD%97%E6%AE%B5%E8%A1%A8)
----------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | id |
| table\_id | int | 表id |
| column\_name | varchar | 字段名称 |
| column\_comment | varchar | 字段描述 |
| column\_type | varchar | 字段类型 |
| is\_required | tinyint | 是否必填 0-非必填 1-必填 |
| is\_pk | tinyint | 是否为主键 0-不是 1-是 |
| is\_insert | tinyint | 是否为插入字段 0-不是 1-是 |
| is\_update | tinyint | 是否为更新字段 0-不是 1-是 |
| is\_lists | tinyint | 是否为列表字段 0-不是 1-是 |
| is\_query | tinyint | 是否为查询字段 0-不是 1-是 |
| query\_type | varchar | 查询类型 |
| view\_type | varchar | 显示类型 |
| dict\_type | varchar | 字典类型 |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
|   
 |  |  |

cw\_generate\_table(生成信息表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-generate-table-%E7%94%9F%E6%88%90%E4%BF%A1%E6%81%AF%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | id |
| table\_name | varchar | 表名称 |
| table\_comment | varchar | 表描述 |
| template\_type | tinyint | 模板类型 0-单表(curd) 1-树表(curd) |
| author | varchar | 作者 |
| remark | varchar | 备注 |
| generate\_type | tinyint | 生成方式 0-压缩包下载 1-生成到模块 |
| module\_name | varchar | 模块名 |
| class\_dir | varchar | 类目录名 |
| class\_comment | varchar | 类描述 |
| admin\_id | int | 管理员id |
| menu | text | 菜单配置 |
| delete | text | 删除配置 |
| tree | text | 树表配置 |
| relations | text | 关联配置 |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
|   
 |  |  |

cw\_hot\_search()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-hot-search)
---------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| name | varchar | 关键词 |
| sort | smallint | 排序号 |
| create\_time | int | 创建时间 |
|   
 |  |  |

cw\_index\_visit()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-index-visit)
-----------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| ip | varchar | 访客ip地址 |
| terminal | tinyint | 访问终端 |
| visit | int | 浏览量 |
| create\_time | int | 访问时间 |
| update\_time | int |  |
| delete\_time | int |  |
|   
 |  |  |

cw\_jobs(岗位管理表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-jobs-%E5%B2%97%E4%BD%8D%E7%AE%A1%E7%90%86%E8%A1%A8)
-----------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | id |
| name | varchar | 岗位名称 |
| code | varchar | 岗位编码 |
| sort | int | 显示顺序 |
| status | tinyint | 状态（0停用 1正常） |
| remark | varchar | 备注 |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_digital(数字人管理表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-digital-%E6%95%B0%E5%AD%97%E4%BA%BA%E7%AE%A1%E7%90%86%E8%A1%A8)
----------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | int | 用户ID |
| name | varchar | 数字人名称 |
| avatar | varchar | 数字人头像 |
| image | varchar | 数字人封面 |
| wide\_stay\_video | varchar | 宽屏人物待机视频 |
| wide\_talk\_video | varchar | 宽屏人物说话视频 |
| vertical\_stay\_video | varchar | 竖屏人物待机视频 |
| vertical\_talk\_video | varchar | 竖屏人物说话视频 |
| channel | varchar | 配音渠道 |
| dubbing | varchar | 配音角色 |
| idle\_time | int | 闲时时间 |
| idle\_reply | text | 闲时回复 |
| is\_disable | tinyint | 是否禁用: \[0=否, 1=是\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_know(知识库管理表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-know-%E7%9F%A5%E8%AF%86%E5%BA%93%E7%AE%A1%E7%90%86%E8%A1%A8)
----------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | tinyint | 用户ID |
| create\_uid | int | 创建者ID |
| image | varchar | 知识库封面 |
| name | varchar | 知识库名称 |
| intro | varchar | 知识库简介 |
| documents\_model | varchar | 处理模型 |
| embedding\_model | varchar | 训练模型 |
| is\_enable | tinyint | 是否启用: \[0=否, 1=是\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_know\_files(知识库文件表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-know-files-%E7%9F%A5%E8%AF%86%E5%BA%93%E6%96%87%E4%BB%B6%E8%A1%A8)
-----------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| op\_uid | int | 操作用户ID |
| user\_id | int | 所属用户ID |
| know\_id | int | 知识库ID |
| name | varchar | 文件名称 |
| file | varchar | 文件路径 |
| is\_qa | tinyint | QA拆分: \[0=否, 1=待拆分, 2=拆分完成\] |
| is\_default | tinyint | 默认固定: \[0=否, 1=是\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_know\_qa(知识库QA表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-know-qa-%E7%9F%A5%E8%AF%86%E5%BA%93qa%E8%A1%A8)
-------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | int | 用户的ID |
| kb\_id | int | 知识库ID |
| fd\_id | int | 文件的ID |
| name | varchar | 文件名称 |
| content | text | 文本内容 |
| results | text | 拆分结果 |
| usage | text | tokens信息 |
| tokens | int | 消耗的tokens |
| model | varchar | 拆分的模型 |
| status | tinyint | 拆分状态: \[0=等待拆分, 1=拆分中, 2=拆分成功, 3=拆分失败\] |
| error | text | 错误信息 |
| task\_time | int | 任务耗时 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_know\_shared(知识库共享表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-know-shared-%E7%9F%A5%E8%AF%86%E5%BA%93%E5%85%B1%E4%BA%AB%E8%A1%A8)
-------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| kb\_id | int | 知识库ID |
| user\_id | int | 用户的ID |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_robot(机器人管理表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-robot-%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%AE%A1%E7%90%86%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | int | 用户ID |
| cate\_id | int | 类目ID |
| code | varchar | 机器人编号 |
| kb\_ids | varchar | 关联知识库 |
| icons | varchar | 对话的图标 |
| image | varchar | 机器人封面 |
| name | varchar | 机器人名称 |
| intro | varchar | 机器人简介 |
| sort | int | 排序的编号 |
| model | varchar | AI模型 |
| roles\_prompt | text | 角色设定词 |
| limit\_prompt | text | 系统限定词 |
| search\_similarity | float | 搜索相似度 |
| search\_limits | smallint | 搜索单词数 |
| search\_empty\_type | tinyint | 搜索空类型: \[1=GPT回复, 2=固定回复\] |
| search\_empty\_text | text | 搜索空文本 |
| welcome\_introducer | text | 欢迎引导词 |
| copyright | text | 底部的版权 |
| share\_bg | varchar | 分享背景图 |
| digital\_bg | varchar | 数字人背景 |
| digital\_id | tinyint | 数字人绑定 |
| is\_digital | tinyint | 数字人启用: \[0=否, 1=是\] |
| is\_show\_context | tinyint | 显示上下文: \[0=否, 1=是\] |
| is\_show\_quote | tinyint | 显示引用词: \[0=否, 1=是\] |
| is\_public | tinyint | 是否公开它: \[0=否, 1=是\] |
| is\_enable | tinyint | 是否可使用: \[0=否, 1=是\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_robot\_category(机器人分类表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-robot-category-%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%88%86%E7%B1%BB%E8%A1%A8)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | ID |
| name | varchar | 名称 |
| image | varchar | 图标 |
| sort | int | 排序 |
| is\_enable | tinyint | 是否启用: \[0=否, 1=是\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_robot\_instruct(机器人指令表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-robot-instruct-%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8C%87%E4%BB%A4%E8%A1%A8)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | int | 用户的ID |
| robot\_id | int | 机器人ID |
| keyword | varchar | 关键词 |
| content | text | 回复内容 |
| images | text | 上传图片 |
| sort | int | 排序编号 |
|   
 |  |  |

cw\_kb\_robot\_publish(机器人发布表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-robot-publish-%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8F%91%E5%B8%83%E8%A1%A8)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| type | tinyint | 类型: \[1=网页, 2=公众号, 3=JS嵌入, 4=API调用\] |
| chat\_type | tinyint | 对话方式: \[1=文本, 2=数字人\] |
| user\_id | int | 用户的ID |
| robot\_id | int | 机器人ID |
| name | varchar | 分享名称 |
| apikey | varchar | 渠道编号 |
| secret | varchar | 访问密钥 |
| context\_num | tinyint | 上下文数 |
| limit\_total\_chat | int | 用户总的限制对话 |
| limit\_today\_chat | int | 用户每天限制对话 |
| limit\_exceed | varchar | 超出限制默认回复 |
| use\_count | int | 调用次数 |
| use\_time | int | 使用时间 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_robot\_record(机器人对话表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-robot-record-%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AF%B9%E8%AF%9D%E8%A1%A8)
---------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键ID |
| user\_id | int | 用户的ID |
| robot\_id | int | 机器人ID |
| category\_id | int | 分类的ID |
| square\_id | int | 广场的ID |
| ask | text | 提问 |
| reply | text | 答复 |
| images | text | 附带图片 |
| video | text | 附带视频 |
| files | text | 附带文件 |
| quotes | text | 引用内容 |
| context | text | 上下文组 |
| flows | text | tokens信息 |
| model | varchar | 对话模型 |
| tokens | decimal | 消耗金额 |
| share\_id | int | 分享的ID |
| share\_apikey | varchar | 分享的密钥 |
| share\_identity | varchar | 分享的身份 |
| censor\_status | tinyint | 审核状态: \[0=未审核, 1=合规, 2=不合规, 3=疑似, 4=审核失败\] |
| censor\_result | text | 审核结果 |
| censor\_num | int | 审核次数 |
| is\_show | tinyint | 是否显示: \[0=否, 1=是\] |
| task\_time | int | 对话耗时 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_robot\_session(机器人会话表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-robot-session-%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BC%9A%E8%AF%9D%E8%A1%A8)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| square\_id | int | 广场ID |
| user\_id | int | 用户ID |
| robot\_id | int | 机器人ID |
| name | varchar | 分类名称 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_robot\_square(机器人广场表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-robot-square-%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B9%BF%E5%9C%BA%E8%A1%A8)
---------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | int | 用户ID |
| robot\_id | int | 机器人ID |
| cate\_id | int | 分类ID |
| sort | int | 排序编号 |
| is\_show | tinyint | 是否显示: \[0=否， 1=是\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_kb\_robot\_visitor(机器人访问表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-kb-robot-visitor-%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AE%BF%E9%97%AE%E8%A1%A8)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | ID |
| ip | varchar | 访客IP |
| robot\_id | int | 机器人ID |
| terminal | tinyint | 访问终端 |
| visit | int | 浏览量 |
| create\_time | int | 访问时间 |
| update\_time | int |  |
|   
 |  |  |

cw\_key\_down\_rule(key自动下架规则)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-key-down-rule-key%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%9E%B6%E8%A7%84%E5%88%99)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| type | tinyint | 规则类型：1-对话 |
| ai\_key | varchar | 接口类型 |
| rule | varchar | 停用规则 |
| prompt | varchar | 停用提示 |
| status | tinyint | 状态：1-开启,0-关闭 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_key\_pool(密钥池子表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-key-pool-%E5%AF%86%E9%92%A5%E6%B1%A0%E5%AD%90%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | id |
| type | tinyint | 类型: \[1=对话\] |
| channel | varchar | 渠道: \[gpt3.5,gpt4.0,zhipu,baidu\] |
| key | varchar | 密钥 |
| appid | varchar | appId |
| secret | varchar | secret |
| api | varchar | 错误接口 |
| notice | text | 错误通知 |
| status | tinyint | 密钥状态 |
| remark | varchar | 备注 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_key\_rule(密钥规则表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-key-rule-%E5%AF%86%E9%92%A5%E8%A7%84%E5%88%99%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| type | tinyint | 规则类型: \[1=对话\] |
| channel | varchar | 接口类型 |
| rule | varchar | 停用规则 |
| prompt | varchar | 停用提示 |
| status | tinyint | 状态：1-开启,0-关闭 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_knowledge()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-knowledge)
------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | int | 用户ID |
| admin\_id | int | 后台ID |
| name | varchar | 名称 |
| image | varchar | 图标 |
| sort | smallint | 排序 |
| type | tinyint | 集合类型: \[1=问答型, 2=检索型\] |
| is\_enable | tinyint | 是否启用: \[0=否, 1=是\] |
| create\_type | tinyint | 创建类型: \[1=后台, 2=前台\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_know\_apply()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-know-apply)
---------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | int | 用户ID |
| admin\_id | int | 管理员ID |
| code | varchar | 应用编号 |
| kb\_ids | varchar | 知识库ID |
| category\_id | int | 分类ID |
| image | varchar | 应用封面 |
| name | varchar | 应用名称 |
| intro | varchar | 应用简介 |
| sort | smallint | 排序编号 |
| welcome | text | 欢迎语 |
| example | text | 示例值 |
| systemPrompt | text | 提示词 |
| limitPrompt | text | 限定词 |
| searchEmptyText | text | 空搜索回复 |
| searchSimilarity | decimal | 相似度 |
| searchLimit | smallint | 单次搜索数量 |
| artificial\_content | text | 人工客服内容 |
| chat\_icon | varchar | 对话图标 |
| auth\_type | tinyint | 使用权限: 0=所有用户, 1=指定分组 |
| create\_type | tinyint | 创建类型: 1=后台创建, 2=前台创建 |
| null\_reply\_type | tinyint | 空回复类型: \[1=默认回复, 2=AI回复\] |
| is\_show\_context | tinyint | 显示上下文: \[0=否, 1=是\] |
| is\_show\_quote | tinyint | 显示引用: \[0=否, 1=是\] |
| is\_artificial | tinyint | 人工客服: \[0=否, 1=是\] |
| is\_enable | tinyint | 是否启用: \[0=否, 1=是\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_know\_apply\_auth()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-know-apply-auth)
--------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| apply\_id | int | 应用ID |
| group\_id | int | 分组ID |
|   
 |  |  |

cw\_know\_apply\_category()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-know-apply-category)
----------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| name | varchar | 分类名称 |
| sort | smallint | 排序编号 |
| is\_enable | tinyint | 是否启用: \[0=否, 1=是\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_know\_apply\_collect()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-know-apply-collect)
--------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | int | 用户ID |
| apply\_id | int | 应用ID |
| create\_time | int | 创建时间 |
|   
 |  |  |

cw\_know\_qa()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-know-qa)
---------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| name | varchar | 文件名称 |
| content | text | 文本内容 |
| status | tinyint | 拆分状态: \[0=等待拆分, 1=拆分中, 2=拆分成功, 3=拆分失败\] |
| error | text | 错误信息 |
| save\_bk\_ids | varchar | 知识库ID |
| handle\_id | int | 处理人ID |
| handle\_type | tinyint | 处理类型: \[1=后台, 2=用户\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_know\_qa\_data()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-know-qa-data)
--------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| qa\_id | int | 拆分ID |
| question | text | 问题 |
| answer | text | 回复 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_know\_record()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-know-record)
-----------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| wind\_id | int | 窗口ID |
| user\_id | int | 用户ID |
| apply\_id | int | 应用ID |
| ask | text | 提问 |
| reply | text | 答复 |
| context | text | 上下文 |
| quotes | text | 引用值 |
| images | text | 附带图片 |
| files | text | 附带文件 |
| model | varchar | 模型 |
| identity | varchar | 临时身份 |
| channel\_sn | varchar | 渠道编号 |
| channel\_type | tinyint | 访问渠道: \[0=前台, 1=网页, 2=API\] |
| censor\_status | tinyint | 审核状态: \[0=未审核, 1=合规, 2=不合规, 3=疑似, 4=审核失败\] |
| censor\_num | smallint | 审核次数 |
| censor\_result | text | 审核结果 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_know\_release()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-know-release)
-------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| type | int | 类型: \[1=web, 2=api\] |
| user\_id | int | 用户ID |
| apply\_id | int | 应用ID |
| apply\_sn | varchar | 应用编号 |
| channel\_sn | varchar | 渠道编号 |
| name | varchar | 分享名称 |
| secret | varchar | 访问密钥 |
| context\_num | tinyint | 上下文数 |
| limit\_total\_chat | int | 限制每个用户累计总对话数 |
| limit\_today\_chat | int | 限制每个用户每天总对话数 |
| limit\_exceed | varchar | 限制超出的默认回复 |
| use\_time | int | 使用时间 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_know\_window()[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-know-window)
-----------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | int | 用户ID |
| apply\_id | int | 应用ID |
| name | varchar | 窗口名称 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_material\_upload\_log(素材上传记录)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-material-upload-log-%E7%B4%A0%E6%9D%90%E4%B8%8A%E4%BC%A0%E8%AE%B0%E5%BD%95)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| relation\_id | int | 关联表id |
| type | int | 类型：1-音乐；2-背景图；3-前景图；4-贴纸 |
| media\_id | varchar | 阿里媒体id |
| result | text | 上传结果 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_models\_cost(模型计费表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-models-cost-%E6%A8%A1%E5%9E%8B%E8%AE%A1%E8%B4%B9%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| type | tinyint | 模型类型: \[1=对话模型, 2=向量模型\] |
| channel | varchar | 模型渠道 |
| name | varchar | 模型名称 |
| alias | varchar | 模型别名 |
| price | decimal | 消费价格 |
| status | tinyint | 是否启用: \[0=否, 1=是\] |
| create\_time | int | 创建时间 |
|   
 |  |  |

cw\_music(音乐)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-music-%E9%9F%B3%E4%B9%90)
-------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| category\_id | int | 分类id |
| cover | varchar | 封面 |
| url | varchar | 音乐分类 |
| name | varchar | 名称 |
| sort | int | 排序 |
| status | tinyint | 状态:1-开启,0-关闭 |
| media\_id | varchar | 媒体id |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_music\_category(音乐分类)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-music-category-%E9%9F%B3%E4%B9%90%E5%88%86%E7%B1%BB)
----------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| name | varchar | 分类名称 |
| sort | int | 排序 |
| status | tinyint | 状态:1-开启,0-关闭 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_notice\_record(通知记录表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-notice-record-%E9%80%9A%E7%9F%A5%E8%AE%B0%E5%BD%95%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | ID |
| user\_id | int | 用户id |
| title | varchar | 标题 |
| content | text | 内容 |
| scene\_id | int | 场景 |
| read | tinyint | 已读状态;0-未读,1-已读 |
| recipient | tinyint | 通知接收对象类型;1-会员;2-商家;3-平台;4-游客(未注册用户) |
| send\_type | tinyint | 通知发送类型 1-系统通知 2-短信通知 3-微信模板 4-微信小程序 |
| notice\_type | tinyint | 通知类型 1-业务通知 2-验证码 |
| extra | varchar | 其他 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_notice\_setting(通知设置表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-notice-setting-%E9%80%9A%E7%9F%A5%E8%AE%BE%E7%BD%AE%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| scene\_id | int | 场景id |
| scene\_name | varchar | 场景名称 |
| scene\_desc | varchar | 场景描述 |
| recipient | tinyint | 接收者: \[1=用户, 2=平台\] |
| type | tinyint | 通知类型: 1-业务通知 2-验证码 |
| system\_notice | text | 系统通知设置 |
| sms\_notice | text | 短信通知设置 |
| oa\_notice | text | 公众号通知设置 |
| mnp\_notice | text | 小程序通知设置 |
| email\_notice | text | 邮件通通知设置 |
| support | char | 支持的发送类型 1-系统通知 2-短信通知 3-微信模板消息 4-小程序提醒 |
| update\_time | int | 更新时间 |
|   
 |  |  |

cw\_official\_account\_reply(公众号回复)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-official-account-reply-%E5%85%AC%E4%BC%97%E5%8F%B7%E5%9B%9E%E5%A4%8D)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| name | varchar | 规则名称 |
| keyword | varchar | 关键词 |
| reply\_type | tinyint | 回复类型 1-关注回复 2-关键字回复 3-默认回复 |
| matching\_type | tinyint | 匹配方式：1-全匹配；2-模糊匹配 |
| content\_type | tinyint | 内容类型：1-文本 |
| content | text | 回复内容 |
| status | tinyint | 启动状态：1-启动；0-关闭 |
| sort | int | 排序 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_operation\_log(系统日志表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-operation-log-%E7%B3%BB%E7%BB%9F%E6%97%A5%E5%BF%97%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| admin\_id | int | 管理员ID |
| admin\_name | varchar | 管理员名称 |
| account | varchar | 管理员账号 |
| action | varchar | 操作名称 |
| type | varchar | 请求方式 |
| url | varchar | 访问链接 |
| params | text | 请求数据 |
| result | text | 请求结果 |
| ip | varchar | ip地址 |
| create\_time | int | 创建时间 |
|   
 |  |  |

cw\_preposition(前置图)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-preposition-%E5%89%8D%E7%BD%AE%E5%9B%BE)
-----------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| url | varchar | 前置图 |
| sort | int | 排序 |
| status | tinyint | 状态:1-开启,0-关闭 |
| media\_id | varchar | 媒体id |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_recharge\_order(充值订单表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-recharge-order-%E5%85%85%E5%80%BC%E8%AE%A2%E5%8D%95%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | ID |
| order\_sn | varchar | 订单编号 |
| user\_id | int | 用户ID |
| package\_id | int | 套餐ID |
| pay\_sn | varchar | 支付编号-冗余字段，针对微信同一主体不同客户端支付需用不同订单号预留。 |
| pay\_way | tinyint | 支付方式: \[2=微信支付, 3=支付宝支付\] |
| pay\_status | tinyint | 支付状态: \[0=待支付, 1=已支付\] |
| refund\_status | tinyint | 退款状态: \[0=未退款, 1=已退款\] |
| order\_amount | decimal | 订单金额 |
| order\_terminal | tinyint | 终端平台 |
| transaction\_id | varchar | 第三方平台交易流水号 |
| chat\_balance | int | 充值的对话数量 |
| robot\_number | int | 充值的机器人数量 |
| video\_duration | int | 充值的视频合成时长 |
| snapshot | text | 订单快照 |
| pay\_time | int | 支付时间 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_recharge\_package(充值套餐表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-recharge-package-%E5%85%85%E5%80%BC%E5%A5%97%E9%A4%90%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| name | varchar | 套餐名称 |
| remarks | varchar | 套餐描述 |
| tags | varchar | 套餐标签 |
| sell\_price | decimal | 销售价格 |
| line\_price | decimal | 划线价格 |
| chat\_balance | int | 对话的余额 |
| robot\_number | int | 机器人数量 |
| video\_duration | int | 视频合成时长 |
| give\_chat\_balance | int | 赠送问答的数量 |
| give\_robot\_number | int | 赠送机器人数量 |
| give\_video\_duration | int | 赠送视频合成时长 |
| sort | int | 排序编号 |
| status | tinyint | 套餐状态: \[0=关闭, 1=开启\] |
| is\_give | tinyint | 赠送状态: \[0=关闭, 1=开启\] |
| is\_recommend | tinyint | 是否推荐: \[0=否, 1=是\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_refund\_log(退款日志表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-refund-log-%E9%80%80%E6%AC%BE%E6%97%A5%E5%BF%97%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | id |
| sn | varchar | 编号 |
| record\_id | int | 退款记录id |
| user\_id | int | 关联用户 |
| handle\_id | int | 处理人id（管理员id） |
| order\_amount | decimal | 订单总的应付款金额，冗余字段 |
| refund\_amount | decimal | 本次退款金额 |
| refund\_status | tinyint | 退款状态，0退款中，1退款成功，2退款失败 |
| refund\_msg | text | 退款信息 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
|   
 |  |  |

cw\_refund\_record(退款记录表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-refund-record-%E9%80%80%E6%AC%BE%E8%AE%B0%E5%BD%95%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | id |
| sn | varchar | 退款编号 |
| user\_id | int | 关联用户 |
| order\_id | int | 来源订单id |
| order\_sn | varchar | 来源单号 |
| order\_type | varchar | 订单来源 order-商品订单 recharge-充值订单 |
| order\_amount | decimal | 订单总的应付款金额，冗余字段 |
| refund\_amount | decimal | 本次退款金额 |
| transaction\_id | varchar | 第三方平台交易流水号 |
| refund\_way | tinyint | 退款方式 1-线上退款 2-线下退款 |
| refund\_type | tinyint | 退款类型 1-后台退款 |
| refund\_status | tinyint | 退款状态，0退款中，1退款成功，2退款失败 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
|   
 |  |  |

cw\_sensitive\_word(敏感词汇表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-sensitive-word-%E6%95%8F%E6%84%9F%E8%AF%8D%E6%B1%87%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| word | varchar | 敏感词 |
| status | tinyint | 状态值: \[1=开启, 0=关闭\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_skill(技能)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-skill-%E6%8A%80%E8%83%BD)
-------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| name | varchar | 名称 |
| image | varchar | 图标 |
| sort | int | 排序 |
| category\_id | int | 类别id |
| status | int | 状态：1-开启，0-关闭 |
| content | text | 主题内容 |
| tips | varchar | 提示内容 |
| describe | varchar | 描述 |
| max\_tokens | int | 回复最大长度 |
| temperature | decimal | 词汇属性 |
| context\_num | int | 上下文总数 |
| top\_p | decimal | 随机属性 |
| presence\_penalty | decimal | 话题属性 |
| frequency\_penalty | decimal | 重复属性 |
| n | int | 最大回复 |
| system | varchar | 全局指令 |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_skill\_category(技能类别)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-skill-category-%E6%8A%80%E8%83%BD%E7%B1%BB%E5%88%AB)
----------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| name | varchar | 类目名称 |
| sort | int | 排序 |
| status | int | 状态：1-开启，0-关闭 |
| create\_time | int | 创建时间 |
| update\_time | int | 修改时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_sms\_log(短信记录表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-sms-log-%E7%9F%AD%E4%BF%A1%E8%AE%B0%E5%BD%95%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | id |
| scene\_id | int | 场景id |
| mobile | varchar | 手机号码 |
| content | varchar | 发送内容 |
| code | varchar | 发送关键字（注册、找回密码） |
| is\_verify | tinyint | 是否已验证；0-否；1-是 |
| check\_num | int | 验证次数 |
| send\_status | tinyint | 发送状态：0-发送中；1-发送成功；2-发送失败 |
| send\_time | int | 发送时间 |
| results | text | 短信结果 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_system\_menu(系统菜单表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-system-menu-%E7%B3%BB%E7%BB%9F%E8%8F%9C%E5%8D%95%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| pid | int | 上级菜单 |
| type | char | 权限类型: M=目录，C=菜单，A=按钮 |
| name | varchar | 菜单名称 |
| icon | varchar | 菜单图标 |
| sort | smallint | 菜单排序 |
| perms | varchar | 权限标识 |
| paths | varchar | 路由地址 |
| component | varchar | 前端组件 |
| selected | varchar | 选中路径 |
| params | varchar | 路由参数 |
| is\_cache | tinyint | 是否缓存: 0=否, 1=是 |
| is\_show | tinyint | 是否显示: 0=否, 1=是 |
| is\_disable | tinyint | 是否禁用: 0=否, 1=是 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
|   
 |  |  |

cw\_system\_role(角色管理表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-system-role-%E8%A7%92%E8%89%B2%E7%AE%A1%E7%90%86%E8%A1%A8)
--------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| name | varchar | 名称 |
| desc | varchar | 描述 |
| sort | int | 排序 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_system\_role\_menu(角色菜单表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-system-role-menu-%E8%A7%92%E8%89%B2%E8%8F%9C%E5%8D%95%E8%A1%A8)
-------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| role\_id | int | 角色ID |
| menu\_id | int | 菜单ID |
|   
 |  |  |

cw\_user(用户管理表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-user-%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%E8%A1%A8)
-----------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| group\_ids | varchar | 分组 |
| sn | int | 编号 |
| avatar | varchar | 头像 |
| real\_name | varchar | 真实姓名 |
| nickname | varchar | 用户昵称 |
| account | varchar | 用户账号 |
| password | varchar | 用户密码 |
| mobile | varchar | 用户电话 |
| email | varchar | 用户邮箱 |
| sex | tinyint | 用户性别: \[1=男, 2=女\] |
| channel | tinyint | 注册渠道: \[1=微信小程序, 2=微信公众号, 3=手机H5, 4=电脑PC, 5=苹果APP, 6=安卓APP\] |
| balance | decimal | 钱包余额 |
| robot\_num | int | 机器人数 |
| video\_num | decimal | 视频时长 |
| total\_chat | int | 累计对话 |
| is\_disable | tinyint | 是否禁用: \[0=否, 1=是\] |
| is\_blacklist | tinyint | 是否加入黑名单: \[1=是, 0=否\] |
| is\_new\_user | tinyint | 是否是新注册用户: \[1-是, 0-否\] |
| multipoint\_login | tinyint | 多处登录: \[0=否, 1=是\] |
| cancelled\_remark | varchar | 注销原因 |
| login\_ip | varchar | 最后登录IP |
| login\_time | int | 最后登录时间 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_user\_account\_log(账户流水表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-user-account-log-%E8%B4%A6%E6%88%B7%E6%B5%81%E6%B0%B4%E8%A1%A8)
-------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| sn | varchar | 流水号 |
| user\_id | int | 用户ID |
| admin\_id | int | 管理ID |
| action | tinyint | 操作动作: \[1=增加, 2=减少\] |
| change\_object | tinyint | 变动对象: \[1=钱包, 2=机器人, 3=数字人\] |
| change\_type | smallint | 变动类型 |
| change\_amount | decimal | 变动的数量 |
| left\_amount | decimal | 变动后数量 |
| robot\_id | int | 机器人的ID |
| robot\_name | varchar | 机器人名称 |
| source\_sn | varchar | 关联的单号 |
| remark | varchar | 备注的信息 |
| extend | varchar | 扩展的信息 |
| extra | text | 预留的字段 |
| flows | text | token信息 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_user\_auth(用户授权表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-user-auth-%E7%94%A8%E6%88%B7%E6%8E%88%E6%9D%83%E8%A1%A8)
----------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| user\_id | int | 用户id |
| openid | varchar | 微信openid |
| unionid | varchar | 微信unionid |
| terminal | tinyint | 客户端类型: \[1=微信小程序, 2=微信公众号, 3=手机H5, 4=电脑PC, 5=苹果APP, 6=安卓APP\] |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
|   
 |  |  |

cw\_user\_group(用户分组表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-user-group-%E7%94%A8%E6%88%B7%E5%88%86%E7%BB%84%E8%A1%A8)
------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| name | varchar | 名称 |
| sort | smallint | 排序 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_user\_session(用户会话表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-user-session-%E7%94%A8%E6%88%B7%E4%BC%9A%E8%AF%9D%E8%A1%A8)
----------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | 主键 |
| user\_id | int | 用户ID |
| terminal | tinyint | 客户端类型: \[1=微信小程序, 2=微信公众号, 3=手机H5, 4=电脑PC, 5=苹果APP, 6=安卓APP\] |
| token | varchar | 令牌的值 |
| expire\_time | int | 到期时间 |
| update\_time | int | 更新时间 |
|   
 |  |  |

cw\_video\_generate\_log(数字人合成流程记录)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-video-generate-log-%E6%95%B0%E5%AD%97%E4%BA%BA%E5%90%88%E6%88%90%E6%B5%81%E7%A8%8B%E8%AE%B0%E5%BD%95)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| user\_id | int | 用户id |
| records\_id | int | 记录id |
| params | text | 合成参数 |
| status | tinyint | 状态：1-合成中，2-合成成功，3-合成失败 |
| type | tinyint | 类型：1-数字人，2-视频点播 |
| require\_result | text | 请求合成结果 |
| result | text | 合成结果 |
| long\_time | int | 视频时长:毫秒 |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_video\_records(数字人合成记录)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-video-records-%E6%95%B0%E5%AD%97%E4%BA%BA%E5%90%88%E6%88%90%E8%AE%B0%E5%BD%95)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int |  |
| user\_id | int | 用户id |
| name | varchar | 视频标题 |
| params | text | 参数 |
| avatar\_params | text | 数字人参数 |
| void\_params | text | 视频点播参数 |
| void\_type | tinyint | 播报类型：1-文本；2-音频 |
| status | tinyint | 状态：1-草稿，2-合成中，3-合成成功，4-合成失败 |
| sub\_status | tinyint | 子状态：1-草稿，2-数字人视频合成中，3-数字人视频合成失败，4-视频点播合成中，5-视频点播合成失败，6-视频合成完成 |
| video\_url | varchar | 视频地址 |
| cover\_picture\_url | varchar | 视频封面图 |
| result | text | 合成结果 |
| fail\_reason | varchar | 视频合成失败原因 |
| long\_time | varchar | 视频时长（毫秒） |
| create\_time | int | 创建时间 |
| update\_time | int | 更新时间 |
| delete\_time | int | 删除时间 |
|   
 |  |  |

cw\_visitor(访问日志表)[​](https://doc.chatmoney.cn/chat/develop/database.html#cw-visitor-%E8%AE%BF%E9%97%AE%E6%97%A5%E5%BF%97%E8%A1%A8)
-----------------------------------------------------------------------------------------------------------------------------------

  

| 字段名 | 数据类型 | 注释 |
| --- | --- | --- |
| id | int | ID |
| ip | varchar | 访客ip地址 |
| terminal | tinyint | 访问终端 |
| visit | int | 浏览量 |
| create\_time | int | 访问时间 |
| update\_time | int |  |
| delete\_time | int |  |
|   
 |  |