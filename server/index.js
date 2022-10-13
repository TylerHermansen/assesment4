const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getGoal } = require('./controller')
const { getDinner} = require('./controller')
const { getDate } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune);
app.get("/api/goal", getGoal);
app.get("/api/dinner",getDinner);
app.get("/api/date",getDate);

app.listen(4000, () => console.log("Server running on 4000"));
