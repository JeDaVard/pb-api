require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.port,
        domainServiceUrl: process.env.domainServiceUrl,
        rabbitApi: process.env.rabbitApi,
    },
};

module.exports = config[env];
