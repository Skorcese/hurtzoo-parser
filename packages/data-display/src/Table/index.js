import { Product } from '@bushidogames/db';
import { TABLE_HEADERS, VIRTUAL, BASE_URL } from '../config.js';

const getData = ({ sortColumnName, sortOrder }) => {
  const order = shouldSort(sortColumnName) ? [] : [[sortColumnName, sortOrder]];

  return Product.findAll({
    order,
  });
};

const shouldSort = (sortColumnName) => VIRTUAL.includes(sortColumnName);

const filterData = (obj) => obj.isUncertain === false;

const sortData = (a, b, { sortColumnName, sortOrder }) => {
  const aVal = a[sortColumnName];
  const bVal = b[sortColumnName];

  return sortOrder === 'ASC' ? aVal - bVal : bVal - aVal;
};

const parseData = (obj) => {
  obj.ean = `<a href=${BASE_URL}${obj.ean} target="_blank" >${obj.ean}</a>`;
  obj.url = `<a href=${obj.url} target="_blank" >Link</a>`;
  return obj;
};

const renderTable = async (sortBy) => {
  const data = await getData(sortBy);

  if (shouldSort(sortBy.sortColumnName)) {
    data.sort((a, b) => sortData(a, b, sortBy));
  }

  const parsedData = data.filter(filterData).map(parseData);

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
