const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'jazz',
  },
  {
    tag_name: 'hip hop',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'purple',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'bronze',
  },
  {
    tag_name: 'vintage',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
