const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const articleSchema = new Schema(
    {
        title: String,
        description: String,
        content: String,
    }
);


// create model base on shcema
const Article = mongoose.model('Article', articleSchema);


// export article
module.exports = Article;