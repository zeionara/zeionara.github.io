import fs from 'fs'
import path from 'path'

function generateGroup(name, dir, basePath) {
  const full = path.resolve(process.cwd(), dir)

  const hasIndex = fs.existsSync(path.join(full, 'index.md'))

  return {
    text: name,
    collapsed: false,
    link: hasIndex ? basePath : undefined,
    items: generateSidebar(dir, basePath)
  }
}

export function generateSidebar(dir, basePath = `/${dir}/`) {
  const fullDir = path.resolve(process.cwd(), dir)

  const entries = fs.readdirSync(fullDir)

  const items = []

  for (const entry of entries) {
    const entryPath = path.join(fullDir, entry)
    const stat = fs.statSync(entryPath)

    if (stat.isDirectory()) {  // For each folder create a group
      items.push(
        generateGroup(
          entry,
          path.join(dir, entry),
          basePath + entry + '/'
        )
      )
    } else if (stat.isFile() && entry.endsWith('.md')) {
      const name = entry.replace('.md', '')

      if (name !== 'index') {
        items.push({
          text: name,
          link: basePath + name
        })
      }
    }
  }

  return items
}
