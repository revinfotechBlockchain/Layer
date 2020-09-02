const express= require('express');
const router = express.Router();
const contractApi = require('../controller/UnilayerAPI');

   /**
   * @typedef getBalance
   */
   /**
   * @route GET /api/eth/getBalance
   * @group Unilayer_API_Trade
   * @security Basic Auth
   */
router.get('/getBalance', contractApi.getBalance);

    

module.exports= router
