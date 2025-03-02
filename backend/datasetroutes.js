const express = require('express');
const Dataset = require('./Dataset'); 
const router = express.Router();

// Fetch dataset by ID
router.get('/datasets/:id', async (req, res) => {
    try {
        const dataset = await Dataset.findById(req.params.id);
        if (!dataset) {
            return res.status(404).json({ error: "Dataset not found" });
        }
        res.json(dataset);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch dataset" });
    }
});

module.exports = router;
