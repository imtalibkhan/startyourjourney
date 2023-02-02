
// authController.post("/register", async (req, res) => {
//     try {
//       const isExisting = await User.findOne({ email: req.body.email });
//       if (isExisting) {
//         return res.status(404).json({ msg: "User already registered" });
//       }
  
//     //   if (req.body.username === "" || req.body.email === "" || req.body.password === "") {
//     //     return res.status(500).json({ msg: "All fields must be populated" });
//     //   }
  
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
//       const user = await User.create({ ...req.body, password: hashedPassword });
//       await user.save();
  
  
//       const {password, ...others} = user._doc
//       console.log(others)
//       const token = createToken(user);
//       console.log(token)
  
  
//       return res.status(201).json({ others, token });
//     } catch (error) {
//       return res.status(500).json(error);
//     }
//   });

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);