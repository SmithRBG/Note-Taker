const router = require('express').Router();

router.get("/api/notes", (req, res) => {
    res.json(notes);
});

router.post("/api/notes", (req, res) => {
    let note = req.body;
    notes.push(note);
    update();
    return console.log("Create a new note:" + note.title);
});

router.get("/api/notes/:id", (req, res) => {
    res.json(notes[req.params.id]);
});

module.exports = router;