// init app import express
const express = require('express');
const app = express();
const port = 8080;
// post init
app.use(express.urlencoded({ extended: true }));

let article = require('./models/articleSchema');
let Admin = require('./models/adminsShcema')


// data base m

const mongoose = require('mongoose');
const Article = require('./models/articleSchema');
mongoose.connect("mongodb+srv://admin:khalil2004@cluster0.tgtij1l.mongodb.net/all-data?retryWrites=true&w=majority").then(
    result => { app.listen(port) }
).catch(error => { console.log(error); });


// template 
app.set('view engine', 'ejs');


// style static file
app.use(express.static('public'))




// home
app.get('/', (req, res) => {
    let articles;
    Article.find().then(
        result => {
            res.render('home.ejs', { articles: result }) 
        }
    )
    .catch(
        err => console.log(err)
    );


     //
    });

// add article
app.get('/add', (req, res) => { res.render("add_article.ejs") });



app.post('/', (req, res) => {
    article = new Article(req.body);
    article.save().then(res.redirect('/')).catch(res.redirect('/add'));
    res.redirect("/");
})


app.get("/admin", (req, res)=>{
    res.render('admins_pannel/pannel');
})

let admins;

app.get('/admin/add', (req, res)=>{
    admins.find().then(result =>{
        res.render('./admins_pannel/add_admin');
        console.log(result);
    }

    ).catch(err => console.log(err))
})
app.post("/admin/add", (req, res)=>{
    admin = new Admin(req.body)
    admin.save().then(
        res.redirect("/admin")
    ).catch(
        res.redirect("/admin/add")
    )
})



app.use((req, res) => { res.status(404).send("<h1>Page Not Found</h1>") });



