const express = require('express');
const Food = require('../models/Food');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
    const { name, calories } = req.body;
    try {
        const food = new Food({ userId: req.user.id, name, calories });
        await food.save();
        res.status(201).json(food);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Get user foods
router.get('/', auth, async (req, res) => {
    try {
        const foods = await Food.find({ userId: req.user.id });
        res.json(foods);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;

