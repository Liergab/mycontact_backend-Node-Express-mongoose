const user = require("../model/userModel")
const bcrypt = require("bcrypt");

//@desc Register  User
//@route Get /api/v3/user/register
//@access public
const register = async(req ,res) => {
    const {username , email, password} = req.body

    try {
        if(!username || !email || !password){
            res.status(400);
            throw new Error("All fields are mandatory")
        }

        const userAvailable = await user.findOne({email})
        if(userAvailable){
            res.status(400);
            throw new Error("User already Registered")
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password,10);
        console.log(`hashpassword ${hashedPassword}`)

        const account = await user.create({
            username,
            email,
            password: hashedPassword
        })

        console.log(`User created ${account.id}`)
        res.status(201).json({_id:account.id, email:account.email, data:account},)
        
        
    } catch (error) {
        console.log(error.error)
        res.status("400").json({message:error.error})
    }
}

//@desc Login  User
//@route Get /api/v3/user/login
//@access public
const login =  (req,res) => {
    res.json({message:"lOGIN"})
  }

  //@desc current  User
//@route Get /api/v3/user/current
//@access private
const current =  (req,res) => {
    res.json({message:"Current user Information"})
}

const sample =  (req,res) => {
    res.render("Login")
 }

module.exports = {
    register,
    login,
    current,
    sample
}