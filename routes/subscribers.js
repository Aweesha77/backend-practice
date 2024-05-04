const express=require('express');
const router=express.Router();
const subscriber=require('../models/subscriber.js');

//getting all
router.get('/', async(req,res) =>{
    try{
        const subscribers= await subscriber.find();
        res.json(subscribers);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
    
})

//getting one
router.get('/:id', getSubscriber,(req,res) =>{
    res.send(req.subscriber)   //req.params.id=1234 (if url is /1234
})

//creating one
router.post('/', async (req,res) =>{
    const subscriber=new subscriber({
        name:req.body.name,
        subscribetoChannel:req.body.subscribetoChannel
    })
    try{
        const newSubscriber=await subscriber.save();
        res.status(201).json(newSubscriber);
    }catch(error){
        res.status(400).json({message:error.message})
    }

})

//updating one
router.patch('/:id',getSubscriber, (req,res) =>{
    res.send(res.subscriber.name)
})

//deleting one
router.delete('/:id', getSubscriber,(req,res) =>{
    try{
        await res.subscriber.remove().json({message:"deleted subscriber"});
        
    }catch(err){
        res.send(500).json({message:err.message})
    }
})

async function getSubscriber(req,res,next){
    let subscriber
    try{
        subscriber=await subscriber.findById(req.params.id)
        if(subscriber==null){
            res.send(404).json({message:"Subscriber not found"})
        }
    }catch(err){
    res.send(500).json({message:err.message})
    }

    res.subscriber=subscriber;
    next();

}

module.exports=router;   //exporting the router