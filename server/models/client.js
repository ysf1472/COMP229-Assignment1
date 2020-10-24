// created :Yusuf Hekimoglu Student#: 301081665  Date 2020-10-23 -->
let mongoose = require(`mongoose`);

// create a model class
let  clientModel = mongoose.Schema({
    name:  String,
    phone: Number,
    email: String,
},
{ collection: "clients"
});

module.exports = mongoose.model("Client",clientModel);