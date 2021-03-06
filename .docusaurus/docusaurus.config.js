export default {
    "title": "CSHOME",
    "tagline": "CS学习导航网站",
    "url": "https://your-docusaurus-test-site.com",
    "baseUrl": "/",
    "onBrokenLinks": "throw",
    "onBrokenMarkdownLinks": "warn",
    "favicon": "img/favicon.ico",
    "organizationName": "facebook",
    "projectName": "docusaurus",
    "i18n": {
        "defaultLocale": "cn",
        "locales": [
            "cn",
            "en"
        ],
        "localeConfigs": {}
    },
    "themeConfig": {
        "navbar": {
            "title": "CSHOME",
            "items": [{
                    "to": "/blog",
                    "label": "动态",
                    "position": "left"
                },
                {
                    "type": "doc",
                    "docId": "intro",
                    "position": "left",
                    "label": "计算机基础",
                    "activeSidebarClassName": "navbar__link--active"
                },
                {
                    "to": "/engineering/support",
                    "label": "工程能力基础",
                    "position": "left",
                    "activeBaseRegex": "/engineering/"
                },
                {
                    "to": "/algorithm/动态规划/基础",
                    "label": "算法",
                    "position": "left",
                    "activeBaseRegex": "/algorithm/"
                },
                {
                    "to": "/frontend/JavaScript/简介",
                    "label": "前端",
                    "position": "left",
                    "activeBaseRegex": "/frontend/"
                },
                {
                    "href": "https://github.com/acsamson",
                    "label": "GitHub",
                    "position": "right"
                }
            ],
            "hideOnScroll": false
        },
        "footer": {
            "style": "dark",
            "links": [{
                    "title": "Docs",
                    "items": [{
                        "label": "Tutorial",
                        "to": "/docs/intro"
                    }]
                },
                {
                    "title": "engineering",
                    "items": [{
                            "label": "Stack Overflow",
                            "href": "https://stackoverflow.com/questions/tagged/docusaurus"
                        },
                        {
                            "label": "Discord",
                            "href": "https://discordapp.com/invite/docusaurus"
                        },
                        {
                            "label": "Twitter",
                            "href": "https://twitter.com/docusaurus"
                        }
                    ]
                },
                {
                    "title": "More",
                    "items": [{
                            "label": "Blog",
                            "to": "/blog"
                        },
                        {
                            "label": "GitHub",
                            "href": "https://github.com/facebook/docusaurus"
                        }
                    ]
                }
            ],
            "copyright": "Copyright © 2021 My Project, Inc. Built with Docusaurus."
        },
        "prism": {
            "theme": {
                "plain": {
                    "color": "#393A34",
                    "backgroundColor": "#f6f8fa"
                },
                "styles": [{
                        "types": [
                            "comment",
                            "prolog",
                            "doctype",
                            "cdata"
                        ],
                        "style": {
                            "color": "#999988",
                            "fontStyle": "italic"
                        }
                    },
                    {
                        "types": [
                            "namespace"
                        ],
                        "style": {
                            "opacity": 0.7
                        }
                    },
                    {
                        "types": [
                            "string",
                            "attr-value"
                        ],
                        "style": {
                            "color": "#e3116c"
                        }
                    },
                    {
                        "types": [
                            "punctuation",
                            "operator"
                        ],
                        "style": {
                            "color": "#393A34"
                        }
                    },
                    {
                        "types": [
                            "entity",
                            "url",
                            "symbol",
                            "number",
                            "boolean",
                            "variable",
                            "constant",
                            "property",
                            "regex",
                            "inserted"
                        ],
                        "style": {
                            "color": "#36acaa"
                        }
                    },
                    {
                        "types": [
                            "atrule",
                            "keyword",
                            "attr-name",
                            "selector"
                        ],
                        "style": {
                            "color": "#00a4db"
                        }
                    },
                    {
                        "types": [
                            "function",
                            "deleted",
                            "tag"
                        ],
                        "style": {
                            "color": "#d73a49"
                        }
                    },
                    {
                        "types": [
                            "function-variable"
                        ],
                        "style": {
                            "color": "#6f42c1"
                        }
                    },
                    {
                        "types": [
                            "tag",
                            "selector",
                            "keyword"
                        ],
                        "style": {
                            "color": "#00009f"
                        }
                    }
                ]
            },
            "darkTheme": {
                "plain": {
                    "color": "#F8F8F2",
                    "backgroundColor": "#282A36"
                },
                "styles": [{
                        "types": [
                            "prolog",
                            "constant",
                            "builtin"
                        ],
                        "style": {
                            "color": "rgb(189, 147, 249)"
                        }
                    },
                    {
                        "types": [
                            "inserted",
                            "function"
                        ],
                        "style": {
                            "color": "rgb(80, 250, 123)"
                        }
                    },
                    {
                        "types": [
                            "deleted"
                        ],
                        "style": {
                            "color": "rgb(255, 85, 85)"
                        }
                    },
                    {
                        "types": [
                            "changed"
                        ],
                        "style": {
                            "color": "rgb(255, 184, 108)"
                        }
                    },
                    {
                        "types": [
                            "punctuation",
                            "symbol"
                        ],
                        "style": {
                            "color": "rgb(248, 248, 242)"
                        }
                    },
                    {
                        "types": [
                            "string",
                            "char",
                            "tag",
                            "selector"
                        ],
                        "style": {
                            "color": "rgb(255, 121, 198)"
                        }
                    },
                    {
                        "types": [
                            "keyword",
                            "variable"
                        ],
                        "style": {
                            "color": "rgb(189, 147, 249)",
                            "fontStyle": "italic"
                        }
                    },
                    {
                        "types": [
                            "comment"
                        ],
                        "style": {
                            "color": "rgb(98, 114, 164)"
                        }
                    },
                    {
                        "types": [
                            "attr-name"
                        ],
                        "style": {
                            "color": "rgb(241, 250, 140)"
                        }
                    }
                ]
            },
            "additionalLanguages": []
        },
        "colorMode": {
            "defaultMode": "light",
            "disableSwitch": false,
            "respectPrefersColorScheme": false,
            "switchConfig": {
                "darkIcon": "🌜",
                "darkIconStyle": {},
                "lightIcon": "🌞",
                "lightIconStyle": {}
            }
        },
        "docs": {
            "versionPersistence": "localStorage"
        },
        "metadatas": [],
        "hideableSidebar": false
    },
    "presets": [
        [
            "@docusaurus/preset-classic",
            {
                "docs": {
                    "sidebarPath": "/Users/lianshanchun/code/cshome/sidebars.js",
                    "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
                },
                "blog": {
                    "showReadingTime": true,
                    "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
                },
                "theme": {
                    "customCss": "/Users/lianshanchun/code/cshome/src/css/custom.css"
                }
            }
        ]
    ],
    "plugins": [
        [
            "@docusaurus/plugin-content-docs",
            {
                "id": "engineering",
                "path": "engineering",
                "editUrl": "https://github.com/acsamson/cshome/edit/master/",
                "routeBasePath": "engineering",
                "sidebarPath": "/Users/lianshanchun/code/cshome/sidebars.js"
            }
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                "id": "algorithm",
                "path": "algorithm",
                "editUrl": "https://github.com/acsamson/cshome/edit/master/",
                "routeBasePath": "algorithm",
                "sidebarPath": "/Users/lianshanchun/code/cshome/sidebars.js"
            }
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                "id": "frontend",
                "path": "frontend",
                "editUrl": "https://github.com/acsamson/cshome/edit/master/",
                "routeBasePath": "frontend",
                "sidebarPath": "/Users/lianshanchun/code/cshome/sidebars.js"
            }
        ]
    ],
    "baseUrlIssueBanner": true,
    "onDuplicateRoutes": "warn",
    "customFields": {},
    "themes": [],
    "titleDelimiter": "|",
    "noIndex": false
};