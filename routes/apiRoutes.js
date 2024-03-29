const express= require('express');
const router = express.Router();
const unilayerApi = require('../controller/UnilayerAPI');
const databaseAPI = require('../controller/CronForFront');

    /**
    * @typedef getOwnerByExchangeAddress
    * @property {String} exchangeAddress.required - Add exchangeAddress - eg: qwertyuikjhgfdsdfvbn
    */
    /**
    * @route GET /api/unilayer/getOwnerByExchangeAddress
    * @param {getOwnerByExchangeAddress.model} exchangeAddress.query
    * @group Unilayer_API
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
    * @group Unilayer_API
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
    * @group Unilayer_API
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
    * @group Unilayer_API
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
    * @group Unilayer_API
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
    * @group Unilayer_API
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
    * @group Unilayer_API
    * @security Basic Auth
    */
router.get('/getPairTradeDetail', unilayerApi.getPairTradeDetail);

    /**
    * @typedef getAllPairExchangeDetail
    */
    /**
    * @route GET /api/unilayer/getAllPairExchangeDetail
    * @group Unilayer_API
    * @security Basic Auth
    */
router.get('/getAllPairExchangeDetail', unilayerApi.getAllPairExchangeDetail);

    /**
    * @typedef getAllAvailableToken
    */
    /**
    * @route GET /api/unilayer/getAllAvailableToken
    * @group Unilayer_API
    * @security Basic Auth
    */
router.get('/getAllAvailableToken', unilayerApi.getAllAvailableToken);



///////////////////////////Routes for Database API ///////////////////////////////////////////////
 /**
  * 
    * @typedef whitelistExchangeAddress
    * @property {String} pairName.required - Add pairName - eg: DAI 
    * @property {String} address.required - Add address - eg: DAI
    * @property {String} status.required - Add status - eg: DAI
    */
    /**
    * @route POST /api/unilayer/whitelistExchangeAddress
    * @param {whitelistExchangeAddress.model} req.body
    * @group Database_API
    * @security Basic Auth
    */
   router.post('/whitelistExchangeAddress', databaseAPI.whitelistExchangeAddress);

    /**
  * 
    * @typedef getWhitelistedExchnageAddress
    */
    /**
    * @route GET /api/unilayer/getWhitelistedExchnageAddress
    * @group Database_API
    * @security Basic Auth
    */
   router.get('/getWhitelistedExchnageAddress', databaseAPI.getWhitelistedExchnageAddress);

    /**
  * 
    * @typedef addPairExchangeDetail
    * @property {String} pairName.required - Add address - eg: DAI
    * @property {String} data.required - Add data - eg: DAI
    * @property {String} status.required - Add status - eg: DAI
    */
    /**
    * @route POST /api/unilayer/addPairExchangeDetail
    * @param {addPairExchangeDetail.model} req.body
    * @group Database_API
    * @security Basic Auth
    */
   router.post('/addPairExchangeDetail', databaseAPI.addPairExchangeDetail);

    /**
  * 
    * @typedef getPairExchangeDetail
    */
    /**
    * @route GET /api/unilayer/getPairExchangeDetail
    * @group Database_API
    * @security Basic Auth
    */
   router.get('/getPairExchangeDetail', databaseAPI.getPairExchangeDetail);

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
    * @typedef getAllTransactions
    */
    /**
    * @route GET /api/unilayer/getAllTransactions
    * @group Database_API
    * @security Basic Auth
    */
   router.get('/getAllTransactions', databaseAPI.getAllTransactions);




    
module.exports= router