import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import Reveal from "./Reveal";

export default function PostCard({ post, index }: { post: PostMeta; index: number }) {
  return (
    <Reveal as="article" className="post-card">
      <Link href={`/blogs/${post.slug}`}>
        <span className="badge">{String(index + 1).padStart(2, "0")}</span>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className="meta">
          <span>{post.readingMinutes} min read</span>
          <span>{post.sectionCount} sections</span>
          {post.date && <span>{post.date}</span>}
          <span className="go">Read →</span>
        </div>
      </Link>
    </Reveal>
  );
}
