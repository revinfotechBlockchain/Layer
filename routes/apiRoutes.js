const express= require('express');
const router = express.Router();
const unilayerApi = require('../controller/UnilayerAPI');


    /**
    * @typedef getOwnerByExchangeAddress
    * @property {String} exchangeAddress.required - Add exchangeAddress - eg: qwertyuikjhgfdsdfvbn
    */
    /**
    * @route GET /api/unilayer/getOwnerByExchangeAddress
    * @param {getOwnerByExchangeAddress.model} exchangeAddress.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getOwnerByExchangeAddress', unilayerApi.getOwnerByExchangeAddress);

    /**
    * @typedef getPairDetailByExchangeAddress
    * @property {String} exchangeAddress.required - Add exchangeAddress - eg: qwertyuikjhgfdsdfvbn
    */
    /**
    * @route GET /api/unilayer/getPairDetailByExchangeAddress
    * @param {getPairDetailByExchangeAddress.model} exchangeAddress.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getPairDetailByExchangeAddress', unilayerApi.getPairDetailByExchangeAddress);

    /**
    * @typedef getTradeDetailByExchangeAddress
    * @property {String} exchangeAddress.required - Add exchangeAddress - eg: qwertyuikjhgfdsdfvbn
    */
    /**
    * @route GET /api/unilayer/getTradeDetailByExchangeAddress
    * @param {getTradeDetailByExchangeAddress.model} exchangeAddress.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getTradeDetailByExchangeAddress', unilayerApi.getTradeDetailByExchangeAddress);

    /**
    * @typedef getReturnSharesDetailByExchangeAddress
    * @property {String} exchangeAddress.required - Add exchangeAddress - eg: qwertyuikjhgfdsdfvbn
    */
    /**
    * @route GET /api/unilayer/getReturnSharesDetailByExchangeAddress
    * @param {getReturnSharesDetailByExchangeAddress.model} exchangeAddress.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getReturnSharesDetailByExchangeAddress', unilayerApi.getReturnSharesDetailByExchangeAddress);

    /**
    * @typedef getTransactionByExchangeAddress
    * @property {String} exchangeAddress.required - Add exchangeAddress - eg: qwertyuikjhgfdsdfvbn
    */
    /**
    * @route GET /api/unilayer/getTransactionByExchangeAddress
    * @param {getTransactionByExchangeAddress.model} exchangeAddress.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getTransactionByExchangeAddress', unilayerApi.getTransactionByExchangeAddress);

    /**
    * @typedef getPairPriceDetail
    * @property {String} from.required - Add from - eg: DAI
    * @property {String} to.required - Add to - eg: DAI
    * @property {String} fromAmount.required - Add fromAmount - eg: 
    */
    /**
    * @route GET /api/unilayer/getPairPriceDetail
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
    * @route GET /api/unilayer/getPairTradeDetail
    * @param {getPairPriceDetail.model} from.query
    * @param {getPairPriceDetail.model} to.query
    * @param {getPairPriceDetail.model} fromAmount.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getPairTradeDetail', unilayerApi.getPairTradeDetail);

    /**
    * @typedef getAllPairExchangeDetail
    */
    /**
    * @route GET /api/unilayer/getAllPairExchangeDetail
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getAllPairExchangeDetail', unilayerApi.getAllPairExchangeDetail);

    /**
    * @typedef getAllAvailableTokenPairs
    */
    /**
    * @route GET /api/unilayer/getAllAvailableTokenPairs
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getAllAvailableTokenPairs', unilayerApi.getAllAvailableTokenPairs);

    

module.exports= router
