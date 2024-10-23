export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },

    sitemap: "https://rajgurusteel.vercel.app/sitemap.xml",
  };
}
