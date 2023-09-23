const express = require('express');
const mongoose = require('mongoose');
 const cors = require('cors')
 const UserModel = require('./models/Users')



const app = express()
app.use(cors())
app.use(express.json())


//  To connect to mogoose db

mongoose.connect("mongodb://localhost:27017/crud")


// Api to fetch data from the mongoose database
app.get('/', (req, res)=>{
          UserModel.find({})
          .then(users => res.json(users))
          .catch(err => res.json(err))
})
// Api to insert data into mongoose database
app.post('/create', (req, res)=>{
          UserModel.create(req.body)
          .then(user => res.json(user))
          .catch(err => res.json(err))
})

// Api to update the data from the mongoose database
app.put('/update/:id', (req, res)=>{
          const id = req.params.id;
          UserModel.findByIdAndUpdate({_id: id}, {
                    name: req.body.name,
                    email: req.body.email,
                    age: req.body.age
          })
          .then(user => res.json(user))
          .catch(err => res.json(err))
})
app.delete('/deleteUser/:id', (req, res)=>{
          const id = req.params.id;
          UserModel.findByIdAndDelete({_id: id})
          .then(user => res.json(user))
          .catch(err => res.json(err))
})
app.listen(3001, ()=>{
          console.log("Server is Running on Port 3001")
})