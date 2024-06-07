require('dotenv').config();
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const Database = require('better-sqlite3');

const db = new Database(process.env.DB_FILE);

const schemaPath = join('database', 'schema-sql');
const schema = readFileSync(schemaPath, 'utf-8');
db.exec(schema);

const select_date = db.prepare('SELECT DATE()');
const dateResult = select_date.get();
console.log(dateResult);

const select_table = db.prepare('SELECT name FROM sqlite_schema');
