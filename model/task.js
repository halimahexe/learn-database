const db = require('../database/db.js');

const insert_task = db.prepare(/* sql */ `
	INSERT INTO tasks (content, complete)
    VALUES ($content, $complete)
    RETURNING id, content, created_at, complete
`);

function createTask(task) {
	return insert_task.get(task);
}

module.exports = { createTask };

const result = createTask({ content: 'Make lunch', complete: 0 });
console.log(result);
