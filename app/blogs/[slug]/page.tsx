import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostEnhancer from "@/components/PostEnhancer";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { getAllPosts, getPost } from "@/lib/blog";
import { profile } from "@/data/profile";

type Props = { params: Promise<{ slug: string }> };

// Static export: every post is prerendered from the files in /blogs; unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return { title: `${post.title} — ${profile.short}`, description: post.description };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const posts = getAllPosts();
  const i = posts.findIndex((p) => p.slug === slug);
  const prev = posts[i - 1];
  const next = posts[i + 1];

  return (
    <>
      <SiteNav />
      <PostEnhancer />
      <main className="wrap post">
        <header className="post-head">
          <div className="crumbs">
            <Link href="/blogs">Blog</Link>
            <span>/</span>
            <span>
              Part {i + 1} of {posts.length}
            </span>
          </div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="meta">
            <span>{post.readingMinutes} min read</span>
            <span>{post.sectionCount} sections</span>
            {post.date && <span>{post.date}</span>}
            {post.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </header>

        <div className="post-layout">
          {post.toc.length > 0 && (
            <aside className="toc">
              <details>
                <summary>On this page</summary>
                <ol>
                  {post.toc.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`}>{h.text}</a>
                    </li>
                  ))}
                </ol>
              </details>
            </aside>
          )}

          <div>
            {/* Rendered at build time from our own Markdown; raw HTML in Markdown is not passed through. */}
            <article className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />

            <div className="pager" role="navigation" aria-label="More posts">
              {prev ? (
                <Link href={`/blogs/${prev.slug}`}>
                  <small>← Previous</small>
                  {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link className="next" href={`/blogs/${next.slug}`}>
                  <small>Next →</small>
                  {next.title}
                </Link>
              )}
            </div>
            <Link className="btn back" href="/blogs">
              ← All posts
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
