const route = require('express').Router();

route.get("/api/notes", (req, res) => {
    res.json(notes);
});

route.post("/api/notes", (req, res) => {
    let note = req.body;
    notes.puah(note);
    update();
    return console.log("Create a new note:" + note.title);
});

route.get("/api/notes/:id", (req, res) => {
    res.json(notes[req.params.id]);
});

module.export = route;