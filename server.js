const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log (`Server listening on ${PORT}`));

/* 
 app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'./Develop/public/index.html'));
 });

 app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'./Develop/public/notes.html'));
 }); */

 app.use(express.static(path.join(__dirname, './Develop/public')));

/* app.use(noTaker); */

/* const noTaker = (req, res, next) => {
    console.log ('Note Taker');
    next();
} */
