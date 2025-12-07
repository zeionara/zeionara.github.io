import { defineConfig } from 'vitepress'

// import fs from 'fs'
// import path from 'path'
// 
// /**
//  * Генерация sidebar на основе структуры директорий.
//  * @param {string} dir - относительный путь папки (например 'guide')
//  * @param {string} basePath - URL-префикс (например '/guide/')
//  */
// export function generateSidebar(dir, basePath = `/${dir}/`) {
//   const fullDir = path.resolve(process.cwd(), dir)
// 
//   const items = []
// 
//   for (const entry of fs.readdirSync(fullDir)) {
//     const entryPath = path.join(fullDir, entry)
//     const stat = fs.statSync(entryPath)
// 
//     // Если это директория — создаём группу
//     if (stat.isDirectory()) {
//       const group = generateSidebar(path.join(dir, entry), basePath + entry + '/')
// 
//       items.push({
//         text: formatName(entry),
//         collapsed: true,
//         items: group
//       })
//     }
// 
//     // Если это файл .md
//     if (stat.isFile() && entry.endsWith('.md')) {
//       const name = entry.replace('.md', '')
// 
//       // Пропускаем index.md — он автоматически открывается по адресу /dir/
//       if (name === 'index') continue
// 
//       items.push({
//         text: formatName(name),
//         link: basePath + name
//       })
//     }
//   }
// 
//   return items
// }
// 
// /**  
//  * Преобразует имя файла/директории в красивый заголовок  
//  * "deep_stuff" → "Deep Stuff"  
//  */
// function formatName(name) {
//   return name
//     .replace(/-/g, ' ')
//     .replace(/_/g, ' ')
//     .replace(/\b\w/g, s => s.toUpperCase())
// }

// import fs from 'fs'
// import path from 'path'
// 
// export function generateSidebar(dir, basePath = `/${dir}/`) {
//   const fullDir = path.resolve(process.cwd(), dir)
// 
//   const directories = []
//   const files = []
// 
//   for (const entry of fs.readdirSync(fullDir)) {
//     const entryPath = path.join(fullDir, entry)
//     const stat = fs.statSync(entryPath)
// 
//     // Директория → создаём вложенную группу
//     if (stat.isDirectory()) {
//       directories.push(entry)
//     }
// 
//     // Markdown файл (кроме index.md)
//     if (stat.isFile() && entry.endsWith('.md')) {
//       const name = entry.replace('.md', '')
//       if (name !== 'index') {
//         files.push({
//           text: entry.replace('.md', ''),
//           link: basePath + name
//         })
//       }
//     }
//   }
// 
//   // Генерируем группы для директорий
//   const groups = directories.map(subdir => ({
//     text: subdir,
//     collapsed: false,
//     items: generateSidebar(
//       path.join(dir, subdir),
//       basePath + subdir + '/'
//     )
//   }))
// 
//   // Возвращаем (сначала директории, потом файлы)
//   return [
//     ...groups,
//     ...files
//   ]
// }

import fs from 'fs'
import path from 'path'

/**
 * Генерирует sidebar-группу для директории
 * dir — путь на диске (относительно корня проекта)
 * basePath — URL путь
 */
export function generateSidebarForDir(dir, basePath = `/${dir}/`) {
  const full = path.resolve(process.cwd(), dir)

  const group = {
    text: path.basename(dir), // имя директории
    collapsed: false,
    items: []
  }

  const entries = fs.readdirSync(full)

  for (const entry of entries) {
    const entryPath = path.join(full, entry)
    const stat = fs.statSync(entryPath)

    // Поддиректория → создаём вложенную группу через рекурсию
    if (stat.isDirectory()) {
      group.items.push(
        generateSidebarForDir(
          path.join(dir, entry),
          basePath + entry + '/'
        )
      )
      continue
    }

    // Файл .md
    if (stat.isFile() && entry.endsWith('.md')) {
      const name = entry.replace('.md', '')

      // index.md не показываем
      if (name === 'index') continue

      group.items.push({
        text: name,
        link: basePath + name
      })
    }
  }

  return group
}

/**
 * Обёртка: generateSidebar('docs')
 * вернёт массив, который уже можно подставлять в config
 */
export function generateSidebar(dir) {
  return [generateSidebarForDir(dir)]
}


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

    sidebar: {
      '/hyprfiction/': generateSidebar('hyprfiction'),
      '/foo/': generateSidebar('foo')
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

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
