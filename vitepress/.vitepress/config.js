import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../docs',
  title: "Vue-Signature-Simple",
  description: "a lightweight Vue.js component designed to provide users with an easy and intuitive electronic signature functionality.",
  themeConfig: {
    logo: '/images/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quickstart', link: '/quick-start' },
      { text: 'API', link: '/api-examples' },
      { text: 'Donate', link: '/donate' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Quickstart', link: '/quick-start' },
          { text: 'API', link: '/api-examples' },
          { text: 'Donate', link: '/donate' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jaeheng/vue-signature-simple' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present <a href="https://github.com/jaeheng" target="_blank">jaeheng</a>'
    }
  },
  head: [
    // 示例：添加其他统计代码
    ['script', { src: '/baidu.js' }]
  ]
})
