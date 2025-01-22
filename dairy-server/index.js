const express = require("express");
const cors = require("cors")
require('./db-config/config');

const app = express();
app.use(express.json());
app.use(cors());


const user = require('./routes/user_routes');
const customer = require('./routes/customerRoutes')
const milk = require('./routes/milkRoutes')
const fat = require('./routes/fatRoutes')


app.use(user);
app.use(customer);
app.use(milk);
app.use(fat);


app.listen(9000);

