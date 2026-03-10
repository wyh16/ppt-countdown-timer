# PPT 倒计时器 (PPT Countdown Timer)

这是一个专为 PPT 演讲设计的倒计时器，支持始终置顶显示，即使 PPT 全屏播放时也能看到。

## 功能特点

- **始终置顶**：窗口浮动在所有窗口（包括全屏 PPT）之上。
- **透明背景**：完全透明的背景，不影响 PPT 演示效果，文字带有阴影确保清晰可见。
- **预设时间**：
  - 秒级预设：10秒、30秒、45秒
  - 分钟预设：1分、3分、5分、10分
- **自定义时间**：支持输入任意时间值，可选择秒或分钟为单位。
- **清晰显示**：巨大数字，适合演讲者查看。
- **控制**：开始、暂停、重置。
- **结束提示**：倒计时结束时数字变红闪烁。
- **可拖拽**：按住窗口空白处即可拖动位置。

## 方案一：Electron 桌面应用 (推荐)

这是最佳体验版本，支持强制置顶。

### 安装与运行

确保已安装 [Node.js](https://nodejs.org/)。

1. 打开终端（命令提示符/PowerShell），进入本目录：
   ```bash
   cd c:\你的项目目录
   ```
2. 安装依赖：
   ```bash
   npm install
   ```
3. 启动应用：
   ```bash
   npm start
   ```

### 打包 (可选)

如果需要生成 `.exe` 文件分享给他人，可以安装 electron-packager 或 electron-builder。
简单打包命令：

```bash
npx electron-packager . "PPT Timer" --platform=win32 --arch=x64
```
覆盖已存在的同名文件夹：
```bash
npx electron-packager . "PPT Timer" --platform=win32 --arch=x64 --overwrite
```


## 文件说明

- `main.js`: Electron 主进程，负责创建置顶窗口。
- `renderer.js`: 计时器逻辑实现。
- `style.css`: 界面样式。
- `index.html`: Electron 应用界面。
- `fallback_web_version.html`: 纯网页备用版。
