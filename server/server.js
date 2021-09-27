require("dotenv").config();
const express = require("express");
const sequelize = require("./db.js");
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const routes = require('./routes/index.js')
const errorMiddleware = require('./middlewares/errorMiddleware.js')

const app = express();
app.use(cors());

app.use(express.json())
app.use('/api/v1', routes)
app.use(errorMiddleware)

const run = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`server running on port: ${PORT}`);
        });
    } catch (e) {
        console.error(e);
    }
};
run();
