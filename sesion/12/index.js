const express = require('express');

const {users}=require('./users')

const app = express();
const port =3000;

app.get('/', (req, res)=>{
    res.send('hol aluna');
});

app.get('/users',(req,res)=>{
    res.json(users);
});


app.listen(port,()=>{
    console.log(`servidor iniciado en puerto ${port}`)
});

/* en navegador abrir:
http://localhost:3000 y
http://localhost:3000/users */