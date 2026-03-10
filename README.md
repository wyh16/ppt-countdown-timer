# PPT 倒计时器

专为 PPT 演讲设计的倒计时器，支持始终置顶显示，即使 PPT 全屏播放时也能看到。

## 版本说明

### 黑底_七段数码管字体（推荐）

**特点**：
- 黑色背景 + 7段数码管字体
- 动态发光效果
- 进度条实时显示剩余时间
- 数字颜色随时间变化（绿色→黄色→红色）
- 全屏提醒 + 滴滴声音

**适合场景**：演讲、展示、追求视觉效果

### 透明版本

**特点**：
- 完全透明背景
- 简洁设计
- 声音提醒

**适合场景**：日常会议、小型讨论、不遮挡内容

## 快速开始

```bash
git clone https://github.com/wyh16/ppt-countdown-timer.git
cd ppt-countdown-timer

# 选择版本
cd 黑底_七段数码管字体  # 或 cd 透明版

npm install
npm start
```

## 打包

```bash
npm run build
```

安装程序在 `dist` 目录，体积约 274MB（Electron 正常体积）。

## 功能特点

- 始终置顶（支持全屏 PPT）
- 预设时间：1、3、5、8、15 分钟
- 自定义时间
- 开始、暂停、重置
- 可拖拽窗口
- 声音提醒

## 技术栈

Electron + HTML/CSS/JavaScript

## 许可证

MIT License - 详见 [LICENSE](LICENSE)

## 作者

[wyh16](https://github.com/wyh16)
