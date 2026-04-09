import Link from "next/link";

const blogs = [
  {
    slug: "nextjs",
    title: "NextJS Basic",
  },
  {
    slug: "mongodb",
    title: "Mongodb Basic",

  },
  {
    slug: "react",
    title: "reactJS Basic",

  },
  {
    slug: "node",
    title: "nodeJS Basic",

  },
];

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
