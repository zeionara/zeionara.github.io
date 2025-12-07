import { defineConfig } from 'vitepress'
import { generateSidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Оф сайт @zeionara",
  description: "Официальный сайт @zeionara",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Hyprfiction', link: '/hyprfiction' }
    ],

    sidebar: {
      '/hyprfiction/': generateSidebar('hyprfiction')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zeionara' },
      { icon: 'instagram', link: 'https://instagram.com/zeionara' }
    ],

    // footer: {
    //   message: 'Подпишись на <a href="https://t.me/zeioch" target="_blank">мой тг канал</a>'
    //   copyright: '© 2025 Zeio Nara'
    // }
  },
  server: {
    port: 1220,
    allowedHosts: [
      'zeio.ru'
    ]
  }
})
