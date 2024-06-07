const db = require('../database/db.js');

const delete_task = db.prepare(/* sql */ `
    DELETE FROM tasks WHERE id = ?
`);

function removeTask(id) {
	delete_task.run(id);
}

removeTask(1);
