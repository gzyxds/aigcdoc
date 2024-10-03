import { defineConfig } from "vitepress";
	export default defineConfig({
  "title": "AIGC创作系统",
  "description": "专注提供AI系统源代码解决方案的技术团队「超级全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧",
  "themeConfig": {  // 主题配置 配置  
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
            "link": "/Project/Project"
          },
          {
            "text": "🤖产品授权",
            "link": "/Project/Project"
          },
          {
            "text": "🛒授权购买",
            "link": "/Project/Project"
          },
          {
            "text": "☎️联系我们",
            "link": "/Project/Project"
          }
        ]
      },
      {
        "text": "⏬部署文档",
        "items": [
          {
            "text": "🤖企知识库",
            "link": "/docs/work/work"
          },
          {
            "text": "🎉聊天绘画",
            "link": "/docs/work/index"
          },
          {
            "text": "📝论文写作",
            "link": "/docs/work/index"
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
      },
      {
        "text": " 🍉指南",
        "items": [
          {
            "text": "介绍",
            "items": [
              {
                "text": "前言",
                "link": "/preface"
              }
            ]
          }
        ]
      }
    ],
    "sidebar": {
      "/Project/": [
        {
          "text": "🖥️项目介绍",
          collapsed: false,// 默认展开
          "items": [
            {
              "text": "",
              "items": [
                {
                  "text": "🖥️项目介绍",
                  "link": "/Project/Auth"
                },
                {
                  "text": "🛒授权购买",
                  "link": "/Project/Contact"
                },
                {
                  "text": "☎️联系我们",
                  "link": "/Project/Purchase"
                },
                {
                  "text": "🤖产品授权",
                  "link": "/Project/Purchase"
                }
              ]
            }
          ]
        },
        {
          "text": "🛒授权购买",
          collapsed: false,// 默认展开
          "link": "/Project/Contact"
        },
        {
          "text": "Contact",
          "link": "/Project/Contact"
        },
        {
          "text": "Purchase",
          "link": "/Project/Purchase"
        },
        {
          "text": "前言",
          "link": "/style"
        },
        {
          "text": "🖥️友情推荐",
          "collapsed": false,
          "items": [
            {
              "text": "",
              "items": [
                {
                  "text": "AIGC官网",
                  "link": "https://www.urlnet.cn/"
                },
                {
                  "text": "优刻云",
                  "link": "https://www.cloudcvm.com/ "
                },
                {
                  "text": "Payphp",
                  "link": "https://www.payphp.cn"
                },
                {
                  "text": "枭格科技",
                  "link": "https://www.comnew.cn/"
                }
              ]
            }
          ]
        }
      ],
      "/docs/": [
        {
          "text": "🖥️项目介绍",
          collapsed: false,  // 默认展开
          // collapsed: true,  // 默认折叠
          "items": [
            {
              "text": "📗项目介绍",
              "link": "/项目介绍/项目介绍" 
            },
            {
              "text": "🤖产品授权",
              "link": "/Project/Auth"
            },
            {
              "text": "🛒授权购买",
              "link": "/Project/Contact"
            },
            {
              "text": "☎️联系我们",
              "link": "/Project/Purchase"
            }
          ]
        },
        {
          "text": "3️⃣ 第三方部署",
          "items": [
            {
              "text": "ChatGLM本地模型部署",
              "link": ""
            },
            {
              "text": "M3E向量模型部署",
              "link": ""
            },
            {
              "text": "SD绘画部署",
              "link": ""
            }
          ]
        },
        {
          "text": "🐹 前端部署",
          "items": [
            {
              "text": "微信公众号",
              "link": ""
            },
            {
              "text": "编译上传微信小程序",
              "link": ""
            }
          ]
        },
        {
          "text": "🐰 其他配置",
          "items": [
            {
              "text": "微信支付",
              "link": ""
            },
            {
              "text": "支付宝支付",
              "link": ""
            },
            {
              "text": "短信配置",
              "link": ""
            },
            {
              "text": "对象存储",
              "link": ""
            },
            {
              "text": "API域名代理",
              "link": ""
            },
            {
              "text": "Dalle绘画配置",
              "link": ""
            }
          ]
        },
        {
          "text": "🐞 常见问题",
          "items": [
            {
              "text": "升级更新",
              "link": ""
            },
            {
              "text": "报错排查",
              "link": ""
            },
            {
              "text": "500错误",
              "link": ""
            },
            {
              "text": "GPT使用指南",
              "link": ""
            }
          ]
        },
        {
          "text": "🦧 二次开发",
          "items": [
            {
              "text": "基本介绍",
              "link": ""
            },
            {
              "text": " 前端开发",
              "link": ""
            },
            {
              "text": "数据库结构",
              "link": ""
            },
            {
              "text": "数据接口",
              "link": ""
            }
          ]
        },
        {
          "text": "📗产品文档",
          "items": [
            {
              "text": "🎉聊天绘画",
              "link": "/docs/chat"
            },
            {
              "text": "🤖企知识库",
              "link": "/docs/work"
            },
            {
              "text": "📝论文写作",
              "link": "/docs/Paper"
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
      "label": "On this page"
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

    "footer": { // 底部
      "message": "Released the Aigc创作系统",
      "copyright": "上海枭格网络科技有限公司 copyright@ 2024 Albert AIGC系统源码 ICP备2022147728号"
    }
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
