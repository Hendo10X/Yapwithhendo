import { getSinglePost } from "@/libs/query";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await getSinglePost(slug);

  if (!response) {
    return notFound();
  }

  const { post } = response;

  return (
    <div className="min-h-screen font-sans">
      <div className="max-w-4xl w-full mx-auto px-4 py-16">
        <article className="space-y-8">
          {/* Post Header */}
          <header className="space-y-4 pb-8">
            <h1 className="text-xl font-bold">{post.title}</h1>
            
            {/* Post Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={new Date(post.publishedAt).toISOString()}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="text-xs font-mono text-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded uppercase"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post Content */}
          <Prose className="text-gray-900 dark:text-gray-100" html={post.content} />
        </article>
      </div>
    </div>
  );
}