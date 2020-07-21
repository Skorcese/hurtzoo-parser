'use strict';

export const DiscountModel = (sequelize, DataTypes) => {
  const Discount = sequelize.define('discount', {
    service: {
      type: DataTypes.STRING,
    },
    producer: {
      type: DataTypes.STRING,
    },
    discount_range_max: {
      type: DataTypes.INTEGER,
    },
  });

  return Discount;
};
