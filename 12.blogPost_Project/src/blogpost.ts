// blogPost Project

type BlogPost = {
  id: number;
  title: string;
  description: string;
  author: string;
  published: boolean;
  publishDate: string;
};

const blogPost1: BlogPost = {
  id: 1,
  title: "Top 10 Accounting Software",
  description: "Accounting Software is very important for any Company.",
  author: "Araft",
  published: true,
  publishDate: "2025-04-19",
};
const blogPost2: BlogPost = {
  id: 1,
  title: "Top 10 SEO Tools",
  description:
    "Without any seo tools, you cannot see the website metrics. So, SEO tools is important for website.",
  author: "Hablu",
  published: true,
  publishDate: "2025-04-23",
};
function myPost(post: BlogPost): void {
  const { title, description, author, published, publishDate } = post;
  console.log(`Title: ${title}`);
  console.log(`Description: ${description}`);
  console.log(`author: ${author}`);
  console.log(`Published: ${published}`);
  console.log(`Date: ${publishDate}`);
}
myPost(blogPost1);
