const express = require("express");
const cors = require("cors")
require('./db-config/config');

const app = express();
app.use(express.json());
app.use(cors());

const register = require('./routes/user_routes');



app.use(register);

app.listen(9000);

