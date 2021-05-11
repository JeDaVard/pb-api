const fetch = require('node-fetch');
const config = require('../../config/env');
const externalRoutes = require('../../shared/constants/external-routes');

exports.getLists = async () => {
    const res = await fetch(
        `${config.domainServiceUrl}${externalRoutes.LISTS_API}`
    );
    const lists = res.json();
    return lists;
};

exports.getDomainsByList = async (id) => {
    if (typeof parseInt(id) !== 'number')
        throw new BadRequestError('Id must be numeric!');

    const res = await fetch(
        `${config.domainServiceUrl}${externalRoutes.LISTS_API}/${id}`
    );
    const lists = res.json();
    return lists;
};
