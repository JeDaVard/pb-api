const { Listener } = require('../../libs/rabbit');
const { domainsResultExchange } = require('../types');

module.exports = class UrlsInfoResultsSubscriber extends Listener {
    onMessage(channel, data, msg) {
        console.log('---------END-OF-CHAIN----------');
        console.log(data);
        console.log('---------END-OF-CHAIN----------');
        channel.ack(msg);
    }
    exchange = domainsResultExchange;
    pattern = 'urls.ready';
    prefetchCount = 1;
};
