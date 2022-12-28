// GET /app/settings         -> go the settings

const express = require('express');
const router = express.Router();

var {scoreOfDisease, Disease} = require('./../server/models/diseases.js');

router.get('/app/manage_disease', (req, res) => {

    console.log('Unit Test for check Manage Disease');
    
});

module.exports = router;