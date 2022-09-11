import { useParams } from "@remix-run/react";

function Post() {
  // Get the params object from the useParams hook
  const params = useParams();
  // Get the postId from the params object
  const { postId } = params;

  return (
    <div>
      <h1>Post {postId}</h1>
    </div>
  );
}

export default Post;
