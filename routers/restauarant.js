const express = require('express');
const Restauarant = require('../models/Restauarant')
const router = new express.Router();


router.post('/restauarant', async (req, res) => {
    const restObj = new Restauarant(req.body);
    try {
        await RestObj.save();
        res.status(201).send(restObj)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.get('/restauarant', async (req, res) => {
    console.log("get req");
    return res.status(200).send('get ');
    // try {
    //     const restauarants = await Restauarant.find({});
    //     console.log( restauarants );
    //     res.status(200).send(restauarants)
    // } catch (err) {
    //     res.status(400).send(err)
    // }
})

router.get('/restauarant/:id', async (req, res) => {
    try {
        const restObj = await Restauarant.findByIdAndDelete(req.params.id);
        if (!restObj) {
            res.status(404).send('cant delete object')
        }
        res.status(200).send(restauarants)
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router