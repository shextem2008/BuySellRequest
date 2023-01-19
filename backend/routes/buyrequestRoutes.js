import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import BuyRequest from '../models/BuyRequestModel.js';
import { isAuth, isAdmin } from '../utils.js';

const buyrequestRouter = express.Router();

buyrequestRouter.get('/', async (req, res) => {
  const BuyRequest = await BuyRequest.find();
  res.send(buyrequests);
});

buyrequestRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newBuyRequest = new BuyRequest({
      itemname: 'sample name ' + Date.now(),
      storagesize: 'sample category',
      capacitytype: '',
      brand: 'sample brand',
      price: 0,
      currencytype: 'sample description',
      description: 'sample description',
      image: '/images/p1.jpg',
    });
    const BuyRequest = await newBuyRequest.save();
    res.send({ message: 'BuyRequest Created', BuyRequest });
  })
);



export default buyrequestRouter;
