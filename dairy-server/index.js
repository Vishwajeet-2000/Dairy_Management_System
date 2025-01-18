const express = require("express");
const cors = require("cors")
require('./db-config/config');

const app = express();
app.use(express.json());
app.use(cors());


const user = require('./routes/user_routes');
const customer = require('./routes/customerRoutes')


app.use(user);
app.use(customer);



app.listen(9000);

