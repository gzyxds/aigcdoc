import { defineConfig } from "vitepress";
	export default defineConfig({
  "title": "艺创AI",
  "titleTemplate": ":title | 艺创AI",
  "description": "专注提供AI系统源代码解决方案的技术团队「超级全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧",
  "head": [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }]
  ],
  "themeConfig": {
    "docFooter": {
      "prev": "上一页",
      "next": "下一页"
    },
    "outlineTitle": "页面导航",
    "nav": [  // 导航栏
      {
        "text": "🏚️首页",
        "link": "/"
      },
      {
        "text": "🛒立即购买",
        "link": "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
      },
      {
        "text": "🖥️项目介绍",
        "items": [
          {
            "text": "📗项目介绍",
            "link": "/product/Project/Product"
          },
          {
            "text": "🤖产品授权",
            "link": "/product/Project/auth"
          },
          {
            "text": "🛒授权购买",
            "link": "/product/Project/shop"
          },
          {
            "text": "🎉系统演示",
            "link": "/product/aigc/demo.html"
          },
          {
            "text": "📢联系我们",
            "link": "/product/Project/contact"
          }
        ]
      },
      {
        "text": "📑部署文档",
        "items": [
          {
            "text": "🤖数字分身",
            "link": "/human"
          },
          {
            "text": "📚企业知识库",
            "link": "/work/deployment/demo"
          },
          {
            "text": "🎉聊天绘画",
            "link": "/chat/index"
          },
          {
            "text": "📝论文创作",
            "link": "/Paper/deployment/bt"
          },
          {
            "text": "📚飞书知识库",
            "link": "https://rwm01l8tn3x.feishu.cn/wiki/VqNCwBO0KiqWIWkSfdHcDigGnZg?from=from_copylink"
          },
        ]
      },
      {
        "text": "🌍官网",
        "link": "https://www.artaigc.cn"
      },
      {
        "text": "🧠AI助手",
        "items": [
          {
            "text": "🤖艺创AI",
            "link": "http://www.cnai.art"
          },
          {
            "text": "📚知识库",
            "link": "https://www.cnai.art/application/layout/kb"
          },
          {
            "text": "🤖AI数字人",
            "link": "https://v.cnai.art"
          },
          {
            "text": "📱APP下载",
            "link": "https://www.123865.com/s/AIVRVv-eEIJA"
          }
        ]
      },
      {
        "text": "🔎生态体系",
        "items": [
          {
            "text": "优刻云计算",
            "link": "https://www.cloudcvm.com/"
          },
          {
            "text": "数字人API",
            "link": "https://api.cnai.art"
          },
          {
            "text": "172号卡",
            "link": "https://www.urlka.cn/"
          },
        ]
      },
      {
        "text": "💬联系我们",
        "items": [
          {
            "text": "📢联系方式",
            "link": "/product/Project/contact"
          },
          {
            "text": "🎉技术支持",
            "link": "/product/Project/contact"
          },

        ]
      }
    ],
    "sidebar": {
      "/work/": [
        {
          "text": "📚 全能知识库",
          "collapsed": false,
          "items": [
            {
              "text": "🐳 Docker部署",
              "link": "/work/deployment/btdocke"
            },
            {
              "text": "📖 知识库文档",
              "link": "https://rwm01l8tn3x.feishu.cn/file/BkclbxFSUohtf8xWYRuc5XB7n1g?from=from_copylink"
            },
            {
              "text": "🎥 功能演示",
              "link": "work/deployment/demo.md"
            },
            {
              "text": "📊 运营指南",
              "link": "/work/fqa/operation"
            },
            {
              "text": "📋 更新日志",
              "link": "/work/deployment/update"
            }
          ]
        },
        {
          "text": "☕ 部署指南Java",
          "collapsed": false,
          "items": [
            {
              "text": "📖 部署文档",
              "link": "https://rwm01l8tn3x.feishu.cn/docx/QHsCduIzVoKxG7xcWEkct1oknyg?from=from_copylink"
            },
            {
              "text": "📊 运营文档",
              "link": "https://rwm01l8tn3x.feishu.cn/docx/K8kBdCDG2ogcsUxX7yycelpJnyh?from=from_copylink"
            }
          ]
        },
        {
          "text": "🔧 功能配置",
          "collapsed": false,
          "items": [
            {
              "text": "📱 微信公众号",
              "link": "/work/front/oa"
            },
            {
              "text": "💬 微信小程序",
              "items": [
                {
                  "text": "📲 手动编译上传",
                  "link": "/work/front/mnp"
                },
                {
                  "text": "⚡ 后台快速上传",
                  "link": "/work/front/fastmnp"
                }
              ]
            },
            {
              "text": "💰 支付配置",
              "items": [
                {
                  "text": "💳 微信支付",
                  "link": "/work/other/wechatpay"
                },
                {
                  "text": "💰 支付宝支付",
                  "link": "/work/other/alipay"
                }
              ]
            },
            {
              "text": "🔓 微信开放平台",
              "link": "/work/other/open"
            },
            {
              "text": "📨 短信服务",
              "link": "/work/other/sms"
            },
            {
              "text": "📦 对象存储",
              "link": "/work/other/oss"
            },
            {
              "text": "🌐 API域名代理",
              "link": "/work/other/proxy"
            },
            {
              "text": "🎨 Dalle绘图",
              "link": "/work/other/dalle"
            }
          ]
        },
        {
          "text": "🤖 AI模型部署",
          "collapsed": false,
          "items": [
            {
              "text": "🧠 ChatGLM部署",
              "link": "/work/third/chatglm"
            },
            {
              "text": "🎨 SD绘图部署",
              "link": "/work/third/sd"
            },
            {
              "text": "🧮 M3E向量模型",
              "link": "/work/third/m3e"
            },
            {
              "text": "💻 LMstudio本地模型",
              "link": "/work/third/LMstudio"
            }
          ]
        },
        {
          "text": "🔍 问题排查",
          "collapsed": false,
          "items": [
            {
              "text": "🆙 版本升级",
              "link": "/work/fqa/version"
            },
            {
              "text": "❌ 错误排查",
              "link": "/work/fqa/error"
            },
            {
              "text": "🚫 500错误",
              "link": "/work/fqa/debug"
            },
            {
              "text": "🤖 GPT指南",
              "link": "/work/fqa/gpt"
            }
          ]
        },
        {
          "text": "💻 开发指南",
          "collapsed": false,
          "items": [
            {
              "text": "📝 基础说明",
              "link": "/work/develop/base"
            },
            {
              "text": "🌐 前端开发",
              "link": "/work/develop/web"
            },
            {
              "text": "🗃️ 数据库结构",
              "link": "/work/develop/database"
            },
            {
              "text": "🔌 数据接口",
              "link": "https://io38j82vph.apifox.cn"
            }
          ]
        }
      ],
      "/human/": [
        {
          "text": "🐳 AI数字人Saas系统",
          "collapsed": false,
          "items": [
            {
              "text": "🏠 项目首页",
              "link": "/hd/"
            },
            {
              "text": "🌐 系统官网",
              "link": "https://www.urlnet.cn/human"
            },
            {
              "text": "📜 更新日志",
              "link": "/human/deployment/update"
            },
            {
              "text": "📖 系统介绍",
              "link": "/human/index"
            },
            {
              "text": "📦 飞书文档",
              "link": "https://rwm01l8tn3x.feishu.cn/docx/NzyOdZ9yFoAfjfxTGZwc9aMpntg?from=from_copylink"
            },
            {
              "text": "🛠️ 宝塔面板部署 ①",
              "link": "/human/deployment/bt"
            },
            {
              "text": "⚙️ 通用部署 ②",
              "link": "/human/deployment/general"
            },
            {
              "text": "🐹 前端部署",
              "collapsed": false,
              "items": [
                {
                  "text": "💬 微信公众号",
                  "link": "/human/front/oa"
                },
                {
                  "text": "🚀 微信小程序",
                  "link": "/human/front/mnp"
                },
                {
                  "text": "🚀 （一键上传）",
                  "link": "/human/front/fastmnp"
                }
              ]
            },
            {
              "text": "🐰 其他配置",
              "collapsed": false,
              "items": [
                {
                  "text": "🔓 微信开放平台（微信帐号统一）",
                  "link": "/human/other/open"
                },
                {
                  "text": "💳 微信支付",
                  "link": "/human/other/wechatpay"
                },
                {
                  "text": "💰 支付宝支付",
                  "link": "/human/other/alipay"
                }
              ]
            },
            {
              "text": "🦧 二次开发",
              "collapsed": false,
              "items": [
                {
                  "text": "🔌 数据接口",
                  "link": "https://78kttw0tjc.apifox.cn"
                }
              ]
            }
          ]
        }
      ],

      "/chat/": [
        {
          "text": "🐳 聊天绘画部署",
          "collapsed": false,
          "items": [
            {
              "text": "🚀 宝塔部署",
              "link": "/chat/deployment/bt"
            },
            {
              "text": "🚢 Docker部署",
              "link": "/chat/deployment/docker"
            },
            {
              "text": "🌈 通用部署",
              "link": "/chat/deployment/general"
            },
            {
              "text": "🔄 更新日志",
              "link": "/chat/deployment/update"
            },
            {
              "text": "📎 聊天绘画PDF",
              "link": "https://rwm01l8tn3x.feishu.cn/slides/DJrEs6r3KlzjpCdo53UcXu8mnYb?from=from_copylink"
            },
            // {
            //   "text": "🚧 运营文档",
            //   "link": "/chat/deployment/Operations"
            // },
            {
              "text": "🎥 系统演示",
              "link": "/chat/deployment/demo"
            }
          ]
        },
        {
          "text": "🐹 前端部署",
          "collapsed": false,
          "items": [
            {
              "text": "🚀 微信公众号",
              "link": "/chat/front/oa"
            },
            {
              "text": "🚧 后台上传微信小程序 ②",
              "link": "/chat/front/fastmnp"
            },
            {
              "text": "🚧 编译上传微信小程序 ①",
              "link": "/chat/front/mnp"
            },
            {
              "text": "🚀 安卓APP",
              "link": "/chat/front/android"
            },
            {
              "text": "🚀 苹果APP",
              "link": "/chat/front/ios"
            }
          ]
        },
        {
          "text": "🎉 第三方部署",
          "collapsed": false,
          "items": [
            {
              "text": "🚀 SD绘图部署",
              "link": "/chat/third/sd"
            }
          ]
        },
        {
          "text": "🐰 其他配置",
          "collapsed": false,
          "items": [
            {
              "text": "🚀 微信开放平台",
              "link": "/chat/config/open"
            },
            {
              "text": "💰 微信支付",
              "link": "/chat/config/wechatpay"
            },
            {
              "text": "💰 支付宝支付",
              "link": "/chat/config/alipay"
            },
            {
              "text": "📱 短信配置",
              "link": "/chat/config/sms"
            },
            {
              "text": "🚀 对象存储",
              "link": "/chat/config/oss"
            },
            {
              "text": "🚀 MJ配置",
              "link": "/chat/config/MJ"
            },
            {
              "text": "🚀 自定义API域名代理",
              "link": "/chat/config/proxy"
            }
          ]
        },
        {
          "text": "🐞 常见问题",
          "collapsed": false,
          "items": [
            {
              "text": "🔄 升级更新",
              "link": "/chat/fqa/version"
            },
            {
              "text": "🚨 报错排查",
              "link": "/chat/fqa/error"
            },
            {
              "text": "🚧 500错误",
              "link": "/chat/fqa/debug"
            },
            {
              "text": "🚀 GPT使用指南",
              "link": "/chat/fqa/gpt"
            }
          ]
        },
        {
          "text": "🦧 二次开发",
          "collapsed": false,
          "items": [
            {
              "text": "🚀 基本介绍",
              "link": "/chat/develop/base"
            },
            {
              "text": "🖥️ 前端开发",
              "link": "/chat/develop/web"
            },
            {
              "text": "🚧 数据库结构",
              "link": "/chat/develop/database"
            }
          ]
        }
      ],
      "/docs/": [],
      "/Paper/": [
        {
          "text": "🐳论文写作部署",
          "collapsed": false,
          "items": [
            {
              "text": "🔄 产品简介",
              "link": "/Paper/deployment/demo"
            },
            {
              "text": "🚀 宝塔部署 ",
              "link": "/Paper/deployment/bt"
            },
            {
              "text": "🚧 通用部署 ",
              "link": "/Paper/deployment/general"
            }
          ]
        },
        {
          "text": "🐹前端部署",
          "collapsed": false,
          "items": [
            {
              "text": "📱 微信公众号",
              "link": "/Paper/front/oa"
            }
          ]
        },
        {
          "text": "🐰其他配置",
          "collapsed": false,
          "items": [
            {
              "text": "🚀 微信开放平台",
              "link": "/Paper/config/open"
            },
            {
              "text": "💰 微信支付",
              "link": "/Paper/config/wechatpay"
            },
            {
              "text": "💰 支付宝支付",
              "link": "/Paper/config/alipay"
            },
            {
              "text": "📱 短信配置",
              "link": "/Paper/config/sms"
            },
            {
              "text": "🚧 对象存储",
              "link": "/Paper/config/oss"
            },
            {
              "text": "🔄 API域名代理",
              "link": "/Paper/config/proxy"
            }
          ]
        },
        {
          "text": "🐞常见问题",
          "collapsed": false,
          "items": [
            {
              "text": "🔄 升级更新",
              "link": "/Paper/fqa/version"
            },
            {
              "text": "🚨 报错排查",
              "link": "/Paper/fqa/error"
            },
            {
              "text": "🚧 500错误",
              "link": "/Paper/fqa/debug"
            },
            {
              "text": "🚀 GPT使用指南",
              "link": "/Paper/fqa/gpt"
            }
          ]
        },
        {
          "text": "🦧二次开发",
          "collapsed": false,
          "items": [
            {
              "text": "🚀 基本介绍",
              "link": "/Paper/develop/base"
            },
            {
              "text": "🌐 前端开发",
              "link": "/Paper/develop/web"
            },
            {
              "text": "🔌 数据接口",
              "link": "https://6h5o4vjmdk.apifox.cn"
            }
          ]
        }
      ],
      "/Project/": [
        {
          "text": "Contact",
          "collapsed": false,
          "link": "/Project/Contact"
        },
        {
          "text": "Project",
          "link": "/Project/Project"
        },
        {
          "text": "Purchase",
          "link": "/Project/Purchase"
        },
        {
          "text": "api-examples",
          "link": "/Project/api-examples"
        },
        {
          "text": "auth",
          "link": "/Project/auth"
        }
      ],
      "/项目介绍/": [
        {
          "text": "项目介绍",
          "items": [
            {
              "text": "产品授权",
              "link": "/项目介绍/产品授权.md"
            },
            {
              "text": "授权购买",
              "link": "/项目介绍/授权购买"
            },
            {
              "text": "联系我们",
              "link": "/项目介绍/联系我们"
            },
            {
              "text": "项目介绍",
              "link": "/项目介绍/项目介绍"
            }
          ]
        },
        {
          "text": "AIGC系统",
          "items": [
            {
              "text": "企业知识库",
              "link": "/项目介绍/AIGC系统/Work"
            },
            {
              "text": "聊天绘画",
              "link": "/聊天绘画/AIGC系统/chat"
            },
            {
              "text": "论文写做",
              "link": "/项目介绍/AIGC系统/paper"
            }
          ]
        }
      ],
      "/project/": [
        {
          "text": "🐳AIGC系统",
          "items": [
            {
              "text": "🐳企业知识库",
              "link": "/project/aigc/Work"
            },
            {
              "text": "🎨聊天绘画",
              "link": "/project/aigc/chat"
            },
            {
              "text": "📖论文写作",
              "link": "/project/aigc/paper"
            }
          ]
        },
        {
          "text": "🗂项目介绍",
          "link": "/project/Product"
        },
        {
          "text": "💰代理分销",
          "link": "/project/agent"
        },
        {
          "text": "🏅商业授权",
          "link": "/project/auth"
        },
        {
          "text": "📞联系我们",
          "link": "/project/contact"
        },
        {
          "text": "📢授权购买",
          "link": "/project/shop"
        },
        {
          "text": "Markdown",
          "link": "/project/Markdown"
        }
      ],
      "/product/": [
        {
          "text": "🎯产品中心",
          "collapsed": false,
          "items": [
            {
              "text": "📖系统介绍",
              "link": "/product/Project/Product"
            },
            {
              "text": "🎫商业授权",
              "link": "/product/Project/auth"
            },
            {
              "text": "🤝代理合作",
              "link": "/product/Project/agent"
            },
            {
              "text": "💎购买授权",
              "link": "/product/Project/shop"
            },
            {
              "text": "📞联系我们",
              "link": "/product/Project/contact"
            },
            {
              "text": "⭐在线演示",
              "link": "/product/Project/demo"
            }
          ]
        },

        {
          "text": "🎉艺创AI系统",
          "collapsed": false,
          "items": [
            {
              "text": "🖥️企业知识库",
              "link": "/product/aigc/Work"
            },
            {
              "text": "🎭SaaS数字人",
              "link": "/hd"
            },
            {
              "text": "🎨聊天绘画",
              "link": "/product/aigc/chat"
            },
            {
              "text": "📖论文写作",
              "link": "/product/aigc/paper"
            },
            {
              "text": "🖥️系统官网",
              "link": "https://www.urlnet.cn/"
            }

          ]
        },

        {
          "text": "🍵友情连接",
          "collapsed": false,
          "items": [
            {
              "text": "☁优刻云",
              "link": "https://www.cloudcvm.com/"
            },
            {
              "text": "📫艺创官网",
              "link": "http://www.urlnet.cn/"
            },
            {
              "text": "🔍172号卡",
              "link": "http://www.urlka.cn/"
            },
            {
              "text": "🎉支付系统",
              "link": "http://www.payphp.cn/"

            }

          ]
        }
      ]
    },  //  侧边栏页面导航结束


    "socialLinks": [    //    社交链接
      {
        "icon": "slack",
        "link": "https://urlnet.cn"
      },
      {
        "icon": "npm",
        "link": "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
      },

      {
        "icon": "github",
        "link": "https://artaigc.cn"
      },

    ],

    "i18nRouting": false,
    "logo": "/images/logo.svg",
    "siteTitle": " 艺创AI ",  // 显示网站标题
    "level": 2,
    "label": "页面导航",
    "lastUpdated": {
      "text": "最后更新时间"
    },
    "head": [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
      ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
      ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }]
    ],
    // "carbonAds": {
    //   "carbon": "CEBDT27Y"
    // },
    // "carbon": {  // 自定义组件
    //   "key": "CEBDT27Y",
    //   "component": "EditLink",
    //   "componentProps": {
    //     "repo": "vuejs/vitepress",
    //     "branch": "main",
    //     "dir": "docs"
    //   },
    //   "customComponent": "EditLink",  // 自定义组件名称
    //   "customComponentProps": {
    //     "repo": "vuejs/vitepress",
    //     "branch": "main",
    //     "dir": "docs"
    //   },
    //   "customComponentProps2": {  // 自定义组件名称2
    //     "repo": "vuejs/vitepress",
    //     "branch": "main",
    //     "dir": "docs"
      // }
    "chunkSizeWarningLimit": 1500,
    "search": {   // 搜索
      "provider": "local",  // 本地搜索
      "options": {   // 配置项
        "appId": "",
        "apiKey": "",
        "indexName": "搜索", // 索引名称
        "locales": {   // 配置多语言
          "zh": {
            "translations": {  // 搜索框提示语
              "button": {  // 搜索按钮
                "buttonText": "搜索文档",
                "buttonAriaLabel": "搜索文档"
              },
              "modal": {
              }
            }
          },
          "en": {
            "translations": {
              "button": {
                "buttonText": "搜索文档",
                "buttonAriaLabel": "搜索文档"
              },
              "modal": {
              }
            }
          }
        }
      }
    },
    "langMenuLabel": "多语言",
    "langs": [
      {}
    ],
    "returnToTopLabel": "返回顶部",
    "lastUpdatedText": "最近更新于",
    "externalLinkIcon": true,
    "outline": {},
    "darkModeSwitchLabel": "主题",
    "lightModeSwitchTitle": "切换到浅色模式",
    "darkModeSwitchTitle": "切换到深色模式",
    "editLink": {
      "text": "编辑文档",
      "pattern": "https://github.com/gzyxds/chataigc-doc"
    },
    "footer": {
      "copyright": "版权所有 © 2025 艺创AI · 让创作更简单 | 赣 ICP备2022147728号-1 | 🚀 专业AI解决方案提供商"
    },
    "sidebarMenuLabel": "菜单"
  },
  "markdown": {
    "lineNumbers": true
  },
  "srcDir": "./",
  "assetsDir": "static",
  "sitemap": {
    "hostname": "https://www.cnai.art",
    "lastmodDateOnly": false
  },
  "locales": {},
  "cacheDir": "./.vitepress/cache",
  "lang": "en-US",
  "base": "/", // 站点的基础路径，默认值是 /
  "outDir": "./.vitepress/dist",
  "cleanUrls": false,
  "rewrites": {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md"
  }
});
