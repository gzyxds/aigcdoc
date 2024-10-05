# 数据库

## cw\_admin

| 字段名               | 数据类型 | 注释                           |
| ---------------------- | ---------- | -------------------------------- |
| id                   | int      |                                |
| root                 | tinyint  | 是否超级管理员 0-否 1-是       |
| name                 | varchar  | 名称                           |
| avatar               | varchar  | 用户头像                       |
| account              | varchar  | 账号                           |
| password             | varchar  | 密码                           |
| login\_time       | int      | 最后登录时间                   |
| login\_ip         | varchar  | 最后登录ip                     |
| multipoint\_login | tinyint  | 是否支持多处登录：1-是；0-否； |
| disable              | tinyint  | 是否禁用：0-否；1-是；         |
| create\_time      | int      | 创建时间                       |
| update\_time      | int      | 修改时间                       |
| delete\_time      | int      | 删除时间                       |
|                      |          |                                |

## cw\_admin\_dept

| 字段名       | 数据类型 | 注释     |
| -------------- | ---------- | ---------- |
| admin\_id | int      | 管理员id |
| dept\_id  | int      | 部门id   |
|              |          |          |

## cw\_admin\_jobs

| 字段名       | 数据类型 | 注释     |
| -------------- | ---------- | ---------- |
| admin\_id | int      | 管理员id |
| jobs\_id  | int      | 岗位id   |
|              |          |          |

## cw\_admin\_role

| 字段名       | 数据类型 | 注释     |
| -------------- | ---------- | ---------- |
| admin\_id | int      | 管理员id |
| role\_id  | int      | 角色id   |
|              |          |          |

## cw\_admin\_session

| 字段名          | 数据类型 | 注释                                          |
| ----------------- | ---------- | ----------------------------------------------- |
| id              | int      |                                               |
| admin\_id    | int      | 用户id                                        |
| terminal        | tinyint  | 客户端类型：1-pc管理后台 2-mobile手机管理后台 |
| token           | varchar  | 令牌                                          |
| update\_time | int      | 更新时间                                      |
| expire\_time | int      | 到期时间                                      |
|                 |          |                                               |

## cw\_article

| 字段名            | 数据类型 | 注释               |
| ------------------- | ---------- | -------------------- |
| id                | int      | 文章id             |
| cid               | int      | 文章分类           |
| title             | varchar  | 文章标题           |
| desc              | varchar  | 简介               |
| abstract          | text     | 文章摘要           |
| image             | varchar  | 文章图片           |
| author            | varchar  | 作者               |
| content           | text     | 文章内容           |
| click\_virtual | int      | 虚拟浏览量         |
| click\_actual  | int      | 实际浏览量         |
| is\_show       | tinyint  | 是否显示:1-是.0-否 |
| sort              | int      | 排序               |
| create\_time   | int      | 创建时间           |
| update\_time   | int      | 更新时间           |
| delete\_time   | int      | 删除时间           |
|                   |          |                    |

## cw\_article\_cate

| 字段名          | 数据类型 | 注释               |
| ----------------- | ---------- | -------------------- |
| id              | int      | 文章分类id         |
| name            | varchar  | 分类名称           |
| sort            | int      | 排序               |
| is\_show     | tinyint  | 是否显示:1-是;0-否 |
| create\_time | int      | 创建时间           |
| update\_time | int      | 更新时间           |
| delete\_time | int      | 删除时间           |
|                 |          |                    |

## cw\_article\_collect

| 字段名          | 数据类型 | 注释                       |
| ----------------- | ---------- | ---------------------------- |
| id              | int      | 主键                       |
| user\_id     | int      | 用户ID                     |
| article\_id  | int      | 文章ID                     |
| status          | tinyint  | 收藏状态 0-未收藏 1-已收藏 |
| create\_time | int      | 创建时间                   |
| update\_time | int      | 更新时间                   |
| delete\_time | int      | 删除时间                   |
|                 |          |                            |

## cw\_background(背景图)

| 字段名          | 数据类型 | 注释                     |
| ----------------- | ---------- | -------------------------- |
| id              | int      |                          |
| url             | varchar  | 图片                     |
| type            | int      | 版型类型：1-竖版；2-横版 |
| category\_id | int      | 分类id                   |
| sort            | int      | 排序                     |
| status          | tinyint  | 状态:1-开启,0-关闭       |
| media\_id    | varchar  | 媒体id                   |
| create\_time | int      | 创建时间                 |
| update\_time | int      | 更新时间                 |
| delete\_time | int      | 删除时间                 |
|                 |          |                          |

## cw\_background\_category(背景图分类)

| 字段名          | 数据类型 | 注释               |
| ----------------- | ---------- | -------------------- |
| id              | int      |                    |
| name            | varchar  | 分类名称           |
| sort            | int      | 排序               |
| status          | tinyint  | 状态:1-开启,0-关闭 |
| create\_time | int      | 创建时间           |
| update\_time | int      | 更新时间           |
| delete\_time | int      | 删除时间           |
|                 |          |                    |

## cw\_chat\_category

| 字段名          | 数据类型 | 注释                 |
| ----------------- | ---------- | ---------------------- |
| id              | int      |                      |
| name            | varchar  | 类目名称             |
| sort            | int      | 排序                 |
| status          | int      | 状态：1-开启，0-关闭 |
| create\_time | int      | 创建时间             |
| image           | varchar  | 图标                 |
| update\_time | int      | 修改时间             |
| delete\_time | int      | 删除时间             |
|                 |          |                      |

## cw\_chat\_record

| 字段名            | 数据类型 | 注释                                                       |
| ------------------- | ---------- | ------------------------------------------------------------ |
| id                | int      |                                                            |
| user\_id       | int      | 用户ID                                                     |
| category\_id   | int      | 对话记录分类                                               |
| other\_id      | int      | 创作id                                                     |
| ask               | text     | 提问                                                       |
| reply             | text     | 回复                                                       |
| type              | int      | 类型：1-对话，2-创作                                       |
| key               | varchar  | 模型来源公司                                               |
| model             | varchar  | 对话模型                                                   |
| is\_show       | tinyint  | 是否显示：1-是；0-否；                                     |
| censor\_status | tinyint  | 审核状态：0-未审核；1-合规；2-不合规；3-疑似；4-审核失败； |
| censor\_result | text     | 审核结果                                                   |
| censor\_num    | int      | 审核次数                                                   |
| extra             | text     | 预留扩展字段                                               |
| create\_time   | int      | 创建时间                                                   |
| update\_time   | int      | 更新时间                                                   |
| delete\_time   | int      | 删除时间                                                   |
|                   |          |                                                            |

## cw\_chat\_record\_category

| 字段名          | 数据类型 | 注释         |
| ----------------- | ---------- | -------------- |
| id              | int      |              |
| user\_id     | int      | 用户id       |
| name            | varchar  | 对话分类名称 |
| create\_time | int      | 创建时间     |
| update\_time | int      | 更新时间     |
| delete\_time | int      | 删除时间     |
|                 |          |              |

## cw\_chat\_record\_collect

| 字段名          | 数据类型 | 注释       |
| ----------------- | ---------- | ------------ |
| id              | int      |            |
| user\_id     | int      | 用户ID     |
| records\_id  | int      | 对话记录ID |
| create\_time | int      | 创建时间   |
|                 |          |            |

## cw\_chat\_sample

| 字段名          | 数据类型 | 注释             |
| ----------------- | ---------- | ------------------ |
| id              | int      |                  |
| category\_id | int      | 类目id           |
| sort            | int      | 排序             |
| content         | varchar  | 内容             |
| status          | tinyint  | 状态：1-是；0-否 |
| create\_time | int      | 创建时间         |
| update\_time | int      | 修改时间         |
| delete\_time | int      | 删除时间         |
|                 |          |                  |

## cw\_config

| 字段名          | 数据类型 | 注释     |
| ----------------- | ---------- | ---------- |
| id              | int      |          |
| type            | varchar  | 类型     |
| name            | varchar  | 名称     |
| value           | text     | 值       |
| create\_time | int      | 创建时间 |
| update\_time | int      | 更新时间 |
|                 |          |          |

## cw\_creation\_category(创作类别)

| 字段名          | 数据类型 | 注释                 |
| ----------------- | ---------- | ---------------------- |
| id              | int      |                      |
| image           | varchar  | 分类图标             |
| name            | varchar  | 类目名称             |
| sort            | int      | 排序                 |
| status          | int      | 状态：1-开启，0-关闭 |
| create\_time | int      | 创建时间             |
| update\_time | int      | 修改时间             |
| delete\_time | int      | 删除时间             |
|                 |          |                      |

## cw\_creation\_model(创作模型)

| 字段名                | 数据类型 | 注释                 |
| ----------------------- | ---------- | ---------------------- |
| id                    | int      |                      |
| name                  | varchar  | 名称                 |
| image                 | varchar  | 图标                 |
| sort                  | int      | 排序                 |
| category\_id       | int      | 类别id               |
| status                | int      | 状态：1-开启，0-关闭 |
| content               | text     | 主题内容             |
| tips                  | text     | 提示文字             |
| create\_time       | int      | 创建时间             |
| update\_time       | int      | 修改时间             |
| delete\_time       | int      | 删除时间             |
| context\_num       | int      | 上下文总数           |
| top\_p             | decimal  | 随机属性             |
| presence\_penalty  | decimal  | 话题属性             |
| frequency\_penalty | decimal  | 重复属性             |
| n                     | int      | 最大回复             |
| max\_tokens        | int      | 回复最大长度         |
| temperature           | decimal  | 词汇属性             |
| form                  | text     | 表单                 |
|                       |          |                      |

## cw\_creation\_model\_collect(创作收藏表)

| 字段名          | 数据类型 | 注释     |
| ----------------- | ---------- | ---------- |
| id              | int      |          |
| creation\_id | int      | 创作id   |
| user\_id     | int      | 用户id   |
| create\_time | int      | 创建时间 |
|                 |          |          |

## cw\_decals(贴纸)

| 字段名          | 数据类型 | 注释                         |
| ----------------- | ---------- | ------------------------------ |
| id              | int      |                              |
| url             | varchar  | 图片                         |
| category\_id | int      | 分类id                       |
| sort            | int      | 排序                         |
| status          | tinyint  | 状态:1-开启,0-关闭           |
| media\_id    | varchar  | 媒体id                       |
| type            | tinyint  | 类型：1-图片；2-动图         |
| create\_time | int      | 创建时间                     |
| update\_time | int      | 更新时间                     |
| delete\_time | int      | 删除时间                     |
| source          | tinyint  | 类型：1-阿里官方；2-后台上传 |
|                 |          |                              |

## cw\_decals\_category(贴纸分类)

| 字段名          | 数据类型 | 注释               |
| ----------------- | ---------- | -------------------- |
| id              | int      |                    |
| name            | varchar  | 分类名称           |
| sort            | int      | 排序               |
| status          | tinyint  | 状态:1-开启,0-关闭 |
| create\_time | int      | 创建时间           |
| update\_time | int      | 更新时间           |
| delete\_time | int      | 删除时间           |
|                 |          |                    |

## cw\_decorate\_nav

| 字段名          | 数据类型 | 注释     |
| ----------------- | ---------- | ---------- |
| id              | int      | 主键     |
| name            | varchar  | 导航名称 |
| icon            | varchar  | 导航图标 |
| link            | varchar  | 链接地址 |
| is\_show     | tinyint  | 是否显示 |
| create\_time | int      | 创建时间 |
| update\_time | int      | 更新时间 |
|                 |          |          |

## cw\_decorate\_page

| 字段名          | 数据类型 | 注释                                                             |
| ----------------- | ---------- | ------------------------------------------------------------------ |
| id              | int      | 主键                                                             |
| type            | tinyint  | 页面类型 1\=商城首页, 2\=个人中心, 3\=客服设置 4-PC首页 |
| name            | varchar  | 页面名称                                                         |
| data            | text     | 页面数据                                                         |
| create\_time | int      | 创建时间                                                         |
| update\_time | int      | 更新时间                                                         |
|                 |          |                                                                  |

## cw\_decorate\_tabbar

| 字段名          | 数据类型 | 注释     |
| ----------------- | ---------- | ---------- |
| id              | int      | 主键     |
| name            | varchar  | 导航名称 |
| selected        | varchar  | 未选图标 |
| unselected      | varchar  | 已选图标 |
| link            | varchar  | 链接地址 |
| create\_time | int      | 创建时间 |
| update\_time | int      | 更新时间 |
|                 |          |          |

## cw\_dept

| 字段名          | 数据类型 | 注释                    |
| ----------------- | ---------- | ------------------------- |
| id              | int      | id                      |
| name            | varchar  | 部门名称                |
| pid             | bigint   | 上级部门id              |
| sort            | int      | 排序                    |
| leader          | varchar  | 负责人                  |
| mobile          | varchar  | 联系电话                |
| status          | tinyint  | 部门状态（0停用 1正常） |
| create\_time | int      | 创建时间                |
| update\_time | int      | 修改时间                |
| delete\_time | int      | 删除时间                |
|                 |          |                         |

## cw\_dev\_crontab

| 字段名          | 数据类型 | 注释                      |
| ----------------- | ---------- | --------------------------- |
| id              | int      |                           |
| name            | varchar  | 定时任务名称              |
| type            | tinyint  | 类型 1-定时任务           |
| system          | tinyint  | 是否系统任务 0-否 1-是    |
| remark          | varchar  | 备注                      |
| command         | varchar  | 命令内容                  |
| params          | varchar  | 参数                      |
| status          | tinyint  | 状态 1-运行 2-停止 3-错误 |
| expression      | varchar  | 运行规则                  |
| error           | varchar  | 运行失败原因              |
| last\_time   | int      | 最后执行时间              |
| time            | varchar  | 实时执行时长              |
| max\_time    | varchar  | 最大执行时长              |
| create\_time | int      | 创建时间                  |
| update\_time | int      | 更新时间                  |
| delete\_time | int      | 删除时间                  |
|                 |          |                           |

## cw\_dev\_pay\_config

| 字段名      | 数据类型 | 注释                                         |
| ------------- | ---------- | ---------------------------------------------- |
| id          | int      |                                              |
| name        | varchar  | 模版名称                                     |
| pay\_way | tinyint  | 支付方式:1-余额支付;2-微信支付;3-支付宝支付; |
| config      | text     | 对应支付配置(json字符串)                     |
| icon        | varchar  | 图标                                         |
| sort        | int      | 排序                                         |
| remark      | varchar  | 备注                                         |
|             |          |                                              |

## cw\_dev\_pay\_way

| 字段名                | 数据类型 | 注释                                            |
| ----------------------- | ---------- | ------------------------------------------------- |
| id                    | int      |                                                 |
| pay\_config\_id | int      | 支付配置ID                                      |
| scene                 | tinyint  | 场景:1-微信小程序;2-微信公众号;3-H5;4-PC;5-APP; |
| is\_default        | tinyint  | 是否默认支付:0-否;1-是;                         |
| status                | tinyint  | 状态:0-关闭;1-开启;                             |
|                       |          |                                                 |

## cw\_dict\_data

| 字段名          | 数据类型 | 注释               |
| ----------------- | ---------- | -------------------- |
| id              | int      | id                 |
| name            | varchar  | 数据名称           |
| value           | varchar  | 数据值             |
| type\_id     | int      | 字典类型id         |
| type\_value  | varchar  | 字典类型           |
| sort            | int      | 排序值             |
| status          | tinyint  | 状态 0-停用 1-正常 |
| remark          | varchar  | 备注               |
| create\_time | int      | 创建时间           |
| update\_time | int      | 修改时间           |
| delete\_time | int      | 删除时间           |
|                 |          |                    |

## cw\_dict\_type

| 字段名          | 数据类型 | 注释               |
| ----------------- | ---------- | -------------------- |
| id              | int      | id                 |
| name            | varchar  | 字典名称           |
| type            | varchar  | 字典类型名称       |
| status          | tinyint  | 状态 0-停用 1-正常 |
| remark          | varchar  | 备注               |
| create\_time | int      | 创建时间           |
| update\_time | int      | 修改时间           |
| delete\_time | int      | 删除时间           |
|                 |          |                    |

## cw\_email\_log

| 字段名          | 数据类型 | 注释                                       |
| ----------------- | ---------- | -------------------------------------------- |
| id              | int      | id                                         |
| scene\_id    | int      | 场景id                                     |
| email           | varchar  | 邮箱                                       |
| content         | varchar  | 发送内容                                   |
| code            | varchar  | 验证码                                     |
| is\_verify   | tinyint  | 是否已验证；0-否；1-是                     |
| check\_num   | int      | 验证次数                                   |
| send\_status | tinyint  | 发送状态：0-发送中；1-发送成功；2-发送失败 |
| send\_time   | int      | 发送时间                                   |
| results         | text     | 发送结果                                   |
| create\_time | int      | 创建时间                                   |
| update\_time | int      | 更新时间                                   |
| delete\_time | int      | 删除时间                                   |
|                 |          |                                            |

## cw\_file

| 字段名          | 数据类型 | 注释                                       |
| ----------------- | ---------- | -------------------------------------------- |
| id              | int      | 主键ID                                     |
| cid             | int      | 类目ID                                     |
| source\_id   | int      | 上传者id                                   |
| source          | tinyint  | 来源类型[0-后台,1-用户]                    |
| type            | tinyint  | 类型[10\=图片, 20\=视频]             |
| name            | varchar  | 文件名称                                   |
| uri             | varchar  | 文件路径                                   |
| use\_type    | tinyint  | 使用类型：1-常规素材使用，2-数字人素材使用 |
| create\_time | int      | 创建时间                                   |
| update\_time | int      | 更新时间                                   |
| delete\_time | int      | 删除时间                                   |
|                 |          |                                            |

## cw\_file\_cate

| 字段名          | 数据类型 | 注释                                                     |
| ----------------- | ---------- | ---------------------------------------------------------- |
| id              | int      | 主键ID                                                   |
| pid             | int      | 父级ID                                                   |
| type            | tinyint  | 类型[10\=图片，20\=视频，30\=文件，40\=音频] |
| name            | varchar  | 分类名称                                                 |
| create\_time | int      | 创建时间                                                 |
| update\_time | int      | 更新时间                                                 |
| delete\_time | int      | 删除时间                                                 |
|                 |          |                                                          |

## cw\_generate\_column

| 字段名             | 数据类型 | 注释                       |
| -------------------- | ---------- | ---------------------------- |
| id                 | int      | id                         |
| table\_id       | int      | 表id                       |
| column\_name    | varchar  | 字段名称                   |
| column\_comment | varchar  | 字段描述                   |
| column\_type    | varchar  | 字段类型                   |
| is\_required    | tinyint  | 是否必填 0-非必填 1-必填   |
| is\_pk          | tinyint  | 是否为主键 0-不是 1-是     |
| is\_insert      | tinyint  | 是否为插入字段 0-不是 1-是 |
| is\_update      | tinyint  | 是否为更新字段 0-不是 1-是 |
| is\_lists       | tinyint  | 是否为列表字段 0-不是 1-是 |
| is\_query       | tinyint  | 是否为查询字段 0-不是 1-是 |
| query\_type     | varchar  | 查询类型                   |
| view\_type      | varchar  | 显示类型                   |
| dict\_type      | varchar  | 字典类型                   |
| create\_time    | int      | 创建时间                   |
| update\_time    | int      | 修改时间                   |
|                    |          |                            |

## cw\_generate\_table

| 字段名            | 数据类型 | 注释                               |
| ------------------- | ---------- | ------------------------------------ |
| id                | int      | id                                 |
| table\_name    | varchar  | 表名称                             |
| table\_comment | varchar  | 表描述                             |
| template\_type | tinyint  | 模板类型 0-单表(curd) 1-树表(curd) |
| author            | varchar  | 作者                               |
| remark            | varchar  | 备注                               |
| generate\_type | tinyint  | 生成方式 0-压缩包下载 1-生成到模块 |
| module\_name   | varchar  | 模块名                             |
| class\_dir     | varchar  | 类目录名                           |
| class\_comment | varchar  | 类描述                             |
| admin\_id      | int      | 管理员id                           |
| menu              | text     | 菜单配置                           |
| delete            | text     | 删除配置                           |
| tree              | text     | 树表配置                           |
| relations         | text     | 关联配置                           |
| create\_time   | int      | 创建时间                           |
| update\_time   | int      | 修改时间                           |
|                   |          |                                    |

## cw\_hot\_search

| 字段名          | 数据类型 | 注释     |
| ----------------- | ---------- | ---------- |
| id              | int      | 主键     |
| name            | varchar  | 关键词   |
| sort            | smallint | 排序号   |
| create\_time | int      | 创建时间 |
|                 |          |          |

## cw\_index\_visit

| 字段名          | 数据类型 | 注释       |
| ----------------- | ---------- | ------------ |
| id              | int      |            |
| ip              | varchar  | 访客ip地址 |
| terminal        | tinyint  | 访问终端   |
| visit           | int      | 浏览量     |
| create\_time | int      | 访问时间   |
| update\_time | int      |            |
| delete\_time | int      |            |
|                 |          |            |

## cw\_jobs

| 字段名          | 数据类型 | 注释                |
| ----------------- | ---------- | --------------------- |
| id              | int      | id                  |
| name            | varchar  | 岗位名称            |
| code            | varchar  | 岗位编码            |
| sort            | int      | 显示顺序            |
| status          | tinyint  | 状态（0停用 1正常） |
| remark          | varchar  | 备注                |
| create\_time | int      | 创建时间            |
| update\_time | int      | 修改时间            |
| delete\_time | int      | 删除时间            |
|                 |          |                     |

## cw\_key\_down\_rule(key自动下架规则)

| 字段名          | 数据类型 | 注释                |
| ----------------- | ---------- | --------------------- |
| id              | int      |                     |
| type            | tinyint  | 规则类型：1-对话    |
| ai\_key      | varchar  | 接口类型            |
| rule            | varchar  | 停用规则            |
| prompt          | varchar  | 停用提示            |
| status          | tinyint  | 状态：1-开启,0-关闭 |
| create\_time | int      | 创建时间            |
| update\_time | int      | 更新时间            |
| delete\_time | int      | 删除时间            |
|                 |          |                     |

## cw\_key\_pool

| 字段名          | 数据类型 | 注释     |
| ----------------- | ---------- | ---------- |
| id              | int      | id       |
| type            | tinyint  | 类型     |
| model           | varchar  | 模型     |
| key             | varchar  | 密钥     |
| status          | tinyint  | 状态     |
| remark          | varchar  | 备注     |
| appid           | varchar  | appid    |
| secret          | varchar  | secret   |
| notice          | text     | 通知     |
| create\_time | int      | 创建时间 |
| update\_time | int      | 更新时间 |
| delete\_time | int      | 删除时间 |
|                 |          |          |

## cw\_knowledge

| 字段名          | 数据类型 | 注释                                   |
| ----------------- | ---------- | ---------------------------------------- |
| id              | int      | 主键                                   |
| user\_id     | int      | 用户ID                                 |
| admin\_id    | int      | 后台ID                                 |
| name            | varchar  | 名称                                   |
| image           | varchar  | 图标                                   |
| sort            | smallint | 排序                                   |
| type            | tinyint  | 集合类型: [1\=问答型, 2\=检索型] |
| is\_enable   | tinyint  | 是否启用: [0\=否, 1\=是]         |
| create\_type | tinyint  | 创建类型: [1\=后台, 2\=前台]     |
| create\_time | int      | 创建时间                               |
| update\_time | int      | 更新时间                               |
| delete\_time | int      | 删除时间                               |
|                 |          |                                        |

## cw\_know\_apply

| 字段名                  | 数据类型 | 注释                                       |
| ------------------------- | ---------- | -------------------------------------------- |
| id                      | int      | 主键                                       |
| user\_id             | int      | 用户ID                                     |
| admin\_id            | int      | 管理员ID                                   |
| code                    | varchar  | 应用编号                                   |
| kb\_ids              | varchar  | 知识库ID                                   |
| category\_id         | int      | 分类ID                                     |
| image                   | varchar  | 应用封面                                   |
| name                    | varchar  | 应用名称                                   |
| intro                   | varchar  | 应用简介                                   |
| sort                    | smallint | 排序编号                                   |
| welcome                 | text     | 欢迎语                                     |
| example                 | text     | 示例值                                     |
| systemPrompt            | text     | 提示词                                     |
| limitPrompt             | text     | 限定词                                     |
| searchEmptyText         | text     | 空搜索回复                                 |
| searchSimilarity        | decimal  | 相似度                                     |
| searchLimit             | smallint | 单次搜索数量                               |
| artificial\_content  | text     | 人工客服内容                               |
| chat\_icon           | varchar  | 对话图标                                   |
| auth\_type           | tinyint  | 使用权限: 0\=所有用户, 1\=指定分组   |
| create\_type         | tinyint  | 创建类型: 1\=后台创建, 2\=前台创建   |
| null\_reply\_type | tinyint  | 空回复类型: [1\=默认回复, 2\=AI回复] |
| is\_show\_context | tinyint  | 显示上下文: [0\=否, 1\=是]           |
| is\_show\_quote   | tinyint  | 显示引用: [0\=否, 1\=是]             |
| is\_artificial       | tinyint  | 人工客服: [0\=否, 1\=是]             |
| is\_enable           | tinyint  | 是否启用: [0\=否, 1\=是]             |
| create\_time         | int      | 创建时间                                   |
| update\_time         | int      | 更新时间                                   |
| delete\_time         | int      | 删除时间                                   |
|                         |          |                                            |

## cw\_know\_apply\_auth

| 字段名       | 数据类型 | 注释   |
| -------------- | ---------- | -------- |
| id           | int      | 主键   |
| apply\_id | int      | 应用ID |
| group\_id | int      | 分组ID |
|              |          |        |

## cw\_know\_apply\_category

| 字段名          | 数据类型 | 注释                           |
| ----------------- | ---------- | -------------------------------- |
| id              | int      | 主键                           |
| name            | varchar  | 分类名称                       |
| sort            | smallint | 排序编号                       |
| is\_enable   | tinyint  | 是否启用: [0\=否, 1\=是] |
| create\_time | int      | 创建时间                       |
| update\_time | int      | 更新时间                       |
| delete\_time | int      | 删除时间                       |
|                 |          |                                |

## cw\_know\_apply\_collect

| 字段名          | 数据类型 | 注释     |
| ----------------- | ---------- | ---------- |
| id              | int      | 主键     |
| user\_id     | int      | 用户ID   |
| apply\_id    | int      | 应用ID   |
| create\_time | int      | 创建时间 |
|                 |          |          |

## cw\_know\_qa

| 字段名              | 数据类型 | 注释                                                                     |
| --------------------- | ---------- | -------------------------------------------------------------------------- |
| id                  | int      | 主键                                                                     |
| name                | varchar  | 文件名称                                                                 |
| content             | text     | 文本内容                                                                 |
| status              | tinyint  | 拆分状态: [0\=等待拆分, 1\=拆分中, 2\=拆分成功, 3\=拆分失败] |
| error               | text     | 错误信息                                                                 |
| save\_bk\_ids | varchar  | 知识库ID                                                                 |
| handle\_id       | int      | 处理人ID                                                                 |
| handle\_type     | tinyint  | 处理类型: [1\=后台, 2\=用户]                                       |
| create\_time     | int      | 创建时间                                                                 |
| update\_time     | int      | 更新时间                                                                 |
| delete\_time     | int      | 删除时间                                                                 |
|                     |          |                                                                          |

## cw\_know\_qa\_data

| 字段名          | 数据类型 | 注释     |
| ----------------- | ---------- | ---------- |
| id              | int      | 主键     |
| qa\_id       | int      | 拆分ID   |
| question        | text     | 问题     |
| answer          | text     | 回复     |
| create\_time | int      | 创建时间 |
| update\_time | int      | 更新时间 |
| delete\_time | int      | 删除时间 |
|                 |          |          |

## cw\_know\_record

| 字段名            | 数据类型 | 注释                                                                           |
| ------------------- | ---------- | -------------------------------------------------------------------------------- |
| id                | int      | 主键                                                                           |
| wind\_id       | int      | 窗口ID                                                                         |
| user\_id       | int      | 用户ID                                                                         |
| apply\_id      | int      | 应用ID                                                                         |
| ask               | text     | 提问                                                                           |
| reply             | text     | 答复                                                                           |
| context           | text     | 上下文                                                                         |
| quotes            | text     | 引用值                                                                         |
| images            | text     | 附带图片                                                                       |
| files             | text     | 附带文件                                                                       |
| model             | varchar  | 模型                                                                           |
| identity          | varchar  | 临时身份                                                                       |
| channel\_sn    | varchar  | 渠道编号                                                                       |
| channel\_type  | tinyint  | 访问渠道: [0\=前台, 1\=网页, 2\=API]                                  |
| censor\_status | tinyint  | 审核状态: [0\=未审核, 1\=合规, 2\=不合规, 3\=疑似, 4\=审核失败] |
| censor\_num    | smallint | 审核次数                                                                       |
| censor\_result | text     | 审核结果                                                                       |
| create\_time   | int      | 创建时间                                                                       |
| update\_time   | int      | 更新时间                                                                       |
| delete\_time   | int      | 删除时间                                                                       |
|                   |          |                                                                                |

## cw\_know\_release

| 字段名                   | 数据类型 | 注释                         |
| -------------------------- | ---------- | ------------------------------ |
| id                       | int      | 主键                         |
| type                     | int      | 类型: [1\=web, 2\=api] |
| user\_id              | int      | 用户ID                       |
| apply\_id             | int      | 应用ID                       |
| apply\_sn             | varchar  | 应用编号                     |
| channel\_sn           | varchar  | 渠道编号                     |
| name                     | varchar  | 分享名称                     |
| secret                   | varchar  | 访问密钥                     |
| context\_num          | tinyint  | 上下文数                     |
| limit\_total\_chat | int      | 限制每个用户累计总对话数     |
| limit\_today\_chat | int      | 限制每个用户每天总对话数     |
| limit\_exceed         | varchar  | 限制超出的默认回复           |
| use\_time             | int      | 使用时间                     |
| create\_time          | int      | 创建时间                     |
| update\_time          | int      | 更新时间                     |
| delete\_time          | int      | 删除时间                     |
|                          |          |                              |

## cw\_know\_window

| 字段名          | 数据类型 | 注释     |
| ----------------- | ---------- | ---------- |
| id              | int      | 主键     |
| user\_id     | int      | 用户ID   |
| apply\_id    | int      | 应用ID   |
| name            | varchar  | 窗口名称 |
| create\_time | int      | 创建时间 |
| update\_time | int      | 更新时间 |
| delete\_time | int      | 删除时间 |
|                 |          |          |

## cw\_material\_upload\_log(素材上传记录)

| 字段名          | 数据类型 | 注释                                     |
| ----------------- | ---------- | ------------------------------------------ |
| id              | int      |                                          |
| relation\_id | int      | 关联表id                                 |
| type            | int      | 类型：1-音乐；2-背景图；3-前景图；4-贴纸 |
| media\_id    | varchar  | 阿里媒体id                               |
| result          | text     | 上传结果                                 |
| create\_time | int      | 创建时间                                 |
| update\_time | int      | 更新时间                                 |
| delete\_time | int      | 删除时间                                 |
|                 |          |                                          |

## cw\_music(音乐)

| 字段名          | 数据类型 | 注释               |
| ----------------- | ---------- | -------------------- |
| id              | int      |                    |
| category\_id | int      | 分类id             |
| cover           | varchar  | 封面               |
| url             | varchar  | 音乐分类           |
| name            | varchar  | 名称               |
| sort            | int      | 排序               |
| status          | tinyint  | 状态:1-开启,0-关闭 |
| media\_id    | varchar  | 媒体id             |
| create\_time | int      | 创建时间           |
| update\_time | int      | 更新时间           |
| delete\_time | int      | 删除时间           |
|                 |          |                    |

## cw\_music\_category(音乐分类)

| 字段名          | 数据类型 | 注释               |
| ----------------- | ---------- | -------------------- |
| id              | int      |                    |
| name            | varchar  | 分类名称           |
| sort            | int      | 排序               |
| status          | tinyint  | 状态:1-开启,0-关闭 |
| create\_time | int      | 创建时间           |
| update\_time | int      | 更新时间           |
| delete\_time | int      | 删除时间           |
|                 |          |                    |

## cw\_notice\_record

| 字段名          | 数据类型 | 注释                                                       |
| ----------------- | ---------- | ------------------------------------------------------------ |
| id              | int      | ID                                                         |
| user\_id     | int      | 用户id                                                     |
| title           | varchar  | 标题                                                       |
| content         | text     | 内容                                                       |
| scene\_id    | int      | 场景                                                       |
| read            | tinyint  | 已读状态;0-未读,1-已读                                     |
| recipient       | tinyint  | 通知接收对象类型;1-会员;2-商家;3-平台;4-游客(未注册用户)   |
| send\_type   | tinyint  | 通知发送类型 1-系统通知 2-短信通知 3-微信模板 4-微信小程序 |
| notice\_type | tinyint  | 通知类型 1-业务通知 2-验证码                               |
| extra           | varchar  | 其他                                                       |
| create\_time | int      | 创建时间                                                   |
| update\_time | int      | 更新时间                                                   |
| delete\_time | int      | 删除时间                                                   |
|                 |          |                                                            |

## cw\_notice\_setting

| 字段名            | 数据类型 | 注释                                                                        |
| ------------------- | ---------- | ----------------------------------------------------------------------------- |
| id                | int      |                                                                             |
| scene\_id      | int      | 场景id                                                                      |
| scene\_name    | varchar  | 场景名称                                                                    |
| scene\_desc    | varchar  | 场景描述                                                                    |
| recipient         | tinyint  | 接收者 1-用户 2-平台                                                        |
| type              | tinyint  | 通知类型: 1-业务通知 2-验证码                                               |
| system\_notice | text     | 系统通知设置                                                                |
| sms\_notice    | text     | 短信通知设置                                                                |
| oa\_notice     | text     | 公众号通知设置                                                              |
| mnp\_notice    | text     | 小程序通知设置                                                              |
| email\_notice  | text     | 邮箱通知设置                                                                |
| support           | char     | 支持的发送类型 1-系统通知 2-短信通知 3-微信模板消息 4-小程序提醒 5-邮箱通知 |
| update\_time   | int      | 更新时间                                                                    |
|                   |          |                                                                             |

## cw\_official\_account\_reply

| 字段名            | 数据类型 | 注释                                        |
| ------------------- | ---------- | --------------------------------------------- |
| id                | int      |                                             |
| name              | varchar  | 规则名称                                    |
| keyword           | varchar  | 关键词                                      |
| reply\_type    | tinyint  | 回复类型 1-关注回复 2-关键字回复 3-默认回复 |
| matching\_type | tinyint  | 匹配方式：1-全匹配；2-模糊匹配              |
| content\_type  | tinyint  | 内容类型：1-文本                            |
| content           | text     | 回复内容                                    |
| status            | tinyint  | 启动状态：1-启动；0-关闭                    |
| sort              | int      | 排序                                        |
| create\_time   | int      | 创建时间                                    |
| update\_time   | int      | 更新时间                                    |
| delete\_time   | int      | 删除时间                                    |
|                   |          |                                             |

## cw\_operation\_log

| 字段名          | 数据类型 | 注释       |
| ----------------- | ---------- | ------------ |
| id              | int      |            |
| admin\_id    | int      | 管理员ID   |
| admin\_name  | varchar  | 管理员名称 |
| account         | varchar  | 管理员账号 |
| action          | varchar  | 操作名称   |
| type            | varchar  | 请求方式   |
| url             | varchar  | 访问链接   |
| params          | text     | 请求数据   |
| result          | text     | 请求结果   |
| ip              | varchar  | ip地址     |
| create\_time | int      | 创建时间   |
|                 |          |            |

## cw\_preposition(前置图)

| 字段名          | 数据类型 | 注释               |
| ----------------- | ---------- | -------------------- |
| id              | int      |                    |
| url             | varchar  | 前置图             |
| sort            | int      | 排序               |
| status          | tinyint  | 状态:1-开启,0-关闭 |
| media\_id    | varchar  | 媒体id             |
| create\_time | int      | 创建时间           |
| update\_time | int      | 更新时间           |
| delete\_time | int      | 删除时间           |
|                 |          |                    |

## cw\_recharge\_order

| 字段名             | 数据类型 | 注释                                                                  |
| -------------------- | ---------- | ----------------------------------------------------------------------- |
| id                 | int      | ID                                                                    |
| sn                 | varchar  | 订单编号                                                              |
| user\_id        | int      | 用户ID                                                                |
| package\_id     | int      | 套餐ID                                                                |
| pay\_sn         | varchar  | 支付编号-冗余字段，针对微信同一主体不同客户端支付需用不同订单号预留。 |
| pay\_way        | tinyint  | 支付方式: 2\=微信支付, 3\=支付宝支付                            |
| pay\_status     | tinyint  | 支付状态: 0\=待支付, 1\=已支付                                  |
| refund\_status  | tinyint  | 退款状态: 0\=未退款, 1\=已退款                                  |
| order\_amount   | decimal  | 订单金额                                                              |
| order\_terminal | tinyint  | 终端平台                                                              |
| transaction\_id | varchar  | 第三方平台交易流水号                                                  |
| chat\_number    | int      | 充值的对话数量                                                        |
| robot\_number   | int      | 充值的机器人数量                                                      |
| kb\_number      | int      | 充值的知识库数量                                                      |
| video\_duration | int      | 充值的视频合成时长                                                    |
| snapshot           | text     | 订单快照                                                              |
| pay\_time       | int      | 支付时间                                                              |
| create\_time    | int      | 创建时间                                                              |
| update\_time    | int      | 更新时间                                                              |
| delete\_time    | int      | 删除时间                                                              |
|                    |          |                                                                       |

## cw\_recharge\_package

| 字段名                      | 数据类型 | 注释                               |
| ----------------------------- | ---------- | ------------------------------------ |
| id                          | int      | 主键                               |
| name                        | varchar  | 套餐名称                           |
| remarks                     | varchar  | 套餐描述                           |
| sell\_price              | decimal  | 销售价格                           |
| line\_price              | decimal  | 划线价格                           |
| chat\_number             | int      | 问答的数量                         |
| robot\_number            | int      | 机器人数量                         |
| kb\_number               | int      | 知识库数量                         |
| video\_duration          | int      | 视频合成时长                       |
| give\_chat\_number    | int      | 赠送问答的数量                     |
| give\_robot\_number   | int      | 赠送机器人数量                     |
| give\_kb\_number      | int      | 赠送知识库数量                     |
| give\_video\_duration | int      | 赠送视频合成时长                   |
| sort                        | int      | 排序编号                           |
| status                      | tinyint  | 套餐状态: [0\=关闭, 1\=开启] |
| is\_give                 | tinyint  | 赠送状态: [0\=关闭, 1\=开启] |
| is\_recommend            | tinyint  | 是否推荐: [0\=否, 1\=是]     |
| create\_time             | int      | 创建时间                           |
| update\_time             | int      | 更新时间                           |
| delete\_time             | int      | 删除时间                           |
|                             |          |                                    |

## cw\_refund\_log

| 字段名            | 数据类型 | 注释                                    |
| ------------------- | ---------- | ----------------------------------------- |
| id                | int      | id                                      |
| sn                | varchar  | 编号                                    |
| record\_id     | int      | 退款记录id                              |
| user\_id       | int      | 关联用户                                |
| handle\_id     | int      | 处理人id（管理员id）                    |
| order\_amount  | decimal  | 订单总的应付款金额，冗余字段            |
| refund\_amount | decimal  | 本次退款金额                            |
| refund\_status | tinyint  | 退款状态，0退款中，1退款成功，2退款失败 |
| refund\_msg    | text     | 退款信息                                |
| create\_time   | int      | 创建时间                                |
| update\_time   | int      | 更新时间                                |
|                   |          |                                         |

## cw\_refund\_record

| 字段名             | 数据类型 | 注释                                      |
| -------------------- | ---------- | ------------------------------------------- |
| id                 | int      | id                                        |
| sn                 | varchar  | 退款编号                                  |
| user\_id        | int      | 关联用户                                  |
| order\_id       | int      | 来源订单id                                |
| order\_sn       | varchar  | 来源单号                                  |
| order\_type     | varchar  | 订单来源 order-商品订单 recharge-充值订单 |
| order\_amount   | decimal  | 订单总的应付款金额，冗余字段              |
| refund\_amount  | decimal  | 本次退款金额                              |
| transaction\_id | varchar  | 第三方平台交易流水号                      |
| refund\_way     | tinyint  | 退款方式 1-线上退款 2-线下退款            |
| refund\_type    | tinyint  | 退款类型 1-后台退款                       |
| refund\_status  | tinyint  | 退款状态，0退款中，1退款成功，2退款失败   |
| create\_time    | int      | 创建时间                                  |
| update\_time    | int      | 更新时间                                  |
|                    |          |                                           |

## cw\_sensitive\_word

| 字段名          | 数据类型 | 注释                 |
| ----------------- | ---------- | ---------------------- |
| id              | int      |                      |
| word            | varchar  | 敏感词               |
| status          | tinyint  | 状态：1-开启，0-关闭 |
| create\_time | int      | 创建时间             |
| update\_time | int      | 更新时间             |
| delete\_time | int      | 删除时间             |
|                 |          |                      |

## cw\_sms\_log

| 字段名          | 数据类型 | 注释                                       |
| ----------------- | ---------- | -------------------------------------------- |
| id              | int      | id                                         |
| scene\_id    | int      | 场景id                                     |
| mobile          | varchar  | 手机号码                                   |
| content         | varchar  | 发送内容                                   |
| code            | varchar  | 发送关键字（注册、找回密码）               |
| is\_verify   | tinyint  | 是否已验证；0-否；1-是                     |
| check\_num   | int      | 验证次数                                   |
| send\_status | tinyint  | 发送状态：0-发送中；1-发送成功；2-发送失败 |
| send\_time   | int      | 发送时间                                   |
| results         | text     | 短信结果                                   |
| create\_time | int      | 创建时间                                   |
| update\_time | int      | 更新时间                                   |
| delete\_time | int      | 删除时间                                   |
|                 |          |                                            |

## cw\_system\_menu

| 字段名          | 数据类型 | 注释                                         |
| ----------------- | ---------- | ---------------------------------------------- |
| id              | int      | 主键                                         |
| pid             | int      | 上级菜单                                     |
| type            | char     | 权限类型: M\=目录，C\=菜单，A\=按钮 |
| name            | varchar  | 菜单名称                                     |
| icon            | varchar  | 菜单图标                                     |
| sort            | smallint | 菜单排序                                     |
| perms           | varchar  | 权限标识                                     |
| paths           | varchar  | 路由地址                                     |
| component       | varchar  | 前端组件                                     |
| selected        | varchar  | 选中路径                                     |
| params          | varchar  | 路由参数                                     |
| is\_cache    | tinyint  | 是否缓存: 0\=否, 1\=是                 |
| is\_show     | tinyint  | 是否显示: 0\=否, 1\=是                 |
| is\_disable  | tinyint  | 是否禁用: 0\=否, 1\=是                 |
| create\_time | int      | 创建时间                                     |
| update\_time | int      | 更新时间                                     |
|                 |          |                                              |

## cw\_system\_role

| 字段名          | 数据类型 | 注释     |
| ----------------- | ---------- | ---------- |
| id              | int      |          |
| name            | varchar  | 名称     |
| desc            | varchar  | 描述     |
| sort            | int      | 排序     |
| create\_time | int      | 创建时间 |
| update\_time | int      | 更新时间 |
| delete\_time | int      | 删除时间 |
|                 |          |          |

## cw\_system\_role\_menu

| 字段名      | 数据类型 | 注释   |
| ------------- | ---------- | -------- |
| role\_id | int      | 角色ID |
| menu\_id | int      | 菜单ID |
|             |          |        |

## cw\_user

| 字段名              | 数据类型 | 注释                                                                                   |
| --------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| id                  | int      | 主键                                                                                   |
| group\_ids       | varchar  | 分组                                                                                   |
| sn                  | int      | 编号                                                                                   |
| avatar              | varchar  | 头像                                                                                   |
| real\_name       | varchar  | 真实姓名                                                                               |
| nickname            | varchar  | 用户昵称                                                                               |
| account             | varchar  | 用户账号                                                                               |
| password            | varchar  | 用户密码                                                                               |
| mobile              | varchar  | 手机号码                                                                               |
| email               | varchar  | 邮箱                                                                                   |
| sex                 | tinyint  | 用户性别: [1\=男, 2\=女]                                                         |
| channel             | tinyint  | 注册渠道: [1-微信小程序 2-微信公众号 3-手机H5 4-电脑PC 5-苹果APP 6-安卓APP 7-后台创建] |
| is\_disable      | tinyint  | 是否禁用: [0\=否, 1\=是]                                                         |
| login\_ip        | varchar  | 最后登录IP                                                                             |
| login\_time      | int      | 最后登录时间                                                                           |
| is\_new\_user | tinyint  | 是否是新注册用户: [1-是, 0-否]                                                         |
| balance\_chat    | int      | 对话余额                                                                               |
| robot\_num       | int      | 可创建机器人的次数                                                                     |
| kb\_num          | int      | 可创建知识库的次数                                                                     |
| total\_chat      | int      | 累计提问次数                                                                           |
| is\_blacklist    | tinyint  | 是否在黑名单：1-是；0-否；                                                             |
| video\_duration  | decimal  | 视频可合成时长                                                                         |
| create\_time     | int      | 创建时间                                                                               |
| update\_time     | int      | 更新时间                                                                               |
| delete\_time     | int      | 删除时间                                                                               |
|                     |          |                                                                                        |

## cw\_user\_account\_log

| 字段名            | 数据类型 | 注释               |
| ------------------- | ---------- | -------------------- |
| id                | int      |                    |
| sn                | varchar  | 流水号             |
| user\_id       | int      | 用户id             |
| admin\_id      | int      | 管理ID             |
| change\_object | tinyint  | 变动对象           |
| change\_type   | smallint | 变动类型           |
| action            | tinyint  | 动作 1-增加 2-减少 |
| change\_amount | decimal  | 变动数量           |
| left\_amount   | decimal  | 变动后数量         |
| source\_sn     | varchar  | 关联单号           |
| remark            | varchar  | 备注               |
| extra             | text     | 预留扩展字段       |
| create\_time   | int      | 创建时间           |
| update\_time   | int      | 更新时间           |
| delete\_time   | int      | 删除时间           |
|                   |          |                    |

## cw\_user\_auth

| 字段名          | 数据类型 | 注释                                                                             |
| ----------------- | ---------- | ---------------------------------------------------------------------------------- |
| id              | int      |                                                                                  |
| user\_id     | int      | 用户id                                                                           |
| openid          | varchar  | 微信openid                                                                       |
| unionid         | varchar  | 微信unionid                                                                      |
| terminal        | tinyint  | 客户端类型：1-微信小程序；2-微信公众号；3-手机H5；4-电脑PC；5-苹果APP；6-安卓APP |
| create\_time | int      | 创建时间                                                                         |
| update\_time | int      | 更新时间                                                                         |
|                 |          |                                                                                  |

## cw\_user\_group

| 字段名          | 数据类型 | 注释     |
| ----------------- | ---------- | ---------- |
| id              | int      | 主键     |
| name            | varchar  | 名称     |
| sort            | smallint | 排序     |
| create\_time | int      | 创建时间 |
| update\_time | int      | 更新时间 |
| delete\_time | int      | 删除时间 |
|                 |          |          |

## cw\_user\_session

| 字段名          | 数据类型 | 注释                                                                             |
| ----------------- | ---------- | ---------------------------------------------------------------------------------- |
| id              | int      |                                                                                  |
| user\_id     | int      | 用户id                                                                           |
| terminal        | tinyint  | 客户端类型：1-微信小程序；2-微信公众号；3-手机H5；4-电脑PC；5-苹果APP；6-安卓APP |
| token           | varchar  | 令牌                                                                             |
| update\_time | int      | 更新时间                                                                         |
| expire\_time | int      | 到期时间                                                                         |
|                 |          |                                                                                  |

## cw\_video\_generate\_log(数字人合成流程记录)

| 字段名             | 数据类型 | 注释                                   |
| -------------------- | ---------- | ---------------------------------------- |
| id                 | int      |                                        |
| user\_id        | int      | 用户id                                 |
| records\_id     | int      | 记录id                                 |
| params             | text     | 合成参数                               |
| status             | tinyint  | 状态：1-合成中，2-合成成功，3-合成失败 |
| type               | tinyint  | 类型：1-数字人，2-视频点播             |
| require\_result | text     | 请求合成结果                           |
| result             | text     | 合成结果                               |
| long\_time      | int      | 视频时长:毫秒                          |
| create\_time    | int      | 创建时间                               |
| update\_time    | int      | 更新时间                               |
| delete\_time    | int      | 删除时间                               |
|                    |          |                                        |

## cw\_video\_records(数字人合成记录)

| 字段名                    | 数据类型 | 注释                                                                                                           |
| --------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| id                        | int      |                                                                                                                |
| user\_id               | int      | 用户id                                                                                                         |
| name                      | varchar  | 视频标题                                                                                                       |
| params                    | text     | 参数                                                                                                           |
| avatar\_params         | text     | 数字人参数                                                                                                     |
| void\_params           | text     | 视频点播参数                                                                                                   |
| void\_type             | tinyint  | 播报类型：1-文本；2-音频                                                                                       |
| status                    | tinyint  | 状态：1-草稿，2-合成中，3-合成成功，4-合成失败                                                                 |
| sub\_status            | tinyint  | 子状态：1-草稿，2-数字人视频合成中，3-数字人视频合成失败，4-视频点播合成中，5-视频点播合成失败，6-视频合成完成 |
| video\_url             | varchar  | 视频地址                                                                                                       |
| cover\_picture\_url | varchar  | 视频封面图                                                                                                     |
| result                    | text     | 合成结果                                                                                                       |
| fail\_reason           | varchar  | 视频合成失败原因                                                                                               |
| long\_time             | varchar  | 视频时长（毫秒）                                                                                               |
| create\_time           | int      | 创建时间                                                                                                       |
| update\_time           | int      | 更新时间                                                                                                       |
| delete\_time           | int      | 删除时间                                                                                                       |
|                           |          |                                                                                                                |