const express = require('express');
const router = express.Router();
const Jadwal = require('../models/mahasiswa');

// GET semua jadwal
router.get('/', async (req, res) => {
    const jadwal = await Jadwal.findAll();
    res.json(jadwal);
});

// GET jadwal by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const jadwal = await Jadwal.findByPk(id);
    if (jadwal) {
        res.json(jadwal);
    } else {
        res.status(404).json({ message: 'Jadwal not found' });
    }
});

// POST tambah jadwal
router.post('/', async (req, res) => {
    const { id_kelas, id_mapel, id_guru, jam } = req.body;
    try {
        const newJadwal = await Jadwal.create({ id_kelas, id_mapel, id_guru, jam });
        res.status(201).json(newJadwal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PUT update jadwal
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { id_kelas, id_mapel, id_guru, jam } = req.body;
    try {
        const update = await Jadwal.update(
            { id_kelas, id_mapel, id_guru, jam },
            { where: { id } }
        );
        res.json({ message: 'Jadwal updated', update });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE jadwal
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Jadwal.destroy({ where: { id } });
        res.json({ message: 'Jadwal deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;