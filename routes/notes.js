const express = require("express");
const { readFile, appendFile } = require("../helpers/file-io");
const uuid = require("../helpers/random-string");

const router = express.Router();

// GET routes
router.get("/notes", async (req, res) => {
  const data = await readFile("./db/db.json");
  const notes = JSON.parse(data);
  res.json(notes);
});

// POST routes
router.post("/notes", async (req, res) => {
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid(),
  };
  await appendFile(newNote, "./db/db.json");
  res.json({ message: "Note created successfully" });
});

// DELETE route
router.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const notesData = await JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  const index = notesData.findIndex((note) => note.id === id);

  if (index !== -1) {
    notesData.splice(index, 1);
    await fs.writeFileSync("./db/db.json", JSON.stringify(notesData));
    res.json({ message: "Note deleted successfully" });
  } else {
    res.status(404).json({ error: "Note not found" });
  }
});

module.exports = router;
