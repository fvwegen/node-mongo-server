const Division = require('../models/divisions-model');


createDivision = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a division',
        })
    }

    const division = new Division(body)

    if (!division) {
        return res.status(400).json({ success: false, error: err })
    }

    division
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: division._id,
                message: 'Division created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Division not created!',
            })
        })
}

updateDivision = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Division.findOne({ _id: req.params.id }, (err, division) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Division not found!',
            })
        }
        division.Number = body.Number
        division.Description = body.Description
        division
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id:division._id,
                    message: 'Division updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Division not updated!',
                })
            })
    })
}

deleteDivision = async (req, res) => {
    await Division.findOneAndDelete({ _id: req.params.id }, (err, division) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!division) {
            return res
                .status(404)
                .json({ success: false, error: `Division not found` })
        }

        return res.status(200).json({ success: true, data: divison })
    }).catch(err => console.log(err))
}

getDivisionById = async (req, res) => {
    await Division.findOne({ _id: req.params.id }, (err, division) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!division) {
            return res
                .status(404)
                .json({ success: false, error: `Division not found` })
        }
        return res.status(200).json({ success: true, data: division })
    }).catch(err => console.log(err))
}

getDivisions = async (req, res) => {
    await Division.find({}, (err, divisions) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!divisions.length) {
            return res
                .status(404)
                .json({ success: false, error: `No divisions found` })
        }
        return res.status(200).json({ success: true, data: divisions })
    }).catch(err => console.log(err))
}

module.exports = {
    createDivision,
    updateDivision,
    deleteDivision,
    getDivisions,
    getDivisionById,
}