const express = require('express');
const router = express.Router();

//Dummy Data
const ideas = [
  {
    id: 1,
    text: 'Positive Newsletter, a newsletter that only shares positive, uplifting news.',
    tag: 'Techology',
    username: 'TonyStark',
    date: '2025-01-01',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older your milk is getting.',
    tag: 'Inventions',
    date: '2025-01-01',
  },
  {
    id: 3,
    text: "ATM location app which lets you know where the closest ATM's are and if they are in service.",
    tag: 'Software',
    username: 'BruceBanner',
    date: '2025-01-01',
  },
];

// Get all ideas
router.get('/', (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get single idea
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  res.json({ success: true, data: idea });
});

//Add an idea
router.post('/', (req, res) => {
  const idea = {
    id: 4,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: req.body.date,
  };

  ideas.push(idea);
  res.json({ success: true, data: ideas });
});

//Update an idea
router.put('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  idea.text = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;

  res.json({ success: true, data: idea });
});

//Delete an idea
router.delete('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  const index = ideas.indexOf(idea);
  ideas.splice(index, 1);

  res.json({ success: true, data: {} });
});

module.exports = router;
