import { defineConfig } from 'vitepress'
import { generateSidebar } from './sidebar'

import fs from 'node:fs'
import path from 'node:path'

const LOBEHUB_ICONS_DIR = path.resolve(
  process.cwd(),
  'node_modules/@lobehub/icons-static-svg/icons'
)
const CUSTOM_ICONS_DIR = path.resolve(process.cwd(), 'public/icons')

function lobehubIcon(name: string): string {
  const filename = name.endsWith('.svg') ? name : `${name}.svg`
  const fullPath = path.join(LOBEHUB_ICONS_DIR, filename)

  if (!fs.existsSync(fullPath)) {
    throw new Error(`[vitepress] SVG icon not found: ${filename}`)
  }

  return fs.readFileSync(fullPath, 'utf-8')
}

function customIcon(name: string): string {
  const filename = name.endsWith('.svg') ? name : `${name}.svg`
  const fullPath = path.join(CUSTOM_ICONS_DIR, filename)

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

    socialLinkGroups: [
      {
        name: 'work',
        items: [
          { icon: 'github', link: 'https://github.com/zeionara' },
          { icon: 'gitlab', link: 'https://gitlab.com/zeio' },
          {
            icon: {
              svg: lobehubIcon('huggingface')
            },
            link: 'https://huggingface.co/zeio',
            ariaLabel: 'hugging face'
          },
          { icon: 'gmail', link: 'mailto:zeionara@gmail.com' },
        ]
      },
      {
        name: 'watch',
        items: [
          { icon: 'youtube', link: 'https://www.youtube.com/@tknogd' },
          {
            icon: {
              svg: lobehubIcon('sora')
            },
            link: 'https://sora.chatgpt.com/profile/zeionara',
            ariaLabel: 'sora'
          },
          {
            icon: {
              svg: customIcon('vk-video')
            },
            link: 'https://live.vkvideo.ru/zeioch',
            ariaLabel: 'vk video'
          },
          { icon: 'twitch', link: 'https://www.twitch.tv/zeionara' },
        ]
      },
      {
        name: 'play',
        items: [
          {
            icon: {
              svg: customIcon('meta-horizon')
            },
            link: 'https://horizon.meta.com/profile/940658195788932',
            ariaLabel: 'meta horizon'
          },
          { icon: 'steam', link: 'https://steamcommunity.com/id/zeionara' },
          {
            icon: {
              svg: customIcon('epic-games')
            },
            link: 'https://store.epicgames.com/en-US/u/746cd9e3c90946398a4f4c8222a4c991',
            ariaLabel: 'epic games'
          },
          {
            icon: {
              svg: customIcon('riot-games')
            },
            link: 'https://op.gg/lol/summoners/eune/DElMOS-EUNE',
            ariaLabel: 'riot games'
          }
        ],
      },
      {
        name: 'discuss',
        items: [
          { icon: 'instagram', link: 'https://instagram.com/zeionara' },
          { icon: 'facebook', link: 'https://www.facebook.com/zeio.nara' },
          { icon: 'telegram', link: 'https://t.me/zeioch' },
          { icon: 'vk', link: 'https://vk.com/zeionara' },
        ]
      },
      {
        name: 'etc',
        items: [
          { icon: 'discord', link: 'https://discord.com/users/396820551974387733' },
        ]
      }
    ]
  },
  server: {
    port: 1220,
    allowedHosts: [
      'zeio.ru'
    ]
  }
})
