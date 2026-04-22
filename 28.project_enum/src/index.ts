// enum blogpost projects

enum PostStatus {
  Draft = "DRAFT",
  published = "PUBLISHED",
  Archive = "ARCHIVE",
}

type BlogPost = {
  title: string;
  description: string;
  status: PostStatus;
};

const post1 = {
  title: "Top 10 Computer Accessories",
  description:
    "If your computer dont have any accessories, you should buy this top 10 accessories",
  status: PostStatus.Draft,
};
console.log("Post 1 is:", post1.status);

const post2 = {
  title: "Learn React",
  description: "I will teach you React.js",
  status: PostStatus.published,
};

console.log("Post 2 is:", post2.status);
