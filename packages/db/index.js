'use strict';

import Sequelize from 'sequelize';
import { ProductModel } from './models/product.js';
import { CategoryModel } from './models/category.js';
import { DiscountModel } from './models/discount.js';

export const sequelize = new Sequelize(
  'moondog_parsers',
  process.env.MYSQL_USER,
  process.env.MYSQL_PASS,
  {
    logging: false,
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    // todo: setup pool for prod
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // }
  },
);

export const Product = ProductModel(sequelize, Sequelize);
export const Category = CategoryModel(sequelize, Sequelize);
export const Discount = DiscountModel(sequelize, Sequelize);
export const Op = Sequelize.Op;
