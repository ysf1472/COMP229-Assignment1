// created :Yusuf Hekimoglu Student#: 301081665  Date 2020-10-23 -->
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport =require(`passport`);
let clientController = require(`../controllers/client`);

//helper function for guard purposes 
function requireAuth(req, res, next)
{
    //check if the user if they logged in
    if(!req.isAuthenticated()){
        return res.redirect(`/login`);
    }
    next();
}

// // connect to our Book Model
// let Book = require('../models/book');

// let bookController = require('../controllers/book');

/* GET Route for the Book List page - READ Operation */
router.get('/',  clientController.displayClientList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, clientController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',requireAuth, clientController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id',requireAuth, clientController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id',requireAuth, clientController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, clientController.performDelete);

module.exports = router;