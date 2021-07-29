/*
 * @Description: 
 * @Author: acsamson
 * @Date: 2021-07-29 05:06:01
 * @LastEditTime: 2021-07-29 11:32:42
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /cshome/docusaurus.config.js
 */
const organizationName = 'acsamson' // Usually your GitHub org/user name.
const projectName = 'cshome' // Usually your repo name.
const branch = 'main'
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'CSHOME',
    tagline: 'CS学习导航网站',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    i18n: {
        defaultLocale: 'cn',
        locales: ['cn', 'en'],
    },
    themeConfig: {
        navbar: {
            title: 'SamTools',
            // logo: {
            //     alt: 'My Site Logo',
            //     src: 'img/logo.svg',
            // },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: '计算机基础',
                },
                {
                    to: '/engineering/support',
                    label: '工程能力基础',
                    position: 'left',
                    activeBaseRegex: '/engineering/'
                },
                {
                    to: '/algorithm/动态规划/基础',
                    label: '算法',
                    position: 'left',
                    activeBaseRegex: '/algorithm/'
                },
                {
                    to: '/blog',
                    label: '博客',
                    position: 'left'
                },
                {
                    to: '/frontend/JavaScript/简介',
                    label: '前端',
                    position: 'left',
                    activeBaseRegex: '/frontend/'
                },
                {
                    href: 'https://github.com/acsamson',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Tutorial',
                        to: '/docs/intro',
                    }, ],
                },
                {
                    title: 'engineering',
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'engineering',
                path: 'engineering',
                editUrl: `https://github.com/${organizationName}/${projectName}/edit/${branch}/website/`,
                routeBasePath: 'engineering',
                sidebarPath: require.resolve('./sidebars.js')
            }
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'algorithm',
                path: 'algorithm',
                editUrl: `https://github.com/${organizationName}/${projectName}/edit/${branch}/website/`,
                routeBasePath: 'algorithm',
                sidebarPath: require.resolve('./sidebars.js')
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'frontend',
                path: 'frontend',
                editUrl: `https://github.com/${organizationName}/${projectName}/edit/${branch}/website/`,
                routeBasePath: 'frontend',
                sidebarPath: require.resolve('./sidebars.js')
            },
        ],
    ]
};