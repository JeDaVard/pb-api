const { Publisher } = require('../../libs/rabbit');
const { domainsRequestExchange } = require('../types');

module.exports = class RequestUrlsInfoPublisher extends Publisher {
    exchange = domainsRequestExchange;
    routeKey = 'urls.request';
};
