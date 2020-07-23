import Table from '../Table/index.js';

export default (server) => {
  server.get('/', async (req, res, next) => {
    res.end(
      `<html><head><meta charset="UTF-8">${style}</head><body><div style="overflow-x:auto;">${await Table()}</div>${script}</body></html>`,
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
    background-color: #2d277a;
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

const script = `
<script>
  const headers = document.querySelectorAll('.test > thead > tr > th');

  Array
    .from(headers)
    .forEach(addChild);

  function addEvent(element) {
    element.addEventListener('click', handleClick);
  }

  function addChild(element) {
    const a = document.createElement('a');
    element.appendChild(a)
  }

  function handleClick(e) {
    console.log(e.target.innerText);
    window.location.href = window.location.href + e.target.innerText;
  }

  console.log(headers);
</script>
`;
