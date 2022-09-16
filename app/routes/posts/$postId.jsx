import { redirect } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { db } from "~/utils/db.server";

// Function to get the post data
export const loader = async ({ params }) => {
  // Get the post that matches the id
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });

  // If no post is found, throw an error
  if (!post) throw new Error("Post not found");

  const data = { post }; // Destrucutre the post data
  return data; // Return the data
};

// Function to delete the post
export const action = async ({ request, params }) => {
  const form = await request.formData(); // Get the form data

  // If the form data has a _method field with the value of delete
  if (form.get("_method") === "delete") {
    // Get the post that matches the id
    const post = await db.post.findUnique({
      where: { id: params.postId },
    });

    // If no post is found, throw an error
    if (!post) throw new Error("Post not found");

    // Delete the post from the database with the specified id
    await db.post.delete({
      where: { id: params.postId },
    });

    return redirect("/posts"); // Redirect to the posts page
  }
};

function Post() {
  const { post } = useLoaderData(); // Get the post data

  return (
    <div>
      <div className="page-header">
        <h1>{post.title}</h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>

      <div className="page-content">{post.body}</div>

      <div className="page-footer">
        <form method="POST">
          <input type="hidden" name="_method" value="delete" />
          <button className="btn btn-delete">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
