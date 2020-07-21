import TableBuilder from 'table-builder';
import { Product } from '@bushidogames/db';

const getData = () => {
  return Product.findAll();
};

const sortData = (a, b) => {
  const aPrice = a.dataValues.discountedPrice || a.dataValues.price;
  const bPrice = b.dataValues.discountedPrice || b.dataValues.price;
  const aCeneo = a.dataValues.ceneoPrice || -1000;
  const bCeneo = b.dataValues.ceneoPrice || -1000;

  const aVal = parseFloat(aPrice).toFixed(2) - parseFloat(aCeneo).toFixed(2);
  const bVal = parseFloat(bPrice).toFixed(2) - parseFloat(bCeneo).toFixed(2);

  return aVal < bVal ? 1 : -1;
};

const filterData = (obj) => {
  return obj.dataValues.ceneoPrice > 0;
};

const renderTable = async () => {
  const headers = {
    id: 'id',
    localId: 'localId',
    // service: 'service',
    producer: 'producer',
    name: 'name',
    ean: 'ean',
    price: 'price',
    discountedPrice: 'discountedPrice',
    ceneoPrice: 'ceneoPrice',
    differenceAmount: 'differenceAmount',
    isUncertain: 'isUncertain',
    url: 'url',
    // imageUrl: 'imageUrl',
    visitId: 'visitId',
    // createdAt: 'createdAt',
    // updatedAt: 'updatedAt',
  };

  const data = await getData();

  const sortedData = data.sort((a, b) => sortData(a, b));
  const filteredData = sortedData.filter((obj) => filterData(obj));

  const Table = new TableBuilder({ class: 'test' });
  return Table.setHeaders(headers).setData(filteredData).render();
};

export default renderTable;
