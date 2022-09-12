export interface Post {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  categories: string[];
  draft: boolean;
  time: number;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
}
