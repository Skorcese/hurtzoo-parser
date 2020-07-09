import Fetch from 'isomorphic-unfetch';
import React from 'react';
import TableVirtualized from '../components/TableVirtualized';
import { Product } from '@bushidogames/db';

class Root extends React.Component {
  static async getInitialProps(ctx) {
    const data = await Product.findAll();
    // const res = await Fetch('http://localhost:3000/api/getProducts');
    // const data = await res.json();
    return {
      products: data,
    };
  }

  render() {
    const { products } = this.props;

    return (
      <>
        <TableVirtualized data={products} />
      </>
    );
  }
}

export default Root;
