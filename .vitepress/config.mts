import { defineConfig } from "vitepress";
	export default defineConfig({
  "title": "AIGC创作系统",
  "description": "专注提供AI系统源代码解决方案的技术团队「超级全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧",
  "themeConfig": {
    "nav": [
      {
        "text": "🏚️首页",
        "link": "/"
      },
      {
        "text": "🖥️项目介绍",
        "items": [
          {
            "text": "📗项目介绍",
            "link": "/项目介绍/项目介绍"
          },
          {
            "text": "🤖产品授权",
            "link": "/项目介绍/产品授权"
          },
          {
            "text": "🛒授权购买",
            "link": "/项目介绍/授权购买"
          },
          {
            "text": "☎️联系我们",
            "link": "/项目介绍/联系我们"
          }
        ]
      },
      {
        "text": "⏬部署文档",
        "items": [
          {
            "text": "🤖企知识库",
            "link": "/work/index"
          },
          {
            "text": "🎉聊天绘画",
            "link": "/chat/index"
          },
          {
            "text": "📝论文写作",
            "link": "/paper/index"
          }
        ]
      },
      {
        "text": "💻官网",
        "link": "https://www.urlnet.cn"
      },
      {
        "text": "🏅AIGC助手",
        "items": [
          {
            "text": "全能知识库",
            "link": "https://www.urlnet.cn"
          },
          {
            "text": "聊天绘画",
            "link": "https://www.urlnet.cn"
          }
        ]
      },
      {
        "text": "🔎生态体系",
        "items": [
          {
            "text": "API接口",
            "link": "https://api.cnai.art"
          },
          {
            "text": "AI对话",
            "link": "https://api.cnai.art"
          },
          {
            "text": "AI创作",
            "link": "https://api.cnai.art"
          },
          {
            "text": "AI机器人",
            "link": "https://api.cnai.art"
          },
          {
            "text": "AI知识库",
            "link": "https://api.cnai.art"
          }
        ]
      },
      {
        "text": "💬联系我们",
        "items": [
          {
            "text": "联系方式",
            "link": "/doc/contact"
          },
          {
            "text": "技术支持",
            "link": "/doc/contact"
          },
          {
            "text": "🍵赞助",
            "link": "/sponsor/index"
          }
        ]
      }
    ],
    "sidebar": {
      "/work/": [
        {
          "text": "🐳知识库部署",
          "items": [
            {
              "text": "宝塔面板Docker部署",
              "link": "/work/🐳知识库部署/宝塔面板Docker部署"
            },
            {
              "text": "Markdown扩展示例",
              "link": "/work/🐳知识库部署/Markdown扩展示例"
            },
            {
              "text": "API示例",
              "link": "/work/🐳知识库部署/API示例"
            },
            {
              "text": "update",
              "link": "/work/🐳知识库部署/update"
            },
            {
              "text": "work",
              "link": "/work/🐳知识库部署/work"
            }
          ]
        },
        {
          "text": "🐹前端部署",
          "items": [
            {
              "text": "后台上传微信小程序",
              "link": "/work/🐹前端部署/后台上传微信小程序"
            },
            {
              "text": "微信公众号",
              "link": "/work/🐹前端部署/微信公众号"
            },
            {
              "text": "编译上传微信小程序",
              "link": "/work/🐹前端部署/编译上传微信小程序"
            }
          ]
        },
        {
          "text": "3️⃣第三方部署",
          "items": [
            {
              "text": "ChatGLM本地模型部署",
              "link": "/work/3️⃣第三方部署/ChatGLM本地模型部署"
            },
            {
              "text": "LMstudio（本地大模型）",
              "link": "/work/3️⃣第三方部署/LMstudio（本地大模型）"
            },
            {
              "text": "M3E向量模型部署",
              "link": "/work/3️⃣第三方部署/M3E向量模型部署"
            },
            {
              "text": "SD绘图部署",
              "link": "/work/3️⃣第三方部署/SD绘图部署"
            },
            {
              "text": "接入个人企业微信",
              "link": "/work/3️⃣第三方部署/接入个人企业微信"
            }
          ]
        },
        {
          "text": "🐰其他配置",
          collapsed: true, // 可选，默认值：false
          "items": [
            {
              "text": "Dalle绘画配置",
              "link": "/work/🐰其他配置/Dalle绘画配置"
            },
            {
              "text": "对象存储",
              "link": "/work/🐰其他配置/对象存储"
            },
            {
              "text": "微信开放平台",
              "link": "/work/🐰其他配置/微信开放平台"
            },
            {
              "text": "微信支付",
              "link": "/work/🐰其他配置/微信支付"
            },
            {
              "text": "支付宝支付",
              "link": "/work/🐰其他配置/支付宝支付"
            },
            {
              "text": "短信配置",
              "link": "/work/🐰其他配置/短信配置"
            },
            {
              "text": "自定义API域名代理",
              "link": "/work/🐰其他配置/自定义API域名代理"
            }
          ]
        },
        {
          "text": "🐞常见问题",
          "items": [
            {
              "text": "500错误",
              "link": "/work/🐞常见问题/500错误"
            },
            {
              "text": "GPT使用指南",
              "link": "/work/🐞常见问题/GPT使用指南"
            },
            {
              "text": "报错排查",
              "link": "/work/🐞常见问题/报错排查"
            }
          ]
        },
        {
          "text": "🦧二次开发",
          "items": [
            {
              "text": "前端开发",
              "link": "/work/🦧二次开发/前端开发"
            },
            {
              "text": "基本介绍",
              "link": "/work/🦧二次开发/基本介绍"
            },
            {
              "text": "数据库结构",
              "link": "/work/🦧二次开发/数据库结构"
            },
            {
              "text": "数据接口",
              "link": "/work/🦧二次开发/数据接口"
            }
          ]
        },
        {
          "text": "index",
          "link": "/work/index"
        }
      ],
      "/chat/": [
        {
          "text": "聊天绘画部署",
          "items": [
            {
              "text": "后台上传微信小程序",
              "link": "/chat/聊天绘画部署/后台上传微信小程序"
            },
            {
              "text": "微信公众号",
              "link": "/chat/聊天绘画部署/微信公众号"
            },
            {
              "text": "编译上传微信小程序",
              "link": "/chat/聊天绘画部署/编译上传微信小程序"
            }
          ]
        },
        {
          "text": "二次开发",
          "items": [
            {
              "text": "前端开发",
              "link": "/chat/二次开发/前端开发"
            },
            {
              "text": "基本介绍",
              "link": "/chat/二次开发/基本介绍"
            },
            {
              "text": "数据库结构",
              "link": "/chat/二次开发/数据库结构"
            },
            {
              "text": "数据接口",
              "link": "/chat/二次开发/数据接口"
            }
          ]
        },
        {
          "text": "其他配置",
          "items": [
            {
              "text": "Dalle绘画配置",
              "link": "/chat/其他配置/Dalle绘画配置"
            },
            {
              "text": "对象存储",
              "link": "/chat/其他配置/对象存储"
            },
            {
              "text": "微信开放平台",
              "link": "/chat/其他配置/微信开放平台"
            },
            {
              "text": "微信支付",
              "link": "/chat/其他配置/微信支付"
            },
            {
              "text": "支付宝支付",
              "link": "/chat/其他配置/支付宝支付"
            },
            {
              "text": "短信配置",
              "link": "/chat/其他配置/短信配置"
            },
            {
              "text": "自定义API域名代理",
              "link": "/chat/其他配置/自定义API域名代理"
            }
          ]
        },
        {
          "text": "常见问题",
          "items": [
            {
              "text": "500错误",
              "link": "/chat/常见问题/500错误"
            },
            {
              "text": "GPT使用指南",
              "link": "/chat/常见问题/GPT使用指南"
            },
            {
              "text": "升级更新",
              "link": "/chat/常见问题/升级更新"
            },
            {
              "text": "报错排查",
              "link": "/chat/常见问题/报错排查"
            }
          ]
        },
        {
          "text": "服务端部署",
          "items": [
            {
              "text": "api-examples",
              "link": "/chat/服务端部署/api-examples"
            },
            {
              "text": "markdown-examples",
              "link": "/chat/服务端部署/markdown-examples"
            },
            {
              "text": "work",
              "link": "/chat/服务端部署/work"
            },
            {
              "text": "宝塔面板Docker部署",
              "link": "/chat/服务端部署/宝塔面板Docker部署"
            }
          ]
        },
        {
          "text": "第三方部署",
          "items": [
            {
              "text": "ChatGLM本地模型部署",
              "link": "/chat/第三方部署/ChatGLM本地模型部署"
            },
            {
              "text": "LMstudio（本地大模型）",
              "link": "/chat/第三方部署/LMstudio（本地大模型）"
            },
            {
              "text": "M3E向量模型部署",
              "link": "/chat/第三方部署/M3E向量模型部署"
            },
            {
              "text": "SD绘图部署",
              "link": "/chat/第三方部署/SD绘图部署"
            },
            {
              "text": "企业微信",
              "link": "/chat/第三方部署/企业微信"
            }
          ]
        },
        {
          "text": "index",
          "link": "/chat/index"
        }
      ],
      "/docs/": [],
      "/Paper/": [
        {
          "text": "二次开发",
          "items": [
            {
              "text": "前端开发",
              "link": "/Paper/二次开发/前端开发"
            },
            {
              "text": "基本介绍",
              "link": "/Paper/二次开发/基本介绍"
            },
            {
              "text": "数据库结构",
              "link": "/Paper/二次开发/数据库结构"
            },
            {
              "text": "数据接口",
              "link": "/Paper/二次开发/数据接口"
            }
          ]
        },
        {
          "text": "其他配置",
          "items": [
            {
              "text": "Dalle绘画配置",
              "link": "/Paper/其他配置/Dalle绘画配置"
            },
            {
              "text": "对象存储",
              "link": "/Paper/其他配置/对象存储"
            },
            {
              "text": "微信开放平台",
              "link": "/Paper/其他配置/微信开放平台"
            },
            {
              "text": "微信支付",
              "link": "/Paper/其他配置/微信支付"
            },
            {
              "text": "支付宝支付",
              "link": "/Paper/其他配置/支付宝支付"
            },
            {
              "text": "短信配置",
              "link": "/Paper/其他配置/短信配置"
            },
            {
              "text": "自定义API域名代理",
              "link": "/Paper/其他配置/自定义API域名代理"
            }
          ]
        },
        {
          "text": "常见问题",
          "items": [
            {
              "text": "500错误",
              "link": "/Paper/常见问题/500错误"
            },
            {
              "text": "GPT使用指南",
              "link": "/Paper/常见问题/GPT使用指南"
            },
            {
              "text": "升级更新",
              "link": "/Paper/常见问题/升级更新"
            },
            {
              "text": "报错排查",
              "link": "/Paper/常见问题/报错排查"
            }
          ]
        },
        {
          "text": "服务端部署",
          "items": [
            {
              "text": "api-examples",
              "link": "/Paper/服务端部署/api-examples"
            },
            {
              "text": "markdown-examples",
              "link": "/Paper/服务端部署/markdown-examples"
            },
            {
              "text": "work",
              "link": "/Paper/服务端部署/work"
            },
            {
              "text": "宝塔面板Docker部署",
              "link": "/Paper/服务端部署/宝塔面板Docker部署"
            }
          ]
        },
        {
          "text": "第三方部署",
          "items": [
            {
              "text": "ChatGLM本地模型部署",
              "link": "/Paper/第三方部署/ChatGLM本地模型部署"
            },
            {
              "text": "LMstudio（本地大模型）",
              "link": "/Paper/第三方部署/LMstudio（本地大模型）"
            },
            {
              "text": "M3E向量模型部署",
              "link": "/Paper/第三方部署/M3E向量模型部署"
            },
            {
              "text": "SD绘图部署",
              "link": "/Paper/第三方部署/SD绘图部署"
            },
            {
              "text": "企业微信",
              "link": "/Paper/第三方部署/企业微信"
            }
          ]
        },
        {
          "text": "论文部署",
          "items": [
            {
              "text": "后台上传微信小程序",
              "link": "/Paper/论文部署/后台上传微信小程序"
            },
            {
              "text": "微信公众号",
              "link": "/Paper/论文部署/微信公众号"
            },
            {
              "text": "编译上传微信小程序",
              "link": "/Paper/论文部署/编译上传微信小程序"
            }
          ]
        },
        {
          "text": "index",
          "link": "/Paper/index"
        }
      ],
      "/Project/": [
        {
          "text": "Contact",
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
              "link": "/项目介绍/AIGC系统/chat"
            },
            {
              "text": "论文写做",
              "link": "/项目介绍/AIGC系统/paper"
            }
          ]
        }
      ]
    },
    "socialLinks": [
      {
        "icon": "github",
        "link": "https://github.com/vuejs/vitepress"
      },
      {
        "icon": "discord",
        "link": "https://github.com/vuejs/vitepress"
      },
      {
        "icon": "facebook",
        "link": "https://github.com/vuejs/vitepress"
      }
    ],
    "externalLinkIcon": true,
    "i18nRouting": true,
    "logo": "\\images\\logo.png",
    "outline": {
      "level": 2,
      "label": "页面导航"
    },
    "search": {
      "provider": "local",
      "options": {
        "appId": "",
        "apiKey": "",
        "indexName": "",
        "locales": {
          "zh": {
            "placeholder": "搜索文档",
            "translations": {
              "button": {
                "buttonText": "搜索文档",
                "buttonAriaLabel": "搜索文档"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "清除查询条件",
                  "resetButtonAriaLabel": "清除查询条件",
                  "cancelButtonText": "取消",
                  "cancelButtonAriaLabel": "取消"
                },
                "startScreen": {
                  "recentSearchesTitle": "搜索历史",
                  "noRecentSearchesText": "没有搜索历史",
                  "saveRecentSearchButtonTitle": "保存至搜索历史",
                  "removeRecentSearchButtonTitle": "从搜索历史中移除",
                  "favoriteSearchesTitle": "收藏",
                  "removeFavoriteSearchButtonTitle": "从收藏中移除"
                },
                "errorScreen": {
                  "titleText": "无法获取结果",
                  "helpText": "你可能需要检查你的网络连接"
                },
                "footer": {
                  "selectText": "选择",
                  "navigateText": "切换",
                  "closeText": "关闭",
                  "searchByText": "搜索提供者"
                },
                "noResultsScreen": {
                  "noResultsText": "无法找到相关结果",
                  "suggestedQueryText": "你可以尝试查询",
                  "reportMissingResultsText": "你认为该查询应该有结果？",
                  "reportMissingResultsLinkText": "点击反馈"
                }
              }
            }
          },
          "en": {
            "placeholder": "Search docs",
            "translations": {
              "button": {
                "buttonText": "Search docs",
                "buttonAriaLabel": "Search docs"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "Clear query",
                  "resetButtonAriaLabel": "Clear query",
                  "cancelButtonText": "Cancel",
                  "cancelButtonAriaLabel": "Cancel"
                },
                "startScreen": {
                  "recentSearchesTitle": "Recent searches",
                  "noRecentSearchesText": "No recent searches",
                  "saveRecentSearchButtonTitle": "Save search",
                  "removeRecentSearchButtonTitle": "Remove search",
                  "favoriteSearchesTitle": "Favorites",
                  "removeFavoriteSearchButtonTitle": "Remove from favorites"
                },
                "errorScreen": {
                  "titleText": "Unable to fetch results",
                  "helpText": "You may want to check your network connection"
                },
                "footer": {
                  "selectText": "select",
                  "navigateText": "navigate",
                  "closeText": "close",
                  "searchByText": "Search by"
                },
                "noResultsScreen": {
                  "noResultsText": "No results for",
                  "suggestedQueryText": "You can try searching for",
                  "reportMissingResultsText": "You think it should have results?",
                  "reportMissingResultsLinkText": "Click here to report it"
                }
              }
            }
          }
        }
      }
    },
    "langMenuLabel": "多语言",
    "returnToTopLabel": "回到顶部",
    "sidebarMenuLabel": "菜单",
    "darkModeSwitchLabel": "主题",
    "lightModeSwitchTitle": "切换到浅色模式",
    "darkModeSwitchTitle": "切换到深色模式",
    "editLink": {
      "text": "编辑文档",
      "pattern": "https://github.com/zhangdi168/VitePressSimple/edit/main/docs/:path"
    },
    "docFooter": {
      "prev": "上一页",
      "next": "下一页"
    },
    "footer": {
      "message": "Released the ChatGPT-AIGC under the MIT License. Copyright © 2024 AIGC创作系统",
      "copyright": "上海枭格网络科技有限公司 copyright@ 2024 Albert AIGC系统源码 ICP备2022147728号"
    },
    siteTitle: false
    // siteTitle: false  // 不显示标题
  },
  "srcDir": "./",
  "assetsDir": "static",
  "sitemap": {
    "hostname": "https://example.com",
    "lastmodDateOnly": false
  },
  "locales": {},
  "cacheDir": "./.vitepress/cache",
  "titleTemplate": "AI系统源码|ChatAigc聊天绘画系统|ai平台源码|ai创作系统源码|ai官网源码",
  "lang": "en-US",
  "base": "/",
  "outDir": "./.vitepress/dist",
  "cleanUrls": false,
  "rewrites": {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md"
  }
});
