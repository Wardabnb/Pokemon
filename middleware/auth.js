export function verification(req,res,next) {
    
    if(req.body.sessionId!="adgk126kjhgyrd986g"){
        return res.status(403).json({message:"you are not allowed"})
    }
    next();
}