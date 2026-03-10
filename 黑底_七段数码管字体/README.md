# PPT 倒计时器 - 黑底数码管版本

专为 PPT 演讲设计的倒计时器，黑色背景 + 7段数码管字体，酷炫视觉效果。

## 功能特点

- 始终置顶（支持全屏 PPT）
- 黑色背景 + 7段数码管字体
- 动态发光效果
- 进度条实时显示
- 数字颜色随时间变化（绿色→黄色→红色）
- 全屏提醒 + 滴滴声音
- 预设时间：1、3、5、8、15 分钟
- 自定义时间
- 开始、暂停、重置
- 可拖拽窗口

## 快速开始

```bash
npm install
npm start
```

## 打包

```bash
npm run build
```

安装程序在 `dist` 目录，体积约 274MB（Electron 正常体积）。

## 文件说明

- `main.js`: 主进程
- `renderer.js`: 计时器逻辑
- `style.css`: 样式文件
- `index.html`: 主界面
- `alert.html`: 提醒界面
- `didi.wav`: 提示音
- `7-segments/`: 字体文件夹
- `package.json`: 项目配置
