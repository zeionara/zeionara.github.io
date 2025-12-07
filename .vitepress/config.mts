import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Оф сайт @zeionara",
  description: "Официальный сайт @zeionara",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zeionara' },
      { icon: 'instagram', link: 'https://instagram.com/zeionara' }
    ],

    footer: {
      message: 'Подпишись на <a href="https://t.me/zeioch" target="_blank">мой тг канал</a>',
      copyright: '© 2025 Zeio Nara'
    }
  },
  server: {
    port: 1220,
    allowedHosts: [
      'zeio.ru'
    ]
  }
})
