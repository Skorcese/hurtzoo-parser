import TableBuilder from 'table-builder';
import { Product } from '@bushidogames/db';

const getData = () => {
  return Product.findAll({
    order: [
      ['discountedPrice', 'DESC'],
      ['differenceAmount', 'DESC'],
    ],
  });
};

const renderTable = async () => {
  const headers = {
    id: 'id',
    service: 'service',
    name: 'name',
    localId: 'localId',
    price: 'price',
    discountedPrice: 'discountedPrice',
    ceneoPrice: 'ceneoPrice',
    differenceAmount: 'discountedAmount',
    ean: 'ean',
    producer: 'producer',
    url: 'url',
    imageUrl: 'imageUrl',
    visitId: 'visitId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  };

  const data = await getData();

  const Table = new TableBuilder({ class: 'test' });
  return Table.setHeaders(headers).setData(data).render();
};

export default renderTable;
