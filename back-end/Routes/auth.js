const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");


//Register
router.post("/register", async(req, res) => {

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = await  User.create({
            password: hashedPass,
            username: req.body.username,
            email: req.body.email,
        })
            
        res.status(200).json(newUser);
    }
    catch(err){
        res.status(500).json({
            status: "failed",
            err
        });
    }
});


//Login
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if(!user)
        return res.status(400).json("Wrong credentials!");
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      if(!validated)
        return res.status(400).json("Wrong credentials!");
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//


module.exports = router;