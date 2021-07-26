const fs = require('fs');
const path = require('path');
const route = require('express').Router();

route.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));

});

route.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));

});

update => {
    fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
        if(err) throw err;
        return true;
    });

    module.exports = route;
}