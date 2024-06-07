const express = require('express');
const server = express();
const model = require('./model/tasks.js');
const bodyParser = express.urlencoded({ extended: false });

server.get('/', (req, res) => {
	const tasks = model.listTasks();
	const body = /* html */ `
        <!doctype html>
        <form method="POST">
            <input id='content' name='content' aria-label='New task' required>
            <button>Add task +</button>
        </form>
        <ul>${tasks.map((t) => `<li>${t.content}</li>`).join('')}</ul>
    `;
	res.send(body);
});

server.post('/', bodyParser, (req, res) => {
	const task = {
		content: req.body.content,
		complete: 0,
	};
	model.createTask(task);
	res.redirect('/');
});

module.exports = server;
