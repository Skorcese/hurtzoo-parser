import TableBuilder from 'table-builder';
import { Product } from '@bushidogames/db';

const getData = () => {
  return Product.findAll();
};

const sortData = (a, b) => {
  const aVal = a.dataValues.price.replace('.', '');
  const bVal = b.dataValues.price.replace('.', '');

  return Number(aVal) < Number(bVal) ? 1 : -1;
};

const filterData = (obj) => {
  return obj.dataValues.ceneoPrice > 0;
};

const parseData = (obj) => {
  // obj.ean = `<a href=${obj.ceneoUrl} target="_blank" >${obj.ean}</a>`;
  obj.url = `<a href=${obj.url} target="_blank" >Link</a>`;
  return obj;
};

const renderTable = async () => {
  const headers = {
    id: 'id',
    // localId: 'localId',
    // service: 'service',
    producer: 'producer',
    name: 'name',
    ean: 'ean',
    price: 'price',
    discountedPrice: 'discountedPrice',
    ceneoPrice: 'ceneoPrice',
    differenceAmount: 'differenceAmount',
    differenceAmountDiscount: 'differenceAmountDiscount',
    isUncertain: 'isUncertain',
    url: 'url',
    // imageUrl: 'imageUrl',
    // ceneoUrl: 'ceneoUrl',
    // visitId: 'visitId',
    // createdAt: 'createdAt',
    // updatedAt: 'updatedAt',
  };

  const data = await getData();

  const sortedData = data.sort((a, b) => sortData(a, b));
  const filteredData = sortedData.filter((obj) => filterData(obj));
  const parsedData = filteredData.map((obj) => parseData(obj));

  const Table = new TableBuilder({ class: 'test' });
  return Table.setHeaders(headers).setData(parsedData).render();
};

export default renderTable;
