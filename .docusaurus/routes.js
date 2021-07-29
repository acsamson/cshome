
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','f47'),
  exact: true,
},
{
  path: '/blog/初次搭建',
  component: ComponentCreator('/blog/初次搭建','a64'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/algorithm',
  component: ComponentCreator('/algorithm','a04'),
  
  routes: [
{
  path: '/algorithm/动态规划/基础',
  component: ComponentCreator('/algorithm/动态规划/基础','b92'),
  exact: true,
},
]
},
{
  path: '/docs',
  component: ComponentCreator('/docs','93b'),
  
  routes: [
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
]
},
{
  path: '/engineering',
  component: ComponentCreator('/engineering','1e8'),
  
  routes: [
{
  path: '/engineering/support',
  component: ComponentCreator('/engineering/support','fb8'),
  exact: true,
},
]
},
{
  path: '/frontend',
  component: ComponentCreator('/frontend','e64'),
  
  routes: [
{
  path: '/frontend/JavaScript/简介',
  component: ComponentCreator('/frontend/JavaScript/简介','0d2'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
