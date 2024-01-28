const { Client } = require("pg");

const { database } = require("./constants");

const client = new Client({
    host: database.hostname,
    port: database.port,
    password: database.password,
    user: database.username,
    database: database.name,
    ssl: false,
});

client.connect();

module.exports = client;
