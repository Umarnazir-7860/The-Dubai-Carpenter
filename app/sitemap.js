import fs from "fs";
import path from "path";

export default function sitemap() {
  const BASE_URL = "https://thedubaicarpenter.com";

  // 1. Static and Services Routes
  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/our-reviews",
    "/services",
    "/services/commercial-fit-out",
    "/services/custom-kitchens",
    "/services/electricians",
    "/services/glass-work",
    "/services/gypsum-ceiling",
    "/services/luxury-wardrobes",
    "/services/office-fit-outs",
    "/services/sign-boards",
    "/services/wood-paint-polish",
    "/blogs", // Aapka main pagination/listing page
  ];

  const sitemapEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Blog Routes Generation (Root ke content folder se)
  const blogDirectory = path.join(process.cwd(), "content");
  
  if (fs.existsSync(blogDirectory)) {
    const files = fs.readdirSync(blogDirectory);
    
    const blogEntries = files
      .filter((file) => file.endsWith(".md"))
      .map((filename) => {
        const slug = filename.replace(".md", "");
        return {
          // Aapka actual path `/blogs/[slug]` hai, isliye yahan /blogs/ dynamic use hoga
          url: `${BASE_URL}/blogs/${slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.6,
        };
      });

    return [...sitemapEntries, ...blogEntries];
  }

  return sitemapEntries;
}