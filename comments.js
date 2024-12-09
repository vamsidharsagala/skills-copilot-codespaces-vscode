//create web server
//create a route for comments
//create a route for comment/:id
//create a route for comment/:id/delete
//create a route for comment/:id/edit
//create a route for comment/:id/update

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

//create route for comments
router.get('/', function(req, res) {
    Comment.find({}, function(err, comments) {
        if (err) {
            console.log(err);
        }
        res.render('comments/index', {comments: comments});
    });
});

//create route for comment/:id
router.get('/:id', function(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err) {
            console.log(err);
        }
        res.render('comments/show', {comment: comment});
    });
});

//create route for comment/:id/delete
router.get('/:id/delete', function(req, res) {
    Comment.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            console.log(err);
        }
        res.redirect('/comments');
    });
});

//create route for comment/:id/edit
router.get('/:id/edit', function(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err) {
            console.log(err);
        }
        res.render('comments/edit', {comment: comment});
    });
});

//create route for comment/:id/update
router.post('/:id/update', function(req, res) {
    Comment.findByIdAndUpdate(req.params.id, req.body.comment, function(err, comment) {
        if (err) {
            console.log(err);
        }
        res.redirect('/comments/' + req.params.id);
    });
});

module.exports = router;