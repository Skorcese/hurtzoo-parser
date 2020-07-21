import Table from '../Table/index.js';

export default (server) => {
  server.get('/', async (req, res, next) => {
    res.end(
      `<html><head><meta charset="UTF-8">${style}</head><body><div style="overflow-x:auto;">${await Table()}</div></body></html>`,
    );
    return next();
  });
};

const style = `
<style>
  table {
    border-collapse: collapse;
  }

  table, th, td {
    border: 1px solid black;
  }
  
  th {
    background-color: #4CAF50;
    color: white;
  }

  th, td {
    padding: 5px;
    text-align: center;
  }

  tr:hover {background-color: #f5f5f5; scale: 1.1;}

  .differenceamount-td {background-color: #f3f3f3;}
</style>
`;
