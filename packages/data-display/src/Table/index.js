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
  differenceAmount: 'diffAmount',
  differenceAmountDiscount: 'diffAmountDiscount',
  isUncertain: 'isUncertain',
  url: 'url',
  // imageUrl: 'imageUrl',
  // visitId: 'visitId',
  // createdAt: 'createdAt',
  // updatedAt: 'updatedAt',
};

const VIRTUAL = ['differenceAmount', 'differenceAmountDiscount'];

const getData = (sortBy) => {
  const { sortColumnName, sortOrder } = sortBy;

  if (VIRTUAL.includes(sortColumnName)) return Product.findAll();

  return Product.findAll({
    order: [[sortColumnName, sortOrder]],
  });
};

const filterData = (obj) => obj.isUncertain === false;

const sortData = (a, b, sortBy) => {
  const { sortColumnName, sortOrder } = sortBy;
  const aVal = a[sortColumnName];
  const bVal = b[sortColumnName];

  if (VIRTUAL.includes(sortColumnName))
    return sortOrder === 'ASC' ? aVal - bVal : bVal - aVal;
};

const parseData = (obj) => {
  obj.ean = `<a href=${BASE_URL}${obj.ean} target="_blank" >${obj.ean}</a>`;
  obj.url = `<a href=${obj.url} target="_blank" >Link</a>`;
  return obj;
};

const renderTable = async (sortBy) => {
  const data = await getData(sortBy);

  const parsedData = data
    .filter(filterData)
    .sort((a, b) => sortData(a, b, sortBy))
    .map(parseData);

  const tableData = Object.values(parsedData).map((product) =>
    Object.keys(TABLE_HEADERS).map((key) => product[key]),
  );

  const sortButtons = (headerKey) =>
    `<a href='?sortColumnName=${headerKey}&sortOrder=ASC'>🔼</a>
    <a href='?sortColumnName=${headerKey}&sortOrder=DESC'>🔽</a>`;

  const headers = Object.entries(TABLE_HEADERS)
    .map(([key, name]) => `<th>${name}${sortButtons(key)}</th>`)
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
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
};

export default renderTable;
