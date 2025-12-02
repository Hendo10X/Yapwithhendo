import { getPosts } from "@/libs/query";
import { Post } from "@/types/marble";
import Link from "next/link";
import { FileText, BookOpen } from "lucide-react";

// Revalidate this page every hour
export const revalidate = 3600;

export default async function Home() {
  const data = await getPosts();

  if (!data) {
    return null;
  }

  const { posts } = data;

  return (
    <div className="min-h-screen font-sans">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Header */}
        <h1 className="text-lg sm:text-3xl font-bold mb-8 sm:mb-12">Yap with hendo</h1>

        {/* Blog Posts */}
        <div className="space-y-0">
          {posts.map((post: Post, index: number) => (
            <article
              key={post.id}
              className="group border-b border-border last:border-b-0"
            >
              <Link href={`/blog/${post.slug}`} className="block py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  {/* Left: Icon and Title */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {/* Icon */}
                    <div className="flex-shrink-0 text-gray-400">
                      {index % 2 === 0 ? (
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-sm sm:text-base font-normal group-hover:text-gray-600 transition-colors line-clamp-2 sm:truncate">
                      {post.title}
                    </h2>
                  </div>

                  {/* Right: Date */}
                  <time 
                    dateTime={new Date(post.publishedAt).toISOString()}
                    className="text-xs sm:text-sm text-muted-foreground flex-shrink-0 ml-9 sm:ml-0"
                  >
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
