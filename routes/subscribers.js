const express=require('express');
const router=express.Router();

//getting all
router.get('/', (req,res) =>{
    res.send('Hello world')
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