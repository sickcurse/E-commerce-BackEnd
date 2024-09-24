const { Product } = require('../models');

const productData = [
  {
    product_name: 'Leather Jacket',
    price: 199.99,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'Hiking Boots',
    price: 120.0,
    stock: 15,
    category_id: 5,
  },
  {
    product_name: 'Snapback Cap',
    price: 25.99,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Classic Rock Vinyl Record',
    price: 15.99,
    stock: 40,
    category_id: 3,
  },
  {
    product_name: 'Slim Fit Jeans',
    price: 45.99,
    stock: 30,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
