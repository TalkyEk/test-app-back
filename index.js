const Express = require("express");
  const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config();

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = Express();

Mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", routes);


app.listen(PORT, () => {
  console.log("Listening at :3001...");
});
