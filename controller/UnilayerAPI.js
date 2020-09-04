
var express = require('express');
var config = require('../routes/config.json');
const axios = require('axios');


module.exports = {
 
    getPairPriceDetail: async (req, res) => {
        if (req.query.from && req.query.to && req.query.from == "" && !req.query.to == "") {
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
        if (req.query.from && req.query.to && req.query.from == "" && !req.query.to == "") {
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