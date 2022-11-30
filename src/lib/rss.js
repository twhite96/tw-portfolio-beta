import Parser from "rss-parser";

export const FEED = [
  {
    slug: "twhite-blog",
    title: "Tiffany R. White Blog",
    url: "https://tiffanywhite.dev/rss",
  },
];

export async function getFeed(feedUrl) {
  let parser = new Parser();

  return await parser.parseURL(feedUrl);
}