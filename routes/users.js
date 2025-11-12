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
// router.get('/:id', (req, res)=>{
//    res.send(`Getting User data: ${req.params.id}`);
// });
router.post("/:id").get((req, res)=>{
    res.send(`Getting User data: ${req.params.id}`)
}).delete((req, res)=>{
    res.send(`Deleting user with id: ${req.params.id}`)
}).put((req, res)=>{
    res.send(`Updating user with id: ${req.params.id}`)
});
const users =[{name:"Jacob"},{name:"Jacob2"}];
router.param("id", (req, res, next, id)=>{
    console.log(`Acessing user #${id}`);
    next();
});
module.exports = router;