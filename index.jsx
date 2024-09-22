import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    { id: '1', title: 'Exploring Sri Lanka’s Beaches' },
    { id: '2', title: 'A Guide to Sri Lankan Cuisine' },
    { id: '3', title: 'Wildlife and Nature in Sri Lanka' },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            {/* Use dynamic routing to link to each blog post */}
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Link to go back to home */}
      <Link href="/">Back to Home</Link>
    </div>
  );
}
