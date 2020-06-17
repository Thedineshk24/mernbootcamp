const express = require('express');
const router = express.Router();
const {updateStock} = require("../controllers/product");
const {isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth');
const {getUserById,pushOrderInPurchaseList} = require('../controllers/user');

const {getOrderById, createOrder, getAllOrders} = require("../controllers/order");

// params
router.param("userId",getUserById);
router.param("orderId",getOrderById);

// actual Routes

// create
router.post("/order/create/:userId", isSignedIn, isAuthenticated, pushOrderInPurchaseList, updateStock, createOrder);

// read 
router.get("/order/all/:userId", isSignedIn, isAuthenticated, isAdmin , getAllOrders);

module.exports = router;