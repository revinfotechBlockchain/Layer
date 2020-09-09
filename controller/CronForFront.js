const express = require('express');
// const Web3 = require("web3");
const config = require('../routes/config.json');
const axios = require('axios');
var cron = require('node-cron');
var db = require('../db/db.js');
const mongoose = require('mongoose');
const exchangeAddresses = mongoose.model('exchangeAddresses');
const PairExchangeDetail = mongoose.model('PairExchangeDetail');
//const DEXAG = require('dexag-sdk');
//import {DEXAG} from 'dexag-sdk'
//const sdk = DEXAG.fromProvider(window.ethereum);
var apiKey = "e5bc8349129fe611931adedb2c6835f3500ba08cbcfb3ba24a01db648614";

// cron.schedule('*/10 * * * * *', async () => {
//             var obj =  { pairName : "" , data : "{}"  , status : ""};
//             await PairExchangeDetail.findOneAndUpdate({StakeId:id},obj,{new: true, upsert: true},(err, doc) => {
//             if (!err){
//                 console.log("New Entry Added in Corn") 
//             }
//             else {
//             console.log({error :'Error during Json insertion insertion : ' + err});
//             }
//         });
// });

module.exports = {
    whitelistExchangeAddress: async (req, res) => {
        var obj =  { exchangeAddress : req.body.address, Status : req.body.status};
        await exchangeAddresses.findOneAndUpdate(obj,{new: true, upsert: true},(err, doc) => {
        if (!err){
                console.log("New Entry Added in Corn") 
            }
        else{
            console.log({error :'Error during Json insertion insertion : ' + err});
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
}