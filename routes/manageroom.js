// GET /app/settings         -> go the settings

const express = require('express');
const router = express.Router();

var {scoreOfDisease, Disease} = require('./../server/models/diseases.js');

router.get('/app/manageroom', (req, res) => {
    res.status(200).render('manageroom', {pageTitle: "Manage_Room"});
});

module.exports = router;
