require("dotenv").config();

const express = require("express");
const cors = require("cors");

const router = require('./router');
const constants = require('./constants');

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
app.use(router);

app.listen(constants.app.port, () => `The Server is running on port ${constants.app.port}`);
