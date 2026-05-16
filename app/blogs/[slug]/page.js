import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Custom component mapping taake normal markdown element text premium look le sakein
const mdxComponents = {
  // 1. Next.js Optimized Routing for Links
  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },

  // 2. Custom Left-Accent Border Border Style for H2 (Main Sections)
  h2: ({ children, ...props }) => {
    return (
      <h2
        {...props}
        className="flex items-center gap-4 pl-4 border-l-[5px] border-[#CCAC34] text-2xl md:text-3xl font-black text-gray-900 my-8 leading-tight tracking-tight"
      >
        {children}
      </h2>
    );
  },

  // 3. Custom Left-Accent Border Style for H3 (Sub-sections like Bespoke Kitchens)
  h3: ({ children, ...props }) => {
    return (
      <h3
        {...props}
        className="flex items-center gap-3 pl-3 border-l-[4px] border-[#CCAC34] text-xl md:text-2xl font-extrabold text-gray-800 my-6 leading-snug"
      >
        {children}
      </h3>
    );
  },
};

// SEO Metadata (Next.js 15/16 Async Params)
export async function generateMetadata({ params }) {
  const { slug } = await params; 
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  
  if (!fs.existsSync(filePath)) return { title: "Post Not Found" };

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return {
    // FIX: `${data.title} | The Dubai Carpenter` ko hata kar direct data.title kiya
    title: data.title || "Custom Carpentry Dubai | The Dubai Carpenter", 
    description: data.description,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      {/* Premium Main Blog Cover Section */}
      {data.image && (
        <div className="relative w-full h-[450px] mb-10 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={data.image}
            alt={`${
              data.title
                ? data.title.includes(":")
                  ? data.title.split(":")[0].trim()
                  : data.title.trim()
                : "Best Custom Carpentry in Dubai"
            } | The Dubai Carpenter`}
            fill
            quality={95}
            unoptimized
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Main Page Title (H1) with Top Premium Branding Layout */}
      <header className="mb-12 pb-8 border-b border-gray-100">
        <div className="text-sm text-gray-500 font-semibold tracking-wide uppercase">
          {data.date} <span className="mx-2 text-gray-300">•</span> By{" "}
          {data.author || "The Dubai Carpenter Team"}
        </div>
      </header>

      {/* Tailwind v4 Typography Wrapper */}
      <article
        className="prose prose-neutral max-w-none prose-lg lg:prose-xl
        prose-p:text-gray-700 prose-p:leading-relaxed 
        prose-a:text-[#CCAC34] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-[#CCAC34] prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg"
      >
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const blogDirectory = path.join(process.cwd(), "content");
  if (!fs.existsSync(blogDirectory)) return [];
  const files = fs.readdirSync(blogDirectory);
  return files.map((filename) => ({ slug: filename.replace(".md", "") }));
}
