import TableBuilder from 'table-builder';
import { Product } from '@bushidogames/db';

const TABLE_HEADERS = {
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

const getData = () => Product.findAll();

const sortData = (a, b) => (parseInt(a.price) < parseInt(b.price) ? 1 : -1);

const filterData = (obj) => obj.ceneoPrice > 0;

const parseData = (obj) => {
  obj.ean = `<a href=${obj.ceneoUrl} target="_blank" >${obj.ean}</a>`;
  obj.url = `<a href=${obj.url} target="_blank" >Link</a>`;
  return obj;
};

const renderTable = async () => {
  const data = await getData();

  const parsedData = data.sort(sortData).filter(filterData).map(parseData);

  const table = new TableBuilder({ class: 'test' });
  return table.setHeaders(TABLE_HEADERS).setData(parsedData).render();
};

export default renderTable;
