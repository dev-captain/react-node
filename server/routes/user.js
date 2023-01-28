const express = require('express');
const router = express.Router();
const User = require('../models/user');
const test = require('../models/test');
router.post('/addname', function(req, res) {
  let user = new User();
  user.name = req.body.addusername
  user.save();
  res.status(200).json({
          data:user.name
  });
})
router.post('/getuser', function(req, res){
  User.find({}, function(err, userList) {
    res.status(200).json({
    data:userList
    });
})
});
router.post('/deletename', function(req, res){
  let query = {_id: req.body.id};

  User.remove(query, function(err){
    if(err) {
      console.error(err);
      return;
    } else {
      res.status(200).json({
        data:'name was deleted'
        });
    }
  });
});
router.post('/updatename', function(req, res){
  let user = {}
  let query = {
    _id:req.body.id,
  }
  user.name = req.body.text
  User.update(query,user,function(err){
    if(err){
      console.error(err);
      return;
    }
    else{
      res.status(200).json({
        data:'123'
      })
    }
  })
})

module.exports = router;