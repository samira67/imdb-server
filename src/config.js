//application specific config file
let config = {};

config.authInstanceId = "59ec490de4b03ffa03083698";
config.objectSorageInstanceId = "59ec490de4b0edcca318e18a";
config.integratedMasterKey = "c958dce949d44f7699ec77c0";
config.clientKey = "59ec490de4b05ef67685eff2";
config.cloudCode = "59ec490ee4b0edcca318e190";
config.cdnInstanceId = "59ec49e6e4b03ffa03083b09";

config.baseUrl = "http://storage.backtory.com/samira-imdb";


config.lambdaHeaders =
    {
        'x-backtory-authentication-id': config.authInstanceId,
        'x-backtory-cache-mode': "No-Cache"
    };
module.exports = config;
