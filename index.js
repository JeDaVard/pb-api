const { createServer } = require('http');
const app = require('./app');
const config = require('./app/config/env');
const { mqClient } = require('./app/libs/rabbit');
const { UrlsInfoResultsSubscriber } = require('./app/events');

const server = createServer(app);

const urlsInfoResultsLogger = () => {
    console.log('[pb-api] Received back from pb service');
};

// NOT A BEST PRACTICE, JUST A FAST PRACTICE))
mqClient.connect(config.rabbitApi).then(() => {
    (async function () {
        const urlsInfoResultsSubscriber = await (
            await (
                await (
                    await (
                        await new UrlsInfoResultsSubscriber(
                            mqClient.connection
                        ).createChannel()
                    ).assertExchange()
                ).prefetch()
            ).assertQueue()
        ).bindQueue();

        await urlsInfoResultsSubscriber.listen(urlsInfoResultsLogger);
        console.log('[pb-api] Subscribers are ready...');
    })();

    console.log('[pb-api] Rabbit is connected...');
    server.listen(config.port, () => {
        console.log(`[pb-api] Server is up on ${config.port}`);
    });
});
