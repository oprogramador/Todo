var express = require('express');
var router = express.Router();
var taskRepository = require('../db/taskRepository.js');

router.post('/task', function(req, res, next) {
  var msg = req.body.msg;
  var date = new Date(req.body.date);
  taskRepository.add({msg: msg, date: date}, function(task) {
    res.json(task);
  });
});

router.put('/task/changeStatus/:id', function(req, res, next) {
  var id = req.params['id'];
  taskRepository.changeStatus(id, function(task) {
    res.json(task);
  });
});

router.get('/task/all', function(req, res, next) {
  taskRepository.findAll(function(result) {
    res.json(result);
  });
});

module.exports = router;
