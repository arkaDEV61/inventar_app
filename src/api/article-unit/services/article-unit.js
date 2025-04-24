'use strict';

/**
 * article-unit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-unit.article-unit');
