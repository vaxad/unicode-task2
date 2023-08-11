const express=require('express')
const router=express.Router();
const middleware = require('./middleware');
const fetch=require('node-fetch')

router.post('/',middleware,async(req,res)=>{
    const {word}=req.body
    const res2 = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const meaning= await (res2.json())
    res.send(meaning).status(200)
})

module.exports=router