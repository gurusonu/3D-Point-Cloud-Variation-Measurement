const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const PORT = 4000;
const userRoutes = express.Router();

let User = require('./models/user');

app.use(cors());
app.use(bodyParser.json());

// Connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})

// API endpoints

// Getting all the users
userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// Adding a new user
userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});

// login
userRoutes.route('/login').post(function(req, res) {
    // console.log("enterr")
    user_pro = req.body.username
    // console.log(user_pro)
    User.find({username : req.body.username}, function(err,user_exist){
        if(err)
        {
            console.log(err);
        }
        if(!user_exist.length)
        {
            console.log("User does not exist")
            // console.log("1")
            res.send("1")
        }
        else
        {
            // console.log("not")
            User.find({email : req.body.email}, function(err,user_exist2){
                if(err)
                {
                    console.log(err);
                }
                if(!user_exist2.length)
                {
                    // console.log("2")
                    // console.log("User does not exist")
                    res.send("2")
                }
                else
                {
                    // console.log(user_exist[0].type_of_user)
                    if(user_exist[0].type_of_user==="customer")
                    {
                        // console.log("3")
                        console.log("customer")
                        res.send("3")
                    }
                    if(user_exist[0].type_of_user==="vendor")
                    {
                        // console.log("4")
                        console.log("vendor")
                        res.send("4")
                    }
                }
            });
        }
    });
});


// Getting a user by id
userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

app.use('/', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});
