'use strict';

module.exports = {
  name: prompt('name', filename),
  version: prompt('version', '1.0.0'),
  description: prompt('description'),
  keywords: prompt('keywords'),
  authors: prompt('authors'),
  repository: prompt('repository'),
  license: prompt('license', 'MIT')
};