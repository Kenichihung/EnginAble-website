import { eventRecords } from "../content/events";

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

function mapEventRecord(record) {
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
    galleryImages: record.galleryImages ?? [],
    instagramPosts: (record.relatedPosts ?? []).map(mapRelatedPost),
  };
}

export const eventRepository = {
  async listPublished() {
    const publishedRecords = eventRecords.filter((record) => record.status === "published");
    return sortByPublishedDateDescending(publishedRecords).map(mapEventRecord);
  },

  async getBySlug(slug) {
    const records = await this.listPublished();
    return records.find((record) => record.slug === slug) ?? null;
  },
};

export const eventRepositoryMeta = {
  source: "local-content",
  futureReadyForAccounts: true,
  futureReadyForApi: true,
};
