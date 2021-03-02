const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://archshop.com.br",
  pagesDirectory: process.cwd() + "/.next/server/pages",
  targetDirectory: "out/"
});

console.log("✅ sitemap.xml generated!");