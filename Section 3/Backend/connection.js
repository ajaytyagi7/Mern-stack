const mongoose = require('mongoose');

const url="mongodb+srv://ajaytyagi07:ajaytyagi8887@cluster0.xna1wfn.mongodb.net/mern330nov?retryWrites=true&w=majority";

//asynchronous
mongoose.connect(url)
.then((result) => {
     
    console.log('connected to mongodb');
    
}).catch((err) => {
    console.log(err);
    
});

//synchronous
console.log('some task 1');

//synchronous
setTimeout(() =>{console.log('delayed task')},5000);

//synchronous
console.log('some task 2');

module.exports=mongoose;