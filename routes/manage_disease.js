// GET /app/settings         -> go the settings

const express = require('express');
const router = express.Router();

var {scoreOfDisease, Disease} = require('./../server/models/diseases.js');

router.get('/app/manage_disease', (req, res) => {
    res.status(200).render('manage_disease', {pageTitle: "Manage Disease"});
});

module.exports = router;
