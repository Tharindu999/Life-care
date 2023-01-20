/*
 	POST /app/adduser -> add a new user in the system
     GET /logout       -> log the user out of the system
*/

const express = require('express');
const router = express.Router();
const passport = require ('passport');
const LocalStrategy = require ('passport-local').Strategy;
const User = require('./../server/models/user.js');



/*
	GET /app/logout -> function to logout from the system
*/
router.get('/app/logout', function(req, res) {
    req.logout();
    req.flash('success_msg', 'You are logged out');

    res.status(200).redirect('/');
});

module.exports = router;
