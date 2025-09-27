import { defineConfig } from 'vitepress'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "多coco-cocoapi",
  description: "多coco-cocoAPI为您提供超好用的API，让您在文档中掌握API的用法，收获常用、好用API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://static.codemao.cn/flowchunkflex/ryW6fbpIxg.png?hash=Fi87WXogaaaZqReQugMCPjZOPXhL',
    nav: [
      { text: '主页', link: '/' },
      { text: '手册', link: '/docs/欢迎来到duococo-cocoapi' },
            {
        text: '其他文档',
        items: [
          { text: 'Coco快捷导航', link: '/docs/nav/index' },

        ]
      }
    ],

    
    footer: {
      message: 'Released under the MIT License and Attribution-NonCommercial 4.0 International.',
      copyright: 'Copyright © 2025-present Duococo',
    

    },


    sidebar: [
      {
        text: 'Duococo-cocoapi',
        items: [
          { text: '欢迎来到duococo-cocoapi', link: 'docs/欢迎来到duococo-cocoapi' }
        ]
      },
      {
        text: 'api.hinincs.top/* 自营API',
        items: [
          
        ]
      },

      {
        text: '已封装的API',
        items: [
          { text: 'what是已封装的API', link: 'docs/已封装的API/what是已封装的API？' },
          { text: '编程猫对象存储', link: 'docs/已封装的API/编程猫对象存储' }
        ]
      },


    ],

    search: {   // 搜索
      provider: 'local'
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/duococo/cocoapi' },

      {
        icon: {
          svg: '<svg t="1753096751971" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4490" width="200" height="200"><path d="M820.736 807.488l96.288 96.288a32 32 0 1 1-45.248 45.248l-105.696-105.696a224 224 0 1 1 54.656-35.84z m-143.04-455.424a288.352 288.352 0 0 0-81.184 9.92c-25.28-19.84-53.888-33.44-84.512-39.04v77.568a289.6 289.6 0 0 0-64 58.464V322.88c-108.544 19.968-192 140-192 285.088 0 145.088 83.456 265.12 192 285.088v-72.064a289.6 289.6 0 0 0 64 58.464v13.6c5.344-0.96 10.656-2.24 15.872-3.68a286.144 286.144 0 0 0 83.168 32.128C571.744 946.112 527.2 960 480 960c-100.416 0-188.864-62.816-240.384-158.08A64 64 0 0 0 160 864a32 32 0 0 1-64 0 128 128 0 0 1 115.84-127.424A415.904 415.904 0 0 1 193.152 640H96a32 32 0 0 1 0-64h97.184c2.496-33.792 8.896-66.24 18.624-96.576A128 128 0 0 1 96 352a32 32 0 0 1 64 0 64 64 0 0 0 79.616 62.08c17.28-31.936 38.688-60.224 63.328-83.712a192 192 0 1 1 354.144 0c7.136 6.848 14.048 14.08 20.64 21.696z m116.32 26.976c3.84-8.192 5.984-17.376 5.984-27.04a32 32 0 0 1 64 0c0 21.92-5.504 42.56-15.232 60.608a288 288 0 0 0-54.72-33.568zM356.544 289.92A244.448 244.448 0 0 1 480 256c44.16 0 86.048 12.16 123.456 33.92A128.128 128.128 0 0 0 480 128a128 128 0 0 0-123.456 161.92zM672 800a160 160 0 1 0 0-320 160 160 0 0 0 0 320z" fill="#515151" p-id="4491"></path></svg>'
        },
        link: 'https://sxyblog.rth1.xyz/duococo/apitest.html'
      }
    ]
  },
  lastUpdated: true, // 显示最后修改时间

    //markdown配置
  markdown: {
    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      }
    }
  }

})





