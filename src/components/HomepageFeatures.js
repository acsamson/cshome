/*
 * @Description: 
 * @Author: acsamson
 * @Date: 2021-07-29 03:48:03
 * @LastEditTime: 2021-07-29 03:52:18
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /cshome/src/components/HomepageFeatures.js
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '计算机基础',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
            <code>数据结构</code>
            <code>计算机网络</code>
            <code>操作系统</code>
            <code>计算机组成原理</code>
      </>
    ),
  },
  {
    title: '工程能力基础',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '算法基础',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
