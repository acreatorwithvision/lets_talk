/**
 * @des Get all messages
 * @route GET /api/messages
 * @access Public
 */


const getMessages=(req,res)=>{
    // Dummy data for demonstration
    res.status(200).json({success: true,data: "This will be a list of messages."});

};

module.exports={
    getMessages
};

