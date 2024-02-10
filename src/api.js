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
  return axios
    .get("https://worldywhisper.onrender.com/api/articles")
    .then((response) => {
      const { articles } = response.data;
      if (searchTerm) {
        const searchedArticles = articles.filter((article) => {
          return article.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return searchedArticles;
      }

      return articles;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
      return [];
    });
}

export function getLatestArticles(currentCategory, sortQuery) {
  let url = "https://worldywhisper.onrender.com/api/articles?";

  if (currentCategory) {
    url += `topic=${currentCategory}`;
  }

  if (sortQuery) {
    url += `&${sortQuery}`;
  } else {
    url += "&sort_by=created_at";
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
      return response;
    });
}
