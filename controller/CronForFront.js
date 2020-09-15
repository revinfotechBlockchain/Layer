const express = require('express');
// const Web3 = require("web3");
const config = require('../routes/config.json');
const axios = require('axios');
var cron = require('node-cron');
var db = require('../db/db.js');
const mongoose = require('mongoose');
const exchangeAddresses = mongoose.model('exchangeAddresses');
const pairExchangeDetail = mongoose.model('pairExchangeDetail');
const allTransactions = mongoose.model('allTransactions');

//const DEXAG = require('dexag-sdk');
//import {DEXAG} from 'dexag-sdk'
//const sdk = DEXAG.fromProvider(window.ethereum);
var apiKey = "e5bc8349129fe611931adedb2c6835f3500ba08cbcfb3ba24a01db648614";
var exchangeAddress = "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11";

cron.schedule('* 10 * * * *', async () => {
    await axios.get('https://api.coingecko.com/api/v3/exchanges/uniswap').then(async output=>{
        // console.log(output.data.tickers)
            var obj =  { pairName : 'top20',data : {marketData : output.data.tickers}, status : 'true'};
                await pairExchangeDetail.findOneAndUpdate('top20',obj,{new: true, upsert: true},(err, doc) => {
                    if (!err){
                        console.log("New Entry Added in whitelist database") 
                        }
                    else{
                console.log({error :'Error during Json insertion insertion : ' + err});
            }
        });
    });
});

cron.schedule('* 10 * * * *', async () => {
    await axios.get('https://data-api.defipulse.com/api/v1/blocklytics/pools/v1/trades/'+exchangeAddress,{headers: {'Authorization': `Basic ${apiKey}` }}).then(async output=>{  
        var obj =  { transactionType : 'allTransactions',data : {transactionData : output.data}, status : 'true'};
            await allTransactions.findOneAndUpdate('top20',obj,{new: true, upsert: true},(err, doc) => {
                if (!err){
                    console.log("New Entry Added in whitelist database") 
                }
                else{
                console.log({error :'Error during Json insertion insertion : ' + err});
            }
        });
    });
});

module.exports = {
    whitelistExchangeAddress: async (req, res) => {
        var obj =  { pairName : req.body.pairName, exchangeAddress : req.body.address, status : req.body.status};
        console.log("This is obj",obj);
        await exchangeAddresses.findOneAndUpdate(req.body.address,obj,{new: true, upsert: true},(err, doc) => {
        if (!err){
                console.log("New Entry Added in whitelist database") 
                res.send({status:true, data : "Entry added"})
            }
        else{
            console.log({error :'Error during Json insertion insertion : ' + err});
            res.send({status:false, data : "Entry rejected"})
            }
        });
    },
    getWhitelistedExchnageAddress: async (req, res) => {
        await exchangeAddresses.find((err, docs) => {
            if (!err) {
                res.send(docs);
                }
            else{
                console.log({error :'Error in getting details :' + err});
            }
        });
    },
    addPairExchangeDetail: async (req, res) => {
        var obj =  { pairName : req.body.pairName,data : req.body.data, status : req.body.status};
        await pairExchangeDetail.findOneAndUpdate(req.body.name,obj,{new: true, upsert: true},(err, doc) => {
        if (!err){
                console.log("New Entry Added in exchange details database") 
                res.send({status:true, data : "Entry added"})
            }
        else{
            console.log({error :'Error during Json insertion insertion : ' + err});
            res.send({status:false, data : "Entry rejected"})
            }
        });
    },
    getPairExchangeDetail: async (req, res) => {
        await pairExchangeDetail.find((err, docs) => {
            if (!err) {
                res.send(docs);
                }
            else{
                console.log({error :'Error in getting details :' + err});
            }
        });
    },
    getAllTransactions: async (req, res) => {
        await allTransactions.find((err, docs) => {
            if (!err) {
                res.send(docs);
                }
            else{
                console.log({error :'Error in getting details :' + err});
            }
        });
    },
}