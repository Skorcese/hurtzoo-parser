'use strict';

export const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    service: {
      type: DataTypes.STRING,
    },
    localId: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    visitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Category;
};
