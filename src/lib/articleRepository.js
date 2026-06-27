import { articleRecords } from "../content/articles";

function sortByPublishedDateDescending(records) {
  return [...records].sort(
    (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
  );
}

function mapRelatedPost(post) {
  return {
    id: post.id,
    title: post.title,
    url: post.url,
    image: post.image,
    caption: post.caption,
    platform: post.platform,
  };
}

function mapArticleRecord(record) {
  return {
    id: record.id,
    slug: record.slug,
    status: record.status,
    publishedAt: record.publishedAt,
    updatedAt: record.updatedAt,
    category: record.category,
    title: record.title,
    text: record.excerpt,
    image: record.coverImage,
    content: record.body,
    instagramPosts: (record.relatedPosts ?? []).map(mapRelatedPost),
  };
}

export const articleRepository = {
  async listPublished() {
    const publishedRecords = articleRecords.filter((record) => record.status === "published");
    return sortByPublishedDateDescending(publishedRecords).map(mapArticleRecord);
  },

  async listLatest(limit = 3) {
    const records = await this.listPublished();
    return records.slice(0, limit);
  },

  async getBySlug(slug) {
    const records = await this.listPublished();
    return records.find((record) => record.slug === slug) ?? null;
  },
};

export const articleRepositoryMeta = {
  source: "local-content",
  futureReadyForAccounts: true,
  futureReadyForApi: true,
};
