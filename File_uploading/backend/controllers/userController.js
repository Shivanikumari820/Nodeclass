const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const userAuth=async(req, res)=>{
const token=     req.header("x-auth-token");

const verified = jwt.verify(token, "raj1234");

console.log(verified.id);

 const User = await UserModel.findById(verified.id);

    res.send({user:User});
}





const userRegistration = async (req, res) => {
    const { name, email, password } = req.body;

     const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

    const User = await UserModel.create({
        name: name,
        email: email,
        password: hashedPassword
    })
   res.status(201).json({msg:"You are Succesfully Registered!"});
}

const userLogin = async (req, res) => {
    const {  email, password } = req.body;
   
   const User= await UserModel.findOne({email:email});

        if (!User)
        {
           res.send("Invalid Email!");
        }

       const validPassword = await bcrypt.compare(password, User.password);


       if (!validPassword)
       {
        res.send("Invalid Passwaor!");
       }

      
     const token = await jwt.sign({id:User._id}, "raj1234",  { expiresIn: '7 days' } )
     
     res.send({token:token});

   
}






module.exports = {
    userRegistration,
    userLogin,
    userAuth
}