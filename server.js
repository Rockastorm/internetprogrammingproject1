
const express =
require('express');

const userRouter =
require('./routes/users');

const postsRouter =
require('./routes/posts');

const app = express(); //calling this function sets up a server
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({
    extended:true}));

// app.use(logger);
app.use('/users', userRouter);
app.use('/posts', postsRouter);


app.get('/', (req,res)=>{
    console.log('Here');
    res.render("index",
        {user:"User: Jacob"});
}); //this function will run when someone goes to the root folder

app.get('/new', (req, res)=>{
    res.render('users/new',
        {firstName: "Please enter first name"})
});

app.listen(3030);