import axios from "axios";

export function getTrendingArticles() {
  return axios
    .get(
      "https://worldywhisper.onrender.com/api/articles?sort_by=comment_count"
    )
    .then((response) => {
      return response.data;
    });
}

export function getArticles(searchTerm) {
  console.log(searchTerm);
  return axios
    .get("https://worldywhisper.onrender.com/api/articles")
    .then((response) => {
      const { articles } = response.data;
      if (searchTerm) {
        const searchedArticle = articles.find((article) => {
          if (article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return article;
          }
        });
        return [searchedArticle];
      }

      return articles;
    });
}

export function getLatestArticles(currentCategory) {
  let url =
    "https://worldywhisper.onrender.com/api/articles?sort_by=created_at";
  if (currentCategory) {
    url += `&topic=${currentCategory}`;
  }
  return axios.get(url).then((response) => {
    const { articles } = response.data;
    return articles;
  });
}

export function getCategories() {
  return axios
    .get("https://worldywhisper.onrender.com/api/topics")
    .then((response) => {
      const { topics } = response.data;
      return topics;
    });
}

export function getArticleByID(articleID) {
  return axios
    .get(`https://worldywhisper.onrender.com/api/articles/${articleID}`)
    .then((response) => {
      const { article } = response.data;
      return article;
    });
}

export function getCommentsByID(articleID) {
  return axios
    .get(
      `https://worldywhisper.onrender.com/api/articles/${articleID}/comments`
    )
    .then((response) => {
      const { comments } = response.data;
      return comments;
    });
}

export function patchVoteByArticleID(articleID, newVote) {
  return axios.patch(
    `https://worldywhisper.onrender.com/api/articles/${articleID}`,
    {
      inc_votes: 1,
    }
  );
}

export function postComment(articleID, commentToPost) {
  return axios
    .post(
      `https://worldywhisper.onrender.com/api/articles/${articleID}/comments`,
      {
        username: commentToPost.author,
        body: commentToPost.body,
      }
    )
    .then((response) => {
      return response;
    });
}
export function deleteCommentByCommentId(commentID) {
  return axios
    .delete(`https://worldywhisper.onrender.com/api/comments/${commentID}`)
    .then((response) => {
      console.log(response);
      return response;
    });
}
