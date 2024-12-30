const mongoose = require('mongoose')

const travelPlanSchema = new mongoose.Schema({
    destination: String,
    startDate: Date,
    endDate: Date,
    activities:[String]
})

module.exports = mongoose.model('travelPlan',travelPlanSchema)