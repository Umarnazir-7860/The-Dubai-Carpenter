export default function sitemap() {
  const BASE_URL = "https://thedubaicarpenter.com";

  const routes = [
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
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" || route === "/" ? 1.0 : 0.8,
  }));
}