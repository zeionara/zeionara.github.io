import { defineConfig } from 'vitepress'
import { generateSidebar } from './sidebar'

import fs from 'node:fs'
import path from 'node:path'

const ICONS_DIR = path.resolve(
  process.cwd(),
  'node_modules/@lobehub/icons-static-svg/icons'
)

function icon(name: string): string {
  const filename = name.endsWith('.svg') ? name : `${name}.svg`
  const fullPath = path.join(ICONS_DIR, filename)

  if (!fs.existsSync(fullPath)) {
    throw new Error(`[vitepress] SVG icon not found: ${filename}`)
  }

  return fs.readFileSync(fullPath, 'utf-8')
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ru-RU",
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
      { icon: 'instagram', link: 'https://instagram.com/zeionara' },
      { icon: 'facebook', link: 'https://www.facebook.com/zeio.nara' },
      { icon: 'youtube', link: 'https://www.youtube.com/@tknogd' },
      { icon: 'telegram', link: 'https://t.me/zeioch' },
      {
        icon: {
          svg: icon('sora')
        },
        link: 'https://sora.chatgpt.com/profile/zeionara',
        ariaLabel: 'sora'
      }
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
