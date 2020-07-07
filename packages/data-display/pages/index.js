import Fetch from 'isomorphic-unfetch';
import React from 'react';
import styled from 'styled-components';
import Table from '../components/table';
import TableV from '../components/table-virtualized';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const Root = ({ products }) => {
  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Service',
      accessor: 'service',
    },
    {
      Header: 'Producer',
      accessor: 'producer',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'EAN',
      accessor: 'ean',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'CeneoPrice',
      accessor: 'ceneoPrice',
    },
  ];

  return (
    // <Styles>
    //   <Table columns={columns} data={products}></Table>
    // </Styles>
    <>
      <TableV data={products} columns={columns} />
    </>
  );
};

Root.getInitialProps = async () => {
  const res = await Fetch('http://localhost:3000/api/getProducts');
  const data = await res.json();
  return {
    products: data,
  };
};

export default Root;
