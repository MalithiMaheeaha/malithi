import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p><p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      </p>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}
