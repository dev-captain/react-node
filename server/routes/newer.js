const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
// const passport = require('passport');
const Crud = require('../models/crud')

//add
router.post('/add', function(req, res){
    // Express validator
    req.checkBody('id', 'Title is required').notEmpty();
    req.checkBody('name', 'Author is required').notEmpty();
    req.checkBody('birthday', 'Body is required').notEmpty();
    
    // Get errors
    let errors = req.validationErrors();
  
    if(errors){
      res.render('new', {
        title: 'Add Article',
        errors: errors
      });
    } else {
      let crud = new Crud();
      crud.id = req.body.id;
      crud.name = req.body.name;
      crud.birthday = req.body.birthday;
  
      crud.save(function(err){
        if(err) {
          console.error(err);
          return;
        } else {
          req.flash('success', 'Article Added');
          res.redirect('/');
        }
      });
    }
  });
router.get('/add', function(req, res) {
    res.render('new');
  });
router.post('/create',function(req,res){
    res.redirect('add')
})
// get
router.get('/:id', function(req, res){
    Crud.findById(req.params.id, function(err, crud){
      res.render('content', {
        crud: crud
      });
    });
  });
// edit
router.get('/edit/:id', function(req, res){
    Crud.findById(req.params.id, function(err, crud){
      res.render('new_edit', {
        crud: crud
      });
    });
  });
  
  // update submit new article 
  router.post('/edit/:id', function(req, res){
    let crud = {};
    crud.id = req.body.id;
    crud.name = req.body.name;
    crud.birthday = req.body.birthday;
  
    let query = {_id: req.params.id};
  
    Crud.update(query, crud, function(err){
      if(err) {
        console.error(err);
        return;
      } else {
        req.flash('success', 'Article Updated');
        res.redirect('/');
      }
    })
  });
//   delete
router.delete('/:id', function(req, res){
    let query = {_id: req.params.id};
  
    Crud.remove(query, function(err){
      if(err) {
        console.error(err);
        return;
      } else {
        req.flash('success', 'Article Deleted')
        res.send('Success');
      }
    });
  });
module.exports = router;