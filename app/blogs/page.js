import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

const BLOGS_PER_PAGE = 9;

// SEO Metadata for Blog Root
export const metadata = {
  title: "Blogs | The Dubai Carpenter",
  description:
    "Expert woodworking tips, custom furniture guides, and kitchen renovation ideas in Dubai.",
};

export default async function BlogRoot() {
  // Root page ko hum hamesha default page 1 treat karenge
  const currentPage = 1;
  const blogDirectory = path.join(process.cwd(), "content");

  if (!fs.existsSync(blogDirectory)) {
    return (
      <div className="text-center py-20 text-gray-500">No blogs found.</div>
    );
  }

  const filenames = fs.readdirSync(blogDirectory);

  const allBlogs = filenames
    .map((filename) => {
      const fileContents = fs.readFileSync(
        path.join(blogDirectory, filename),
        "utf8",
      );
      const { data } = matter(fileContents);
      return {
        slug: filename.replace(".md", ""),
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalPages = Math.ceil(allBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = allBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-black mb-12 text-center text-gray-900 underline decoration-[#CCAC34] decoration-[4px] underline-offset-[12px] tracking-tight">
        Carpentry Insights & Guides
      </h1>

      {currentBlogs.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No blogs published yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentBlogs.map((blog) => (
            <article
              key={blog.slug}
              className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container with v4 Aspect Ratio */}
              <Link
                href={`/blog/${blog.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100"
              >
                <Image
                  src={blog.image || "/placeholder.jpg"}
                  alt={blog.title || "Blog Image"}
                  fill
                  unoptimized // Quality loose hone se rokne ke liye
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <time className="text-xs font-semibold text-[#CCAC34] font-bold mb-2 uppercase tracking-widest">
                  {blog.date}
                </time>
                <h2 className="text-xl font-bold mb-3 group-hover:text-[#CCAC34] transition-colors">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                  {blog.description}
                </p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-auto text-sm font-bold text-[#CCAC34] flex items-center"
                >
                  Read More{" "}
                  <span className="ml-1 transition-all group-hover:ml-2">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination Navigation */}
      {totalPages > 1 && (
        <nav className="flex justify-center items-center mt-16 space-x-4">
          {/* Pehle page par hain to Previous button nahi dikhega */}
          <div className="text-sm font-bold text-gray-700">
            Page {currentPage} of {totalPages}
          </div>
          {currentPage < totalPages && (
            <Link
              href={`/blog/page/${currentPage + 1}`}
              className="px-5 py-2 border border-gray-300 rounded-full hover:bg-[#CCAC34] hover:text-white transition font-medium"
            >
              Next
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
