import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type ProseProps = HTMLAttributes<HTMLElement> & {
  as?: "article";
  html: string;
};

export function Prose({ children, html, className }: ProseProps) {
  return (
    <article
      className={cn(
        "prose prose-lg max-w-none",
        "prose-p:leading-relaxed prose-p:mb-6",
        "prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-12 first:prose-headings:mt-0",
        "prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg",
        "prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline",
        "prose-img:rounded-xl prose-img:my-12",
        "prose-strong:font-semibold",
        "prose-ul:my-8 prose-ol:my-8",
        "prose-li:my-3",
        "prose-blockquote:my-8 prose-blockquote:border-l-4 prose-blockquote:pl-4",
        "prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-mono",
        "prose-pre:my-8 prose-pre:p-4 prose-pre:rounded-lg",
        className
      )}
    >
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </article>
  );
}
