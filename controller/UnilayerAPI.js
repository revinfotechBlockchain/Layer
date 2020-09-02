
var express = require('express');
var config = require('../routes/config.json');
var ChainId = require('@uniswap/sdk');
console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
// var Txs = require('ethereumjs-tx').Transaction;
// var request = require("request");
// var Web3 = require('web3');
// const httpEndPoint = config.connectionURL;
// var web3 = new Web3(new Web3.providers.HttpProvider(httpEndPoint));
// const contractAddress = config.contractAddress;
// const abi = require('../controller/abi.json');


module.exports = {
    getBalance: async (req, res) => {
        try {
            console.log("Hello")
        } catch(err){
            let response = {status:false, message:"Unable to get Owner Address, Please Try Again!!!"};
            res.send(response);
        }
    },
 
}