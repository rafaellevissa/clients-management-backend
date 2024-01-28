const app = {
    port: process.env.APP_PORT || 3000,
}

const database = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSOWRD,
    hostname: process.env.DB_HOSTNAME,
    port: parseInt(process.env.DB_PORT) || 5432,
    name: process.env.DB_NAME,
};

module.exports = {
    app,
    database,
}