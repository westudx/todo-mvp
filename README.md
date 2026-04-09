# Todo MVP

一个最简单的前后端数据库分离的待办事项应用。

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | 纯 HTML / CSS / JavaScript |
| 后端 | Node.js + Express |
| 数据库 | SQLite (better-sqlite3) |

## 项目结构

```
├── frontend/
│   └── index.html        # 前端页面
├── backend/
│   ├── server.js          # Express API 服务
│   ├── package.json       # 后端依赖
│   └── todo.db            # SQLite 数据库（运行后自动生成）
```

## 快速开始

### 1. 安装依赖

```bash
cd backend
npm install
```

### 2. 启动后端

```bash
npm start
```

后端将在 `http://localhost:3000` 运行。

### 3. 打开前端

用浏览器直接打开 `frontend/index.html` 即可。

## API 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/todos` | 获取所有待办 |
| POST | `/api/todos` | 新增待办（body: `{ "text": "..." }`） |
| PATCH | `/api/todos/:id` | 切换完成状态 |
| DELETE | `/api/todos/:id` | 删除待办 |

## 功能

- 添加待办事项（支持回车键）
- 点击文字切换完成 / 未完成
- 删除待办事项
- 数据持久化存储
