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

const getData = () => {
  return Product.findAll();
};

const filterData = (obj) => obj.isUncertain === false;

const sortData = (a, b, sortBy) => {
  const { sortColumnName, sortOrder } = sortBy;

  if (['name', 'producer'].includes(sortColumnName))
    return sortOrder === 'ASC'
      ? a[sortColumnName].localeCompare(b[sortColumnName])
      : b[sortColumnName].localeCompare(a[sortColumnName]);

  return sortOrder === 'ASC'
    ? a[sortColumnName] - b[sortColumnName]
    : b[sortColumnName] - a[sortColumnName];
};

const parseData = (obj) => {
  obj.ean = `<a href=${BASE_URL}${obj.ean} target="_blank" >${obj.ean}</a>`;
  obj.url = `<a href=${obj.url} target="_blank" >Link</a>`;
  return obj;
};

const renderTable = async (sortBy) => {
  const data = await getData();

  const parsedData = data
    .filter(filterData)
    .sort((a, b) => sortData(a, b, sortBy))
    .map(parseData);

  const tableData = Object.values(parsedData).map((product) =>
    Object.keys(TABLE_HEADERS).map((key) => product[key]),
  );

  const sortButtons = (header) =>
    `<a href='?sortColumnName=${header}&sortOrder=ASC'>🔼</a>
    <a href='?sortColumnName=${header}&sortOrder=DESC'>🔽</a>`;

  const headers = Object.entries(TABLE_HEADERS)
    .map((header) => `<th>${header[1]}${sortButtons(header[0])}</th>`)
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
