const express= require('express');
const router = express.Router();
const unilayerApi = require('../controller/UnilayerAPI');



    /**
    * @typedef getPairExchangeDetailByAddress
    * @property {String} exchangeAddress.required - Add exchangeAddress - eg: qwertyuikjhgfdsdfvbn
    */
    /**
    * @route GET /api/uniswap/getPairExchangeDetailByAddress
    * @param {getPairExchangeDetailByAddress.model} exchangeAddress.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getPairExchangeDetailByAddress', unilayerApi.getPairExchangeDetailByAddress);

    /**
    * @typedef getAllPairExchangeDetail
    * @property {String} platform.required - Add platform - eg: uniswap-v2
    */
    /**
    * @route GET /api/uniswap/getAllPairExchangeDetail
    * @param {getAllPairExchangeDetail.model} platform.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getAllPairExchangeDetail', unilayerApi.getAllPairExchangeDetail);

   /**
    * @typedef getPairPriceDetail
    * @property {String} from.required - Add from - eg: DAI
    * @property {String} to.required - Add to - eg: DAI
    * @property {String} fromAmount.required - Add fromAmount - eg: 1
    */
    /**
    * @route GET /api/uniswap/getPairPriceDetail
    * @param {getPairPriceDetail.model} from.query
    * @param {getPairPriceDetail.model} to.query
    * @param {getPairPriceDetail.model} fromAmount.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getPairPriceDetail', unilayerApi.getPairPriceDetail);

    /**
    * @typedef getPairTradeDetail
    * @property {String} from.required - Add from - eg: DAI
    * @property {String} to.required - Add to - eg: DAI
    * @property {String} fromAmount.required - Add fromAmount - eg: 1
    */
    /**
    * @route GET /api/uniswap/getPairTradeDetail
    * @param {getPairPriceDetail.model} from.query
    * @param {getPairPriceDetail.model} to.query
    * @param {getPairPriceDetail.model} fromAmount.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getPairTradeDetail', unilayerApi.getPairTradeDetail);

    /**
    * @typedef getAvailableTokenPairs
    */
    /**
    * @route GET /api/uniswap/getAvailableTokenPairs
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getAvailableTokenPairs', unilayerApi.getAvailableTokenPairs);

    

module.exports= router
