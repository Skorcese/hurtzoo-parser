'use strict';

export const DiscountModel = (sequelize, DataTypes) => {
  const Discount = sequelize.define('discount', {
    service: {
      type: DataTypes.STRING,
    },
    producer: {
      type: DataTypes.STRING,
    },
    discountRangeMax: {
      type: DataTypes.INTEGER,
    },
  });

  return Discount;
};
