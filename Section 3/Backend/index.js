const express= require('express');

const UserRouter =require('./router/userRouter');

//initilize express

const app= express();
const port= 5000;

//middleware

app.use('/user',UserRouter);

//Creating a  route
app.get('/',(req,res) => {
    res.send('Responce from express')
});

app.get('/add',(req,res) => {
    res.send('Add responce from server');
});

app.get('/getall',(req,res) =>{
    res.send('Getall responce from server ');
});

app.get('/update',(req,res) => {
    res.send('Update responce from server');
});

app.get('/delete',(req,res) =>{
    res.send('delete responce from server');
});


//Starting the server

app.listen(port,() =>{console.log('Server started !!')});

