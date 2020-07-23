// import TableBuilder from 'table-builder';
import { Product } from '@bushidogames/db';

const BASE_URL = 'https://www.ceneo.pl/;szukaj-';
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
  // visitId: 'visitId',
  // createdAt: 'createdAt',
  // updatedAt: 'updatedAt',
};

const getData = (sortBy) => {
  const lim = 100;

  if (!sortBy)
    return Product.findAll({
      limit: lim,
    });

  return Product.findAll({
    order: [[sortBy.sortColumnName, sortBy.sortOrder]],
    limit: lim,
  });
};

const sortData = (a, b) => parseInt(b.price) - parseInt(a.price);

const filterData = (obj) => obj.isUncertain === false;

const parseData = (obj) => {
  obj.ean = `<a href=${BASE_URL}${obj.ean} target="_blank" >${obj.ean}</a>`;
  obj.url = `<a href=${obj.url} target="_blank" >Link</a>`;
  return obj;
};

const renderTable = async (sortBy) => {
  const data = await getData(sortBy);
  // .sort(sortData)
  const parsedData = data.filter(filterData).map(parseData);

  const tableData = Object.values(parsedData).map((product) =>
    Object.keys(TABLE_HEADERS).map((key) => product[key]),
  );

  const tableHeaders = Object.keys(TABLE_HEADERS);

  const sortButtons = (header) =>
    `<a href='?sortColumnName=${header}&sortOrder=ASC'>🔼</a>
    <a href='?sortColumnName=${header}&sortOrder=DESC'>🔽</a>`;

  const headers = tableHeaders
    .map((header) => `<th>${header}${sortButtons(header)}</th>`)
    .join('');

  const rows = tableData
    .map((row) => `<tr><td>${row.join('</td><td>')}</td></tr>`)
    .join('');

  return `
    <table>
      <thead>
      <tr>
        ${headers}
      </tr>
      </thead>
      ${rows}
    </table>
  `;
};

export default renderTable;
