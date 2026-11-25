# TERRA OS · 户外运动手表

TERRA OS 户外运动手表的交互式网页演示 —— 由 Figma Make 导出，构建为纯静态站点，托管在 GitHub Pages。

**在线预览：https://wx73306-create.github.io/terra-os-watch/**

## 内容

一个 1:1 实物尺寸的手表模型，可以转动表冠、按下表冠、按操作键，完整体验以下界面：

- **表盘** — 时间、日落、海拔、心率、气温叠放卡片
- **应用列表** — 运动 / 导航 / 心率 / 天气
- **运动** — 徒步、越野跑、登山、骑行、滑雪，含倒计时、实时数据、分段、总结
- **导航** — 航点罗盘、一键返航
- **心率 / 天气** — 实时数值与逐小时预报
- **控制中心 / 手电筒 / 更换壁纸**

## 交互方式

| 操作 | 键盘 |
| --- | --- |
| 旋转表冠（上下选择） | `↑` `↓` 或鼠标滚轮 |
| 按下表冠（确认 / 返回） | `Enter` |
| 操作键（快速开始） | `空格` |
| 屏幕手势 | 直接点击、滑动 |

## 本地开发

```bash
npm install
npm run dev          # http://localhost:8443
```

## 构建与部署

页面部署在仓库的 `docs/` 目录，GitHub Pages 从 `main` 分支的 `/docs` 发布。

```bash
npm run deploy
```

该命令会以 `/terra-os-watch/` 为 base 构建，并同步产物到 `docs/`。提交推送后 GitHub Pages 自动更新。

> 未装 `dotenv` 之类的额外依赖；`npm run dev` 默认使用 `/` 作为 base，`npm run deploy` 使用子路径 base，两者互不影响。

## 技术栈

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- 字体 Inter 通过 `@fontsource-variable/inter` 本地打包，无外部 CDN 依赖

## 说明

本仓库是一个 UI 演示（design demo），手表数据均为模拟值，不连接真实设备。
