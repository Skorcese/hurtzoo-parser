import TableBuilder from 'table-builder';
import { Product } from '@bushidogames/db';

const renderTable = async () => {
  const res = await Product.findAll();

  const headers = {
    id: 'id',
    service: 'service',
    name: 'name',
    localId: 'localId',
    price: 'price',
    ceneoPrice: 'ceneoPrice',
    ean: 'ean',
    producer: 'producer',
    url: 'url',
    imageUrl: 'imageUrl',
    visitId: 'visitId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  };

  const Table = new TableBuilder({ class: 'test' });
  const table = Table.setHeaders(headers).setData(res).render();

  return table;
};

export default renderTable;
