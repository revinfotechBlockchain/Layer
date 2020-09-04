
const express = require('express');
const Web3 = require("web3");
const config = require('../routes/config.json');
const axios = require('axios');
//const DEXAG = require('dexag-sdk');
//import {DEXAG} from 'dexag-sdk'
//const sdk = DEXAG.fromProvider(window.ethereum);
var apiKey = "e5bc8349129fe611931adedb2c6835f3500ba08cbcfb3ba24a01db648614";


module.exports = {

    getPairExchangeDetailByAddress: async (req, res) => {
        
        if (req.query.exchangeAddress && !req.query.exchangeAddress == "") {
            console.log(req.query.exchangeAddress)
            await axios.get('https://data-api.defipulse.com/api/v1/blocklytics/pools/v1/exchange/'+req.query.exchangeAddress,{headers: {'Authorization': `Basic ${apiKey}` }}).then(async output=>{
            let response = {status:true, data:output.data};
            res.send(response);            
            }).catch(err => {
                let response = {status:false, message:"Unable to get Pair Exchange Detail by Address, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Exchange Address & Try Again!!!"};
            res.send(response);
        }
    },

    getAllPairExchangeDetail: async (req, res) => {
        
            await axios.get('https://data-api.defipulse.com/api/v1/blocklytics/pools/v1/exchanges?api-key='+apiKey+'&platform=Uniswap-v2').then(async output=>{
            let response = {status:true, data:output.data};
            res.send(response);            
            }).catch(err => {
                let response = {status:false, message:"Unable to get Pair Price Detail, Please Try Again!!!"};
                res.send(response);
            });
    },
 
    getPairPriceDetail: async (req, res) => {
        
        if (req.query.from && req.query.to && !req.query.from == "" && !req.query.to == "") {
            await axios.get('https://api-v2.dex.ag/price?from='+req.query.from+'&to='+req.query.to+'&fromAmount='+req.query.fromAmount+'&dex=uniswap').then(async output=>{
            let response = {status:true, data:output.data};
            res.send(response);            
            }).catch(err => {
                let response = {status:false, message:"Unable to get Pair Price Detail, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Entity & Try Again!!!"};
            res.send(response);
        }
    },

    getPairTradeDetail: async (req, res) => {
        
        if (req.query.from && req.query.to && !req.query.from == "" && !req.query.to == "") {
            await axios.get('https://api-v2.dex.ag/trade?from='+req.query.from+'&to='+req.query.to+'&fromAmount='+req.query.fromAmount+'&dex=uniswap').then(async output=>{
            let response = {status:true, data:output.data};
            res.send(response);            
            }).catch(err => {
                let response = {status:false, message:"Unable to get Pair Trade Details, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Entity & Try Again!!!"};
            res.send(response);
        }
    },

    getAvailableTokenPairs : async (req, res) => {

            await axios.get('https://api-v2.dex.ag/token-list-full').then(async output=>{
            let response = {status:true, data:output.data};
            res.send(response);            
            }).catch(err => {
                let response = {status:false, message:"Unable to get Available Token Pairs, Please Try Again!!!"};
                res.send(response);
            });
    },
}