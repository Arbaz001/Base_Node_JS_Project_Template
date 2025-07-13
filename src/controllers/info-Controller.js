const { StatusCodes } = require("http-status-codes");

const info = (req,res)=>{
    return res.status(StatusCodes.OK).json({success: true , data: "This is info route"});
}

module.exports = { info };