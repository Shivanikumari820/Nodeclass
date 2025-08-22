const UserModel = require("../models/userModel");


const userRegistration = async (req, res) => {
    const { name, email, password } = req.body;
    const User = await UserModel.create({
        name: name,
        email: email,
        password: password
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

        if (User.password!=password)
        {
            res.send("Invalid Password!");
        }

        res.status(202).send({msg:"You are succesfully login!"})

    console.log(User);
    res.send("OKK");
}



module.exports = {
    userRegistration,
    userLogin
}