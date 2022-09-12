import { Link, useLoaderData } from "@remix-run/react";

export const loader = () => {
  const data = {
    posts: [
      { id: 1, title: "Post 1", body: "Post 1 body" },
      { id: 2, title: "Post 2", body: "Post 2 body" },
      { id: 3, title: "Post 3", body: "Post 3 body" },
    ],
  };

  return data;
};

function PostItems() {
  // Get the data from the loader
  const { posts } = useLoaderData();

  return (
    <>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/new" className="btn">
          New Post
        </Link>
      </div>

      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostItems;
