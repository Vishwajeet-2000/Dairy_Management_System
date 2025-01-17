const express = require("express");
const cors = require("cors")
require('./db-config/config');
const User = require('./Schemas/User')
const app = express();

app.use(express.json());
app.use(cors());

