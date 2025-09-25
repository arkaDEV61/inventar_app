import type { Schema, Struct } from '@strapi/strapi';

export interface ReportArticleReportArticle extends Struct.ComponentSchema {
  collectionName: 'components_report_article_report_articles';
  info: {
    displayName: 'Report Article';
  };
  attributes: {
    article_amount: Schema.Attribute.String;
    article_threshold: Schema.Attribute.String;
    article_title: Schema.Attribute.String;
    article_update_date: Schema.Attribute.String;
    article_updated_by_name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'report-article.report-article': ReportArticleReportArticle;
    }
  }
}
