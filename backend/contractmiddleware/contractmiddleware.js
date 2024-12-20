const { provider, wallet, contract } = require('../config/contract');

const ethersMiddleware = (req, res, next) => {
    req.provider = provider;
    req.wallet = wallet;
    req.contract = contract;
    next();
};

module.exports = ethersMiddleware;