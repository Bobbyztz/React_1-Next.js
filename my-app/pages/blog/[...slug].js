import { useRouter } from "next/router";

export default function BlogPostsPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

    //send a request to some backend server
    //to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
