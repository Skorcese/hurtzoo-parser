import Fetch from 'isomorphic-unfetch';
import React from 'react';
import TableVirtualized from '../components/TableVirtualized';

class Root extends React.Component {
  static async getInitialProps(ctx) {
    const res = await Fetch('http://localhost:3000/api/getProducts');
    const data = await res.json();
    return {
      products: data,
    };
  }

  columns = [
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

  render() {
    const { products } = this.props;
    const { columns } = this;

    return (
      <>
        <TableVirtualized data={products} columns={columns} />
      </>
    );
  }
}

export default Root;
