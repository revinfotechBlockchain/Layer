
const express = require('express');
const Web3 = require("web3");
const config = require('../routes/config.json');
const axios = require('axios');

var apiKey = "e5bc8349129fe611931adedb2c6835f3500ba08cbcfb3ba24a01db648614";

module.exports = {


    /**
    * @dev get owner of particular token exchange address
    * @return address of owner account with balance
    */
    getOwnerByExchangeAddress: async (req, res) => {
        
        if (req.query.exchangeAddress && !req.query.exchangeAddress == "") {
            console.log(req.query.exchangeAddress)
            await axios.get('https://data-api.defipulse.com/api/v1/blocklytics/pools/v0/liquidity/'+req.query.exchangeAddress+'/owners',{headers: {'Authorization': `Basic ${apiKey}` }}).then(async output=>{
            let response = {status:true, data:output.data.results};
            res.send(response);            
            }).catch(err => {
                let response = {status:false, message:"Unable to get Owner Detail by Exchange Address, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Exchange Address & Try Again!!!"};
            res.send(response);
        }
    },

    /**
    * @dev get token pair detail by exchange address
    * @return token pair detail with token address , symbol and balance
    */
    getPairDetailByExchangeAddress: async (req, res) => {
        
        if (req.query.exchangeAddress && !req.query.exchangeAddress == "") {
            console.log(req.query.exchangeAddress)
            await axios.get('https://data-api.defipulse.com/api/v1/blocklytics/pools/v1/exchange/'+req.query.exchangeAddress,{headers: {'Authorization': `Basic ${apiKey}` }}).then(async output=>{
            let response = {status:true, data:output.data};
            res.send(response);            
            }).catch(err => {
                let response = {status:false, message:"Unable to get Pair Detail by Exchange Address, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Exchange Address & Try Again!!!"};
            res.send(response);
        }
    },

    /**
    * @dev get token pair trade detail by exchange address
    * @return token pair trade detail with price, id, timestamp and other important detail
    */
    getTradeDetailByExchangeAddress: async (req, res) => {
        
        if (req.query.exchangeAddress && !req.query.exchangeAddress == "") {
            console.log(req.query.exchangeAddress)
            await axios.get('https://data-api.defipulse.com/api/v1/blocklytics/pools/v1/trades/'+req.query.exchangeAddress,{headers: {'Authorization': `Basic ${apiKey}` }}).then(async output=>{   
            let response = {status:true, data:output.data.results};
            res.send(response);            
            }).catch(err => {
                let response = {status:false, message:"Unable to get Trade Detail by Exchange Address, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Exchange Address & Try Again!!!"};
            res.send(response);
        }
    },

    /**
    * @dev get return and share detail by exchange address
    * @return exchange address shares and roi details
    */
    getReturnSharesDetailByExchangeAddress: async (req, res) => {
        
        if (req.query.exchangeAddress && !req.query.exchangeAddress == "") {
            console.log(req.query.exchangeAddress)
            await axios.get('https://data-api.defipulse.com/api/v1/blocklytics/pools/v1/returns/'+req.query.exchangeAddress,{headers: {'Authorization': `Basic ${apiKey}` }}).then(async output=>{              
            let response = {status:true, data:output.data};
            res.send(response);            
            }).catch(err => {
                let response = {status:false, message:"Unable to get Share and Returns Detail by Exchange Address, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Exchange Address & Try Again!!!"};
            res.send(response);
        }
    },
 
    /**
    * @dev get price of token pair 
    * @return pair price detail on basis of input token symbol 
    */
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

    /**
    * @dev get token pair trade detail 
    * @return pair trade details having transaction time and important other details too 
    */
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

    /**
    * @dev get all token pair exchange detail 
    * @return exchange address with token detail and symbol 
    */
    getAllPairExchangeDetail: async (req, res) => {
        
        await axios.get('https://data-api.defipulse.com/api/v1/blocklytics/pools/v1/exchanges?api-key='+apiKey+'&platform=Uniswap-v2').then(async output=>{
        let response = {status:true, data:output.data.results};
        res.send(response);            
        }).catch(err => {
            let response = {status:false, message:"Unable to get Pair Price Detail, Please Try Again!!!"};
            res.send(response);
        });
    },

    /**
    * @dev get all available token pair detail 
    * @return all token pair with their exchange address and symbol 
    */
    getAllAvailableTokenPairs : async (req, res) => {

            await axios.get('https://api-v2.dex.ag/token-list-full').then(async output=>{
            let response = {status:true, data:output.data};
            res.send(response);            
            }).catch(err => {
                let response = {status:false, message:"Unable to get Available Token Pairs, Please Try Again!!!"};
                res.send(response);
            });
    },
}