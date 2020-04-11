const express = require('express');
const router = express.Router();

const {getUserById , getUser, updateUser , userPurchaseList } = require('../controllers/user');
const {isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth');

router.param("userId", getUserById);

//get

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

//update 

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

// get 

router.get("/orders/user/:userId", isSignedIn, isAuthenticated, userPurchaseList);


module.exports = router;


