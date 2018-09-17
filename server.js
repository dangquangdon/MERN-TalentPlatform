const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
//MIDDLEWARE
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Passport
app.user = passport.initialize();

// CONFIG
//Passport config
require("./config/passport")(passport);
// DB config
const db = require("./config/keys").mongoURI;

// Connec to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hellooooo !!!");
});

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on your port ${port}`);
});
