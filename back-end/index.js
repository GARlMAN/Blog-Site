const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./Routes/auth")
const userRoute = require("./Routes/userRoutes")
const postRoute = require("./Routes/postsRoutes")
const categoryRoute = require("./Routes/categoryRoutes"); 
const multer = require("multer");
const path = require("path");

dotenv.config();
PORT = process.env.PORT;


const app = express();
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())




mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to database"))
.catch(err => console.log(`Error encountered while connecting to db: ${err}`));


//upload image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
res.status(200).json("File has been uploaded");
});





app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`)
})