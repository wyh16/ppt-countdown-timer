# PPT 倒计时器 - 透明版本

专为 PPT 演讲设计的倒计时器，完全透明背景，不遮挡内容。

## 功能特点

- 始终置顶（支持全屏 PPT）
- 完全透明背景
- 简洁设计
- 声音提醒
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
- `package.json`: 项目配置
