'use strict';

export const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    service: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    localId: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    ceneoPrice: {
      type: DataTypes.STRING,
    },
    ean: {
      type: DataTypes.STRING,
    },
    producer: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    visitId: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  return Product;
};
