const Bookshelf = require('bookshelf');
const knex = require('../data');
const bookshelf = Bookshelf(knex);

bookshelf.plugin('registry');
bookshelf.plugin('virtuals');

module.exports = bookshelf;
