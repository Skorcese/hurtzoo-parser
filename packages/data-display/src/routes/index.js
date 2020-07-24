import Table from '../Table/index.js';

export default (server) => {
  server.get('/', async (req, res, next) => {
    res.end(
      `<html>
        <head>
          <meta charset="UTF-8">
          ${style}
        </head>
        <body>
          <div style="overflow-x:auto;">
            ${await Table(req.query)}
          </div>
        </body>
      </html>`,
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
    background-color: #3f96e8;
    color: white;
  }

  tr {
    width: fit-content;
  }

  th, td {
    padding: 5px;
    text-align: center;
  }

  tr:hover {background-color: #f0f0f0;}

</style>
`;
