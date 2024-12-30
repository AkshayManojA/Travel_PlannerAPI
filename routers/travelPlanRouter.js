const express = require('express')
const travelPlanRouter = express.Router()
const {getTravelPlans,getTravelPlanById,createTravelPlan,updateTravelPlan,deleteTravelPlan} = require('../controllers/travelPlanController')

//localhost:3002/travelplans
travelPlanRouter.get('/',getTravelPlans)

//localhost:3002/travelplans/<id>
travelPlanRouter.get('/:id',getTravelPlanById)

//Create a Travel Plan
travelPlanRouter.post('/',createTravelPlan)

//update a Travel Plan
travelPlanRouter.patch('/:id',updateTravelPlan)

//delete a Travel Plan
travelPlanRouter.delete('/:id',deleteTravelPlan)


module.exports = travelPlanRouter