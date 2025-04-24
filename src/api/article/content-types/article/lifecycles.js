'use strict'

module.exports = {

    async afterCreate(event) {
        const { result, params } = event;

        const populatedResult = await strapi.db.query('api::article.article').findOne({
            where: { documentId: result.documentId },
            populate: true, // Populate all relations
        });

        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1; // getMonth() is 0-based, so +1 to make it 1-based

        await strapi.service('api::log.log').create({
            data: {
                type: 'article',
                action: 'create',
                request_data: params.data,
                data: populatedResult,
                article_id: result.documentId,
                year: currentYear,
                month: currentMonth,
            },
        });
    },


    async beforeDelete(event) {
        const { result, params } = event;
        // Your beforeDelete logic
    }
};
