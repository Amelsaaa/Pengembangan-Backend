const express = require('express');
const router = express.Router();
const User = require('../models/userr');

// GET semua user
router.get('/', async (req, res) => {
    const user = await User.findAll();
    res.json(user);
});

// GET user by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// POST tambah user
router.post('/', async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const newUser = await User.create({ email, password, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PUT update User
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { email, password, role } = req.body;
    try {
        const update = await User.update(
            { email, password, role },
            { where: { id } }
        );
        res.json({ message: 'User updated', update });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE User
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id } });
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
