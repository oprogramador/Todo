var taskRepository = {};
var connector = require('./connector.js');
var mongo = require('mongodb');

taskRepository.add = function(task, callback) {
  task['isDone'] = false;
  connector.connect(function(err, db) {
    var tasks = db.collection('tasks');
    tasks.insert(task);
    callback(task);
  });
}

taskRepository.changeStatus = function(taskId, callback) {
  connector.connect(function(err, db) {
    var tasks = db.collection('tasks');
    db.collection('tasks').find({_id: new mongo.ObjectId(taskId)}).snapshot().forEach(function(task) {
      task.isDone = !task.isDone;
      tasks.save(task);
      callback(task);
    });
  });
}

taskRepository.findAll = function(callback) {
  connector.connect(function(err, db) {
    var tasks = db.collection('tasks');
    tasks.find(function(err, cursor) {
      cursor.toArray(function(err, data) {
        callback(data);
      });
    });
  });
}


module.exports = taskRepository;
