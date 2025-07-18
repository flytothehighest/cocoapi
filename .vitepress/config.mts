import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "多coco-cocoapi",
  description: "多coco-cocoAPI为您提供超好用的API，让您在文档中掌握API的用法，收获常用、好用API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '手册', link: '/docs/🎉欢迎来到duococo-cocoapi' }
    ],

    sidebar: [
      {
        text: 'Duococo-cocoapi',
        items: [
          { text: '欢迎来到duococo-cocoapi', link: 'docs/🎉欢迎来到duococo-cocoapi' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
