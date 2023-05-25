const express = require('express')
const Contact = require('../models/contactSchema')
const router = express.Router()

//@ DESCRIPTION: POST METHOD 
router.post('/users', async (req,res)=>{
    try {
        const newContact= new Contact (req.body)
        await newContact.save()
        res.status(200).json({msg:"success",newContact})
    } catch (err) {res.status(500).json({msg: err.message})}
})

//@ DESCRIPTION: GET METHOD 
router.get('/users', async (req,res)=>{
    try {
        const newContact= await  Contact.find ()
        res.status(200).json({msg:"success",newContact})
    } catch (err) {res.status(500).json({msg: err.message})}
})

//@ DESCRIPTION: GET ID METHOD 
router.get('/users:id', async (req,res)=>{
    try {
        const newContact= await  Contact.findbyId (req.params.id)
        if (!newContact) return res.status (404).json ({msg:"contact not found"})
        res.status(200).json({msg:"success",newContact})
    } catch (err) {res.status(500).json({msg: err.message})}
})


//@ DESCRIPTION: UPDATE METHOD 
router.get('/users:id', async (req,res)=>{
    try {
        const newContact= await  Contact.findbyIdAndUpdate ({_id:req.params.id},{...req.body})
        if (!newContact) return res.status (404).json ({msg:"contact not found"})
        res.status(200).json({msg:"contact update",newContact: {...newContact,...req.body}})
    } catch (err) {res.status(500).json({msg: err.message})}
})

//@ DESCRIPTION: DELETE METHOD 
router.get('/users:id', async (req,res)=>{
    try {
        const newContact= await  Contact.findbyIdAndDelete (req.params.id)
        if (!newContact) return res.status (404).json ({msg:"contact not found"})
        res.status(200).json({msg:"contact deleted",newContact})
    } catch (err) {res.status(500).json({msg: err.message})}
})






module.exports = router 