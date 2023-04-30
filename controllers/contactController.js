const {ObjectId} = require("mongodb")

const Employee = require("../model/Employee")


const retrieveContact = async (req,res) => {
    try {
        const employee = await Employee.find()
        res.render("home", {Data:employee})
    } catch (error) {
        res.status(500).json(error.errors)
        console.log(error.errors)
    }
}

//@desc Get all contacts
//@route Get /api/v3/contacts
//@access public
const getAllContact =  async(req, res) => {
    try {
        const employee = await Employee.find()

        if(!employee){
            res.status(500)
            throw new Error("No contact Found")
        }
        res.status(200).json({employee})
    } catch (error) {
        res.status(500).json(error.errors)
        console.log(error.errors)
    }
}

//@desc Get  contacts by ID
//@route Get /api/v3/contacts/:id
//@access public
const getContactbyId =  async(req, res) => {
    const _id = new ObjectId(req.params.id)
    try {
        const employee = await Employee.findById(_id);
        res.status(200).json(employee)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.error})
    }
    
}

//@desc create  contacts
//@route post /api/v3/contacts
//@access public
const createContact =  async(req, res) => {
     const {name, age, gender} = req.body
      const data = {name, age, gender}
    try {
        if(!name || !age || !gender){
            res.status(400)
            throw new Error("All fields are mandatory")
            
        }else{
            const employee = await Employee.create(data)
            res.status(201).json({message:"Created", data:employee})
        }
       
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message, stackTrace: error.stack})
    }
    
    
    // res.send(`name : ${name}, Age:${age}, Gender:${gender}`)
}

//@desc Update  contacts by ID
//@route put /api/v3/contacts/:id
//@access public
const updateContactbyId = async(req, res) => {
    const {name,age,gender} = req.body
    const _id = new ObjectId(req.params.id)

    try {
        const employee = await Employee.findByIdAndUpdate({_id}, 
            {$set : {name:name, age:age, gender: gender}})

            res.status(200).json({message:"Updated", data:employee})
    } catch (error) {
        console.log(error.error)
        res.status(500).json({message:error.error})
    }
}

//@desc delete  contacts by ID
//@route delete /api/v3/contacts/:id
//@access public
const deleteContactbyId =   async(req, res) => {
    const _id = new ObjectId(req.params.id)
    try {
        const employee = await Employee.findByIdAndDelete(_id)
        res.status(200).json({message:"Deleted", Data:employee})
    } catch (error) {
        console.log(error.error)
        res.status(500).json({message:error.error})
    }
}

module.exports = {
                  retrieveContact,
                  getAllContact,
                  getContactbyId,
                  createContact, 
                  updateContactbyId , 
                  deleteContactbyId}