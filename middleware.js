 const middleware=(req,res,next)=>{
    try {
        if(!req.body.word){
           res.status(401).send('no word in body')
        }else{
        next()
        }
    } catch (error) {
        res.status(401).send('some error occured')
    }
}

module.exports=middleware;