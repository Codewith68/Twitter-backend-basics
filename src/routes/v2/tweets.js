import express from 'express';

const router = express.Router(); // create a new router object
router.get('/',(req,res)=>{
    return res.json({
        message:'tweets from v2',
    })
});

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    return res.json({
        message:`tweet with  from v2 id ${id}`,
    })
});


export default router; // export the router object