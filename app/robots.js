export default function robots() {
  const BASE_URL = "https://thedubaicarpenter.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Agar koi folder hide karna chahte hain
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}