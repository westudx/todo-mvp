# Todo MVP

一个前后端分离的待办事项应用，使用 SQLite 持久化存储。

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | 纯 HTML / CSS / JavaScript |
| 后端 | Node.js + Express |
| 数据库 | SQLite (better-sqlite3) |

## 项目结构

```
├── frontend/
│   └── index.html        # 前端页面（由后端托管）
├── backend/
│   ├── server.js          # Express API 服务
│   ├── package.json       # 后端依赖
│   └── todo.db            # SQLite 数据库（运行后自动生成）
├── start.bat              # Windows 一键启动脚本
```

## 快速开始

### Windows 用户

双击 `start.bat`，自动启动服务并打开浏览器。

### 手动启动

```bash
cd backend
npm install
npm start
```

访问 `http://localhost:3000` 即可使用。

> 注意：前端页面由后端托管，不能直接双击 `index.html` 打开。

## 功能

- 添加待办事项（支持回车快捷提交）
- 编辑待办（点击编辑按钮或双击文本，Enter 保存，Esc 取消）
- 删除待办（带滑出动画）
- 切换完成 / 未完成状态
- 清除所有已完成项
- 筛选视图：全部 / 待办 / 已完成
- 待办计数显示
- 创建时间相对显示（刚刚、X 分钟前、X 天前...）
- 响应式布局，适配手机端

## API 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/todos` | 获取所有待办 |
| POST | `/api/todos` | 新增待办（body: `{ "text": "..." }`） |
| PATCH | `/api/todos/:id` | 切换完成状态 |
| PUT | `/api/todos/:id` | 编辑待办文本（body: `{ "text": "..." }`） |
| DELETE | `/api/todos/:id` | 删除单条待办 |
| DELETE | `/api/todos` | 清除所有已完成的待办 |
