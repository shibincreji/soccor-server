require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const soccerRoutes = require("./routes/soccerRoutes");
//import routes from "./routes/soccerRoutes";


const app = express();
const PORT = 3000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//routes(app);

app.use(cors());
app.use("/api", soccerRoutes);

app.get('/', (req, res) => 
res.send(`Our soccer application is running at ${PORT}` )
);

app.listen(PORT, () =>
console.log(`Your soccer server is running at ${PORT}`)
);