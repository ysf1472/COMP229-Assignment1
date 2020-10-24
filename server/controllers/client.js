// created :Yusuf Hekimoglu Student#: 301081665  Date 2020-10-23 -->
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const client = require('../models/client');

// create a reference to the model
let Client = require('../models/client');

// module.exports.ClientList = (req, res, next) => {
//     Client.find({})
//       .sort("username")
//       .exec(function (
//         err,
//         ClientList // Sorts alphabetically
//       ) {
//         if (err) {
//         } else {
//           res.render("client/list", {
//             title: "Client List",
//             ClientList: clientList,
//             displayName: req.user ? req.user.displayName : "",
//           });
//         }
//       });
//   };

module.exports.displayClientList = (req, res, next) => {
    Client.find((err, clientList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            

            res.render('client/list',
             {title: 'clients',
             ClientList: clientList,
               displayName: req.user ? req.user.displayName : ``});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('client/add', {title: 'Add Contact',
    displayName: req.user ? req.user.displayName : ``})          
}

module.exports.processAddPage = (req, res, next) => {
    let newClient = Client({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    });

    Client.create(newClient, (err, Client) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the Client list
            res.redirect('/client-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Client.findById(id, (err, clientToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('client/edit', {title: 'Edit Client', client: clientToEdit,
            displayName: req.user ? req.user.displayName : ``})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedClient = Client({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    });

    client.updateOne({_id: id}, updatedClient, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the Client list
            res.redirect('/client-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Client.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the Client list
             res.redirect('/client-list');
        }
    });
}