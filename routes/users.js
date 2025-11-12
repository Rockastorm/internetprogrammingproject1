const express =
require('express');

const router =
express.Router();

router.get('/',(req,res)=>{
    res.send('User List');
});
router.get('/new',(req,res)=>{
    res.send('New User Form');
});
router.post('/:id', (req, res)=>{
    res.send(`Getting User data: ${req.params.id}`)
});
module.exports = router;