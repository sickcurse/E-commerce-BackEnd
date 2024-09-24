const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Jackets',
  },
  {
    category_name: 'Pants',
  },
  {
    category_name: 'Accessories',
  },
  {
    category_name: 'Books',
  },
  {
    category_name: 'Bags',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
