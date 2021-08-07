const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");
const app = express();
dotenv.config();

app.use(express.json());

mongoose
  .connect(`${process.env.DB}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Mongo Connected nected ected"))
  .catch((err) => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(5000, () => {
  console.log("Backend server is running");
});
