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
router.get('/:id', (req,res) =>{
    res.send(req.params.id)   //req.params.id=1234 (if url is /1234
})

//creating one
router.post('/', (req,res) =>{

})

//updating one
router.patch('/:id', (req,res) =>{

})

//deleting one
router.delete('/:id', (req,res) =>{

})

module.exports=router;   //exporting the router