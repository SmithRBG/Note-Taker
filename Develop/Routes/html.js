const fs = require('fs');
const path = require('path');
const router = require('express').Router();

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));

});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));

});

update => {
    fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
        if(err) throw err;
        return true;
    });

    module.exports = router;
}