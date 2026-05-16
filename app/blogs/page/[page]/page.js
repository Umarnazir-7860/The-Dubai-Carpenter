import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BLOGS_PER_PAGE = 9;

// SEO Metadata (Fixed with Async/Await)
export async function generateMetadata({ params }) {
  const { page } = await params; // Next.js 15 requirement
  return {
    title: `Blog Page ${page} | The Dubai Carpenter`,
    description: "Expert woodworking tips, custom furniture guides, and kitchen renovation ideas in Dubai.",
  };
}

export default async function BlogPagination({ params }) {
  // 1. Params ko await kiya taake 404 error na aaye
  const { page } = await params; 
  const currentPage = parseInt(page) || 1;
  const blogDirectory = path.join(process.cwd(), "content");
  
  if (!fs.existsSync(blogDirectory)) return <div className="text-center py-20">No blogs found.</div>;

  const filenames = fs.readdirSync(blogDirectory);
  
  const allBlogs = filenames.map((filename) => {
    const fileContents = fs.readFileSync(path.join(blogDirectory, filename), "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(".md", ""),
      ...data,
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalPages = Math.ceil(allBlogs.length / BLOGS_PER_PAGE);
  
  // 2. Edge case fix: Agar total pages 0 hain to 404 na de, khali page dikhaye
  if (currentPage > totalPages && totalPages !== 0) notFound();

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = allBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 underline decoration-orange-500 underline-offset-8">
        Carpentry Insights & Guides
      </h1>
      
      {currentBlogs.length === 0 ? (
        <div className="text-center text-gray-500 py-10">No blogs published yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentBlogs.map((blog) => (
            <article key={blog.slug} className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <Link href={`/blog/${blog.slug}`} className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={blog.image || "/placeholder.jpg"} 
                  alt={blog.title || "Blog Image"} 
                  fill 
                  quality={95}
                  className="object-cover group-hover:scale-110 transition duration-500" 
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <time className="text-xs font-semibold text-orange-600 mb-2 uppercase tracking-widest">{blog.date}</time>
                <h2 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-6">{blog.description}</p>
                <Link href={`/blog/${blog.slug}`} className="mt-auto text-sm font-bold text-gray-900 flex items-center">
                  Read More <span className="ml-1 transition-all group-hover:ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <nav className="flex justify-center items-center mt-16 space-x-4">
          {currentPage > 1 && (
            <Link href={`/blog/page/${currentPage - 1}`} className="px-5 py-2 border border-gray-300 rounded-full hover:bg-orange-600 hover:text-white transition font-medium">
              Previous
            </Link>
          )}
          <div className="text-sm font-bold text-gray-700">Page {currentPage} of {totalPages}</div>
          {currentPage < totalPages && (
            <Link href={`/blog/page/${currentPage + 1}`} className="px-5 py-2 border border-gray-300 rounded-full hover:bg-orange-600 hover:text-white transition font-medium">
              Next
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const blogDirectory = path.join(process.cwd(), "content");
  if (!fs.existsSync(blogDirectory)) return [];
  const files = fs.readdirSync(blogDirectory);
  const totalPages = Math.ceil(files.length / BLOGS_PER_PAGE) || 1;
  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }));
}