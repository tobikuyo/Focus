const db = require("../database");

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await db.query("SELECT * FROM users");
        res.status(200).json({ results: users.rows.length, users: users.rows });
    } catch (error) {
        next(error);
    }
};

exports.addUser = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;
        const user = await db.query(
            "INSERT INTO users (name, email, message) VALUES ($1, $2, $3) RETURNING *",
            [name, email, message || null]
        );
        res.status(201).json(user.rows[0]);
    } catch (error) {
        next(error);
    }
};

exports.addTestUser = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;
        const user = await db.query(
            "INSERT INTO test (name, email, message) VALUES ($1, $2, $3) RETURNING *",
            [name, email, message || null]
        );
        res.status(201).json(user.rows[0]);
    } catch (error) {
        next(error);
    }
};
