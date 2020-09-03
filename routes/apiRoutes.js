const express= require('express');
const router = express.Router();
const unilayerApi = require('../controller/UnilayerAPI');


   /**
    * @typedef getPairPriceDetail
    * @property {String} from.required - Add from - eg: DAI
    * @property {String} to.required - Add to - eg: DAI
    * @property {String} fromAmount.required - Add fromAmount - eg: 1
    */
    /**
    * @route GET /api/uniswap/getPairPriceDetail
    * @param {getPairPriceDetail.model} hash.query
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
    * @param {getPairTradeDetail.model} hash.query
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
