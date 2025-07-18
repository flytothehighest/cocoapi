---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "duococo-cocoapi"
  text: "多coco-cocoAPI为您提供超好用的API，让您在文档中掌握API的用法，收获常用、好用API"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: go go go!
      link: /docs/🎉欢迎来到duococo-cocoapi
  image:
  src: /icon.png
  alt: Duococo Logo


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

const members = [
  {
    avatar: 'https://static.codemao.cn/flowchunkflex/Hk-C9uvIxx.jpg?hash=FqLgfIjRXxxDq_Mot4VozW6yBL10',
    name: 'Explore114',
    title: '项目发起者，文档编写人员',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
    ]
  },
  
]
</script>

# 编写/开发团队

努力写文档的多儿们！

<VPTeamMembers size="small" :members />