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
        const ceneoPrice = this.getDataValue('ceneoPrice');
        const price = this.getDataValue('price');

        return parseFloat(ceneoPrice - price).toFixed(2);
      },
    },
    differenceAmountDiscount: {
      type: DataTypes.VIRTUAL,
      get() {
        const ceneoPrice = this.getDataValue('ceneoPrice');
        const discountedPrice = this.getDataValue('discountedPrice');

        return parseFloat(ceneoPrice - discountedPrice).toFixed(2);
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
    // ceneoUrl: {
    //   type: DataTypes.STRING,
    // },
    isUncertain: {
      type: DataTypes.BOOLEAN,
    },
    visitId: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  return Product;
};
