const TravelData = require('../models/TravelPlan')

// to Get all Travel Plan
const getTravelPlans = async (req,res)=>{
    try {
        const travelPlans = await TravelData.find()
        res.status(200).json(travelPlans)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//Get Travel Plans based on id
const getTravelPlanById = async(req,res)=>{
    try {
        const planId = req.params.id
        const travelPlan = await TravelData.findById(planId)
        if(!travelPlan)return res.status(404).json({message:"Travel Plan not found"})

        res.status(200).json(travelPlan)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//Create
const createTravelPlan = async(req,res)=>{
    try {
        const {destination,startDate,endDate,activities} = req.body
        const newTravelPlan = new TravelData({destination,startDate,endDate,activities})
        await newTravelPlan.save()
        res.status(201).json(newTravelPlan)
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}

//Update 
const updateTravelPlan = async(req,res)=>{
    try {
        const planId = req.params.id
        const travelPlan = await TravelData.findByIdAndUpdate(planId,req.body,{new:true})
        if(!travelPlan)return res.status(404).json({message:"Travel Plan not found"})

        res.status(200).json(travelPlan)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//Delete
const deleteTravelPlan = async(req,res)=>{
    try {
        const planId = req.params.id
        const travelPlan = await TravelData.findByIdAndDelete(planId)
        if(!travelPlan)return res.status(404).json({message:"Travel Plan not found"})

        res.status(200).json({message:"product deleted successfully"})

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {getTravelPlans,getTravelPlanById,createTravelPlan,updateTravelPlan,deleteTravelPlan}