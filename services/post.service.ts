import { BASE_URL } from "../app.config";

const url = BASE_URL;

const fetchAllPosts = (params: any = {}) => {
  return fetch(`${url}/api/posts`, {
    ...params,
  })
    .then((res) => res.json())
    .then((posts) => posts);
};

export { fetchAllPosts };
