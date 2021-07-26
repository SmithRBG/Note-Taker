const express = require('express');
const path = require('path');
const app = express();

const api = require("./Routes/html");
const html = require('./Routes/api')

//port listening on
const PORT = process.env.PORT || 8080
//console log if running correctly
app.listen(PORT, () => console.log (`Server listening on ${PORT}`));



app.use(express.static(path.join(__dirname, './Develop/public')));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'./Develop/public/index.html'));
});

app.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname,'./Develop/public/notes.html'));
}); 

app.use(express.json());
app.use(express.static("public"));




/*  //route methods
app
 .route('/api/notes')
    .get((req, res) => {})
    .post((req, res) => {});

app
/*  .route('/api/notes/:id')
    .get((req, res) => {})
    .put((req, res) => {})
    .delete((req, res) => {});
 */

 
/* app.use(noTaker); */

/* const noTaker = (req, res, next) => {
    console.log ('Note Taker');
    next();
} */
