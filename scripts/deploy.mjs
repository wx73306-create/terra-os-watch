// 一键部署：以 GitHub Pages 子路径为 base 构建，并把产物同步到 docs/
import { cp, rm, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import path from 'node:path'

const BASE = '/terra-os-watch'
const root = process.cwd()
const dist = path.join(root, 'dist')
const docs = path.join(root, 'docs')

const vite = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js')
if (!existsSync(vite)) {
  console.error('找不到 vite，请先执行 npm install。')
  process.exit(1)
}

const build = spawnSync(process.execPath, [vite, 'build'], {
  stdio: 'inherit',
  cwd: root,
  // 重写 base，避免依赖 shell 的环境变量写法
  env: { ...process.env, FIGMA_PUBLIC_URL: BASE },
})

if (build.status !== 0) {
  console.error('构建失败。')
  process.exit(build.status ?? 1)
}

if (!existsSync(dist)) {
  console.error('构建完成但找不到 dist/。')
  process.exit(1)
}

await rm(docs, { recursive: true, force: true })
await mkdir(docs, { recursive: true })
await cp(dist, docs, { recursive: true })

console.log(`\n已同步 dist/ → docs/ ，base = ${BASE}/`)
console.log('提交并推送后 GitHub Pages 会自动更新。')
