const express = require('express');
const server = express();

server.get('/', (req, res) => {
	const body = /* html */ `
        <!doctype html>
        <form method="POST">
            <input id='content' name='content' aria-label='New task' required>
            <button>Add task +</button>
        </form>
    `;
	res.send(body);
});

module.exports = server;
