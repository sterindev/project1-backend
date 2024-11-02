const express = require('express');
const Exercise = require('../models/Exercise');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
    const { type, duration, caloriesBurned } = req.body;
    try {
        const exercise = new Exercise({ userId: req.user.id, type, duration, caloriesBurned });
        await exercise.save();
        res.status(201).json(exercise);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Get user exercises
router.get('/', auth, async (req, res) => {
    try {
        const exercises = await Exercise.find({ userId: req.user.id });
        res.json(exercises);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
