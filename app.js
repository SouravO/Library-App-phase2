
const express = require('express');
// const booksRouter = express.Router();
const app = express();

const nav = [
    // {
    //     link:'/books',name:'Books'},
    // {
    //     link:'/author',name:'Authors'},
    // {
    //     link:'/admin',name:'Add Book'},
    // {
    //     link:'/adminauthor',name:'Add Author'},
    {
        link:'/signup',name:'SignUp'},
     {
       link:'/login',name:'Login'},
        
];
const nav1 = [
    {
        link:'/books',name:'Books'},
    {
        link:'/authors',name:'Authors'},
    {
        link:'/admin',name:'Add Book'},
    {
        link:'/adminauth',name:'Add Author'},
    // {
    //     link:'/signup',name:'Sign Up'},
    // {
    //     link:'/login',name:'Log In'},
    {
        link:'/',name:'Log Out'},
];
const nav2 = [
    {
        link:'/books',name:'Books'},
    {
        link:'/authors',name:'Authors'},
    {
        link:'/admin',name:'Add Book'},
    {
        link:'/adminauth',name:'Add Author'},
    {
        link:'/signup',name:'Sign Up'},
    {
        link:'/login',name:'Log In'},
    {
        link:'/logout',name:'Log Out'},
];

// seperating files
const booksRouter = require('./src/routes/bookRoutes')(nav1)  //passing nav to bookRoutes.js
const adminRouter = require('./src/routes/adminRoutes')(nav1) //passing nav to adminRoutes.js
const authorsRouter = require('./src/routes/authorRoutes')(nav1)
const authorRouter = require('./src/routes/authorRoutes')(nav)
const signupRouter = require('./src/routes/signupRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)
const adminauthorRouter = require('./src/routes/adminauthorRoutes')(nav1)

app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));
// ejs step below and also index.html>index.ejs
app.set('view engine','ejs');
app.set('views','./src/views');
// 2nd router method
app.use('/books',booksRouter);
app.use('/admin',adminRouter);
app.use('/author',authorsRouter);
// app.use('/authorsi',authorRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/adminauthor',adminauthorRouter);



app.get('/',function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",
    {
        // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        nav,
        title:'Library'
    });

});

// app.post('/add', upload.single('image'), function (req, res, next) {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//     console.log(req.file, req.body)
//   })




app.listen(4600); 

