const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');

// Task
router.post('/', async (req,res)=>{
    try{
        const data = req.body;

        const newMenu = new MenuItem(data);
        const response = await newMenu.save();

        console.log("Menu Data Saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log("Error in Menu :: ", err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

router.get('/', async (req,res)=>{
    try{
        const data = await MenuItem.find();

        console.log("Menu Shown Successfully");
        res.status(200).json(data);
    }
    catch(err){
        console.log("Menu Cannot be Shown :: ", err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

router.get('/:taste', async (req,res)=>{
    try{
        const taste = req.params.taste;

        if(taste == 'sweet' || taste == 'sour' || taste == 'spicy'){
            const response = await MenuItem.find({taste:taste});
            console.log("Taste fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:"Taste not found"});
        }
    }
    catch(err){
        console.log("Menu Cannot be Shown :: ", err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

// comment added for testing purpose
module.exports = router;