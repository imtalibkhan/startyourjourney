const authController = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { verifyToken } = require("../middlewares/verifyToken");



//--------------------------------------------------------------------------------------------------------------------------------------
// 1==> registere functions
authController.post("/register", async (req, res) => {
  try {
    const isExisting = await User.findOne({ email: req.body.email });
    if (isExisting) {
      return res
        .status(404)
        .json({ msg: "Email has been already registerdddd" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ ...req.body, password: hashedPassword });

    await user.save();

    const { password, ...others } = user._doc;
    const token = createToken(others);


    return res.status(201).json({ others, token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});
//--------------------------------------------------------------------------------------------------------------------------------
//3==>>login part
authController.post("/login", async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            console.log("USER",User)
            return res.status(404).json({msg:"Invalid user"})
        }

        const comparepass= await bcrypt.compare(req.body.password, user.password)
        if(!comparepass){
            return res.status(404).json({msg:"Invalid credential password"})
        } 

        const {password,...others} =user._doc
    const token = createToken(others);
    return res.status(200).json({others,token})



        
    } catch (error) {
        return res.status(500).json(error.message);
    }
})




//----------------------------------------------------------------------------------------------------------------------------------






















//2==>>create token part
const createToken = (user) => {
  const payload = {
    id: user._id.toString(),
    isAdmin: user.isAdmin,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

module.exports = authController;
