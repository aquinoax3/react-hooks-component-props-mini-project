import React from "react";
import Article from "./Article";

function ArticleList({ articles }) {
  console.log(articles);
  const blogArticle = articles.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
      />
    );
  });

  return <main>{blogArticle}</main>;
}
export default ArticleList;
