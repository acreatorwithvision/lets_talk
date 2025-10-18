const express=require('express');
const router=express.Router();
const {getMessages}=require('../controllers/messageController');

// Route for getting all messages

router.route('/').get(getMessages);

module.exports=router;


