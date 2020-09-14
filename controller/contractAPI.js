
var express = require('express');
var config = require('../routes/config.json');
var Txs = require('ethereumjs-tx').Transaction;
var request = require("request");
var Web3 = require('web3');
const httpEndPoint = config.connectionURL;
var web3 = new Web3(new Web3.providers.HttpProvider(httpEndPoint));
const contractAddress = config.contractAddress;
const abi = require('../controller/abi.json');

module.exports = {

    swapToken: async (req, res) => {
    try {
    var gasPrice = '0x09184e72a000';
    var gasLimit = 55000;
    var count = await web3.eth.getTransactionCount(req.body.fromAddress);
    var contract = await new web3.eth.Contract(abi,contractAddress,{from: req.body.fromAddress});    
    var chainId = 0x01;

    var rawTx = {
        "from": req.body.fromAddress,
        "nonce": "0x" + count.toString(16),
        "gasPrice": gasPrice,
        "gasLimit": gasLimit,
        "to": contractAddress,
        "value": "0x0", // Indication that we are not sending any ethers but our own tokens
        "data": contract.methods.swapExactTokensForTokens(req.body.amountIn, req.body.amountOutMin, req.body.path, req.body.toAddress, req.body.deadline).encodeABI(),
        "chainId": chainId
    };

    var privKeyBuffer = new Buffer(req.body.privateKey, 'hex');
    const tx = new Txs(rawTx,{'chain':'ropsten'});
    tx.sign(privKeyBuffer);
    web3.eth.sendSignedTransaction('0x' + tx.serialize().toString('hex'), function(error, tHash) {

    if (error){
    let response = '{"status":"false","hash":"","error":"'+error+'"}';
    res.send(JSON.parse(response));
    }
    else {
    let response = '{"status":"true","hash":"'+tHash+'","error":""}';
    res.send(JSON.parse(response));
    }});
    } catch(err){
        let response = {status:false, message:"Unable to Swap Token, Please Try Again!!!"};
        res.send(response);
    }
},

}