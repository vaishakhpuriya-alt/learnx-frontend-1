const router = require("express").Router();
const Question = require("../models/Question");
const User = require("../models/User");

// Get Questions
router.get("/", async (req, res) => {
    const questions = await Question.find().limit(5);
    res.json(questions);
});

// Submit Quiz
router.post("/submit", async (req, res) => {
    const { answers, userId } = req.body;

    const questions = await Question.find().limit(5);

    let score = 0;

    questions.forEach((q, index) => {
        if (q.correctAnswer === answers[index]) {
            score += 10;
        }
    });

    await User.findByIdAndUpdate(userId, {
        $inc: { totalXP: score }
    });

    res.json({ score });
});

// Leaderboard
router.get("/leaderboard", async (req, res) => {
    const users = await User.find().sort({ totalXP: -1 }).limit(10);
    res.json(users);
});

module.exports = router;

