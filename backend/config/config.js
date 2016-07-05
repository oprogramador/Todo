var config = {};
config.db = {};
config.db.user = process.env['todo_db_user'];
config.db.password = process.env['todo_db_password'];
config.db.domain = process.env['todo_db_domain'];
config.db.port = process.env['todo_db_port'];
config.db.dbName = 'todo-todo';

module.exports = config;
