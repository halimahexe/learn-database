const db = require('../database/db.js');

// Create Task function

const insert_task = db.prepare(/* sql */ `
	INSERT INTO tasks (content, complete)
    VALUES ($content, $complete)
    RETURNING id, content, created_at, complete
`);

function createTask(task) {
	return insert_task.get(task);
}

// List Tasks function

const select_tasks = db.prepare(/* sql */ `
    SELECT
        id,
        content, 
        TIME(created_at) AS created_at, 
        complete FROM tasks
`);

function listTasks() {
	return select_tasks.all();
}

// Delete Tasks function

const delete_task = db.prepare(/* sql */ `
    DELETE FROM tasks WHERE id = ?
`);

function removeTask(id) {
	delete_task.run(id);
}

// Update a task function

const update_content = db.prepare(/* sql */ `
    UPDATE tasks
    SET content = $content
    WHERE id = $id
    RETURNING id, content, created_at, complete    
`);

function editTask(task) {
	return update_content.get(task);
}

module.exports = { createTask, listTasks, removeTask, editTask };
