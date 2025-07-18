---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "duococo"
  text: "多coco-cocoAPI为您提供超好用的API，让您在文档中掌握API的用法，收获常用、好用API"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /docs/markdown-examples
    - theme: alt
      text: API Examples
      link: /docs/api-examples

features:
  - title: 定期更新
    details: 定期更新最新内容，😋💩（赤石）也要吃热乎的
  - title: 来源稳定
    details: 不找杂牌API，更稳定，让你不用糟心再去做服务监测
  - title: 简单易用
    details: 简单的不用教，不简单的文档里会写。小训练师，你们就甭操心啦！
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const email_icon = {svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A1 1 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"/></svg>'}
const members = [
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3660539282&spec=640&img_type=jpg',
    name: 'Hinincs',
    title: '项目发起人，编写人',
    links: [
      { icon: 'gitee', link: 'https://gitee.com/hinincs' },
      { icon: 'qq', link: 'https://qm.qq.com/q/WUR6qpYr8Q' },
      { icon: 'email_icon', link: 'mailto:19877809391@163.com' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/1791848194'}
    ]
  }