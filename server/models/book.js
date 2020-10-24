// created :Yusuf Hekimoglu Student#: 301081665  Date 2020-10-23 -->
let mongoose = require(`mongoose`);

// create a model class
let  bookModel = mongoose.Schema({
    name:  String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{ collection: "books"
});

module.exports = mongoose.model("Book",bookModel);