//application specific config file
let config = {};

config.authInstanceId = "59e71ef6e4b0edcca2f82abe";
config.objectSorageInstanceId = "59e71ef6e4b03ffa02e808f0";
config.integratedMasterKey = "6b1f1489429a461780dafbfe";
config.clientKey = "59e71ef6e4b0f840c1225751";
config.cloudCode = "59e71ef6e4b0edcca2f82ac1";
config.cdnInstanceId = "59e72024e4b0edcca2f8323f";

config.baseUrl = "http://storage.backtory.com/samira";


config.lambdaHeaders =
    {
        'x-backtory-authentication-id': config.authInstanceId,
        'x-backtory-cache-mode': "No-Cache"
    };
module.exports = config;
