import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import SellRequest from '../models/SellRequestModel.js';
import { isAuth, isAdmin } from '../utils.js';

const sellrequestRouter = express.Router();

sellrequestRouter.get('/', async (req, res) => {
  const SellRequest = await SellRequest.find();
  res.send(sellrequests);
});

sellrequestRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newSellRequest = new SellRequest({
      itemname: 'sample name ' + Date.now(),
      storagesize: 'sample category',
      capacitytype: '',
      brand: 'sample brand',
      price: 0,
      currencytype: 'sample description',
      description: 'sample description',
      image: '/images/p1.jpg',
    });
    const SellRequest = await newSellRequest.save();
    res.send({ message: 'SellRequest Created', SellRequest });
  })
);



export default sellrequestRouter;
