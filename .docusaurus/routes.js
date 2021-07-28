
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/en/',
  component: ComponentCreator('/en/','b38'),
  exact: true,
},
{
  path: '/en/blog',
  component: ComponentCreator('/en/blog','9c3'),
  exact: true,
},
{
  path: '/en/blog/hello-world',
  component: ComponentCreator('/en/blog/hello-world','bbf'),
  exact: true,
},
{
  path: '/en/blog/hola',
  component: ComponentCreator('/en/blog/hola','73b'),
  exact: true,
},
{
  path: '/en/blog/tags',
  component: ComponentCreator('/en/blog/tags','1b8'),
  exact: true,
},
{
  path: '/en/blog/tags/docusaurus',
  component: ComponentCreator('/en/blog/tags/docusaurus','bd9'),
  exact: true,
},
{
  path: '/en/blog/tags/facebook',
  component: ComponentCreator('/en/blog/tags/facebook','c4d'),
  exact: true,
},
{
  path: '/en/blog/tags/hello',
  component: ComponentCreator('/en/blog/tags/hello','112'),
  exact: true,
},
{
  path: '/en/blog/tags/hola',
  component: ComponentCreator('/en/blog/tags/hola','7f2'),
  exact: true,
},
{
  path: '/en/blog/welcome',
  component: ComponentCreator('/en/blog/welcome','65f'),
  exact: true,
},
{
  path: '/en/markdown-page',
  component: ComponentCreator('/en/markdown-page','ecf'),
  exact: true,
},
{
  path: '/en/docs',
  component: ComponentCreator('/en/docs','ff5'),
  
  routes: [
{
  path: '/en/docs/cs/intro',
  component: ComponentCreator('/en/docs/cs/intro','7bc'),
  exact: true,
},
{
  path: '/en/docs/intro',
  component: ComponentCreator('/en/docs/intro','237'),
  exact: true,
},
{
  path: '/en/docs/tutorial-basics/congratulations',
  component: ComponentCreator('/en/docs/tutorial-basics/congratulations','a30'),
  exact: true,
},
{
  path: '/en/docs/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/en/docs/tutorial-basics/create-a-blog-post','5be'),
  exact: true,
},
{
  path: '/en/docs/tutorial-basics/create-a-document',
  component: ComponentCreator('/en/docs/tutorial-basics/create-a-document','2c8'),
  exact: true,
},
{
  path: '/en/docs/tutorial-basics/create-a-page',
  component: ComponentCreator('/en/docs/tutorial-basics/create-a-page','220'),
  exact: true,
},
{
  path: '/en/docs/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/en/docs/tutorial-basics/deploy-your-site','bf6'),
  exact: true,
},
{
  path: '/en/docs/tutorial-basics/markdown-features',
  component: ComponentCreator('/en/docs/tutorial-basics/markdown-features','ab3'),
  exact: true,
},
{
  path: '/en/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/en/docs/tutorial-extras/manage-docs-versions','715'),
  exact: true,
},
{
  path: '/en/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/en/docs/tutorial-extras/translate-your-site','9d1'),
  exact: true,
},
]
},
{
  path: '/en/engineering',
  component: ComponentCreator('/en/engineering','d53'),
  
  routes: [
{
  path: '/en/engineering/support',
  component: ComponentCreator('/en/engineering/support','f05'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
