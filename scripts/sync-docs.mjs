// 把 dist 产物同步到 docs/，供 GitHub Pages（main 分支 /docs）发布
import { cp, rm, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dist = path.join(root, 'dist')
const docs = path.join(root, 'docs')

if (!existsSync(dist)) {
  console.error('找不到 dist/，请先执行构建。')
  process.exit(1)
}

await rm(docs, { recursive: true, force: true })
await mkdir(docs, { recursive: true })
await cp(dist, docs, { recursive: true })

console.log('已同步 dist/ → docs/')
