import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BlogPost() {
  const router = useRouter();
  const { postId } = router.query; // Get the dynamic postId from the URL

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>This is the blog post with ID: {postId}</p>

      {/* Link to go back to the blog listing or home */}
      <Link href="malithi/blog">Back to Blog List</Link>
    </div>
  );
}
