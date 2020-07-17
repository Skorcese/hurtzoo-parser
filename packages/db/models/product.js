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
      type: DataTypes.DECIMAL(7, 2),
    },
    discountedPrice: {
      type: DataTypes.DECIMAL(7, 2),
    },
    ceneoPrice: {
      type: DataTypes.DECIMAL(7, 2),
    },
    differenceAmount: {
      type: DataTypes.VIRTUAL,
      get() {
        const price = this.getDataValue('price');
        const discountedPrice = this.getDataValue('discountedPrice');
        const ceneoPrice = this.getDataValue('ceneoPrice');

        return discountedPrice
          ? parseFloat(discountedPrice - ceneoPrice).toFixed(2)
          : ceneoPrice === 0
          ? -1000
          : ceneoPrice
          ? parseFloat(price - ceneoPrice).toFixed(2)
          : -1000;
      },
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
    isUncertain: {
      type: DataTypes.INTEGER,
    },
    visitId: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  return Product;
};
