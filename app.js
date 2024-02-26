//conexion a la base de datos 
const express = require ('express');
const bodyParser = require('body-parser');
const mongooe = require('mongoose');
const app = express();

mongoose.conect('mongodb+srv://luna:Wch8pR2yKa7z2nZM@cluster0.tvmzero.mongodb.net/')

const connection = mongoose.connection;

connect.one('open',()=>{
    console.log('conexion existosa')
})
connect.on('error', (err)=>{
    console.log('error en la conexion', err);
})

app.get('/',(req,res)=>{
    res.json({response:'success'})
})

app.listen(3000, ()=>{
console.log('servidor listo');
});