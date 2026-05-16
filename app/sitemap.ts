import { MetadataRoute } from 'next';
import { postsFull } from './blog/pindex';

const BASE_URL = 'https://blog-automacao-five-kappa.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = ['automacao', 'ferramentas', 'negocios', 'ia'];
  
  const categoryUrls = categories.map(cat => ({
    url: `${BASE_URL}/categoria/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const postUrls = Object.keys(postsFull).map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    ...categoryUrls,
    ...postUrls,
  ];
}