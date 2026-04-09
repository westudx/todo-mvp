const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 初始化数据库
const db = new Database('todo.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    done INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// 获取所有待办
app.get('/api/todos', (req, res) => {
  const todos = db.prepare('SELECT * FROM todos ORDER BY created_at DESC').all();
  res.json(todos);
});

// 新增待办
app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) return res.status(400).json({ error: '内容不能为空' });
  const result = db.prepare('INSERT INTO todos (text) VALUES (?)').run(text.trim());
  const todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(todo);
});

// 切换完成状态
app.patch('/api/todos/:id', (req, res) => {
  const todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(req.params.id);
  if (!todo) return res.status(404).json({ error: '未找到' });
  db.prepare('UPDATE todos SET done = ? WHERE id = ?').run(todo.done ? 0 : 1, req.params.id);
  res.json({ ...todo, done: todo.done ? 0 : 1 });
});

// 删除待办
app.delete('/api/todos/:id', (req, res) => {
  db.prepare('DELETE FROM todos WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

app.listen(3000, () => console.log('后端已启动: http://localhost:3000'));
