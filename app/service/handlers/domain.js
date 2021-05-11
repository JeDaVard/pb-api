const BadRequestError = require('../../libs/errors/bad-request-error');
const { RequestUrlsInfoPublisher } = require('../../events');
const { mqClient } = require('../../libs/rabbit');

// INSTEAD IF THIS U CAN HAVE A BETTER LOGGER
const requestUrlsInfoLogger = () => {
    console.log(
        '[pb-api] Request sent to rabbitmq for processing the urls (to pb service)'
    );
};

exports.getDomainInfo = async (data) => {
    if (!Array.isArray(data.urls))
        throw new BadRequestError('Urls must be an array of url strings!');

    const requestUrlsInfoPublisher = await (
        await new RequestUrlsInfoPublisher(mqClient.connection).createChannel()
    ).assertExchange();
    requestUrlsInfoPublisher.publish(data, requestUrlsInfoLogger);

    return {};
};
