const jwt=require('jsonwebtoken')

exports.JwtVerify=(req,res,next)=>{
if(req.cookies && req.cookies.UserToken){
jwt.verify(req.cookies.UserToken, "eshita-10231998@#1!4578", (err,data)=>{
req.user=data
next();
})
}
else{
next()
}
}