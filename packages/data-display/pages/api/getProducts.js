import { Product } from '@bushidogames/db';

const handler = async (req, res) => {
  const products = await Product.findAll({
    limit: 100,
  });
  return res.send(products);
};

export default handler;
