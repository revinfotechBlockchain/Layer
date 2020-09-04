
const express = require('express');
const Web3 = require("web3");
const config = require('../routes/config.json');
const axios = require('axios');
//const DEXAG = require('dexag-sdk');
//import {DEXAG} from 'dexag-sdk'
//const sdk = DEXAG.fromProvider(window.ethereum);


module.exports = {

    // getPairExchangeDetailByAddress: async (req, res) => {
        
    //     if (req.query.exchangeAddress && !req.query.exchangeAddress == "") {
    //         console.log(req.query.exchangeAddress)
    //         await axios.get('https://data-api.defipulse.com/api/v1/blocklytics/pools/v1/exchange/'+req.query.exchangeAddress).then(async output=>{
    //         let response = {status:true, data:output.data};
    //         res.send(response);            
    //         }).catch(err => {
    //             console.log(err)
    //             let response = {status:false, message:"Unable to get Pair Exchange Detail by Address, Please Try Again!!!"};
    //             res.send(response);
    //         });
    //     } else {
    //         let response = {status:false, message:"Enter valid Exchange Address & Try Again!!!"};
    //         res.send(response);
    //     }
    // },

    // getAllPairExchangeDetail: async (req, res) => {
        
    //    // if (req.query.platform && !req.query.platform == "") {

    //         await axios.get('https://data-api.defipulse.com/api/v1/blocklytics/pools/v1/exchanges').then(async output=>{
    //         let response = {status:true, data:output.data};
    //         res.send(response);            
    //         }).catch(err => {
    //             console.log(err)
    //             let response = {status:false, message:"Unable to get Pair Price Detail, Please Try Again!!!"};
    //             res.send(response);
    //         });
    //     // } else {
    //     //     let response = {status:false, message:"Enter valid Entity & Try Again!!!"};
    //     //     res.send(response);
    //     // }
    // },
 
    getPairPriceDetail: async (req, res) => {
<<<<<<< HEAD
        
        if (req.query.from && req.query.to && !req.query.from == "" && !req.query.to == "") {
=======
        if (req.query.from && req.query.to && req.query.from == "" && !req.query.to == "") {
>>>>>>> f01428b81ac803e02d21deada1683845c9cb432e
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
<<<<<<< HEAD
        
        if (req.query.from && req.query.to && !req.query.from == "" && !req.query.to == "") {
=======
        if (req.query.from && req.query.to && req.query.from == "" && !req.query.to == "") {
>>>>>>> f01428b81ac803e02d21deada1683845c9cb432e
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
                console.log(err)
                let response = {status:false, message:"Unable to get Available Token Pairs, Please Try Again!!!"};
                res.send(response);
            });
    },
}