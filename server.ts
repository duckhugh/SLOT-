import express from "express";
import path from "path";
import Parser from "rss-parser";

const parser = new Parser();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API endpoints
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/news", async (req, res) => {
    try {
      // 擷取Google新聞RSS，以"線上博奕"或"娛樂城"為關鍵字 (移除運彩)
      const feedUrl = "https://news.google.com/rss/search?q=%E7%B7%9A%E4%B8%8A%E5%8D%9A%E5%A5%95+OR+%E5%A8%9B%E6%A8%82%E5%9F%8E+when:14d&hl=zh-TW&gl=TW&ceid=TW:zh-Hant";
      const feed = await parser.parseURL(feedUrl);
      
      // 負面新聞、社會案件與運彩的排除關鍵字
      const blocklist = [
        '假', '詐騙', '刑警', '警', '抓', '破獲', '違法', '社會', 
        '別碰', '戒賭', '騙', '非法', '黑網', '網賭', '運彩', '落網', 
        '查獲', '博弈機房', '洗錢', '抄', '警政', '賭場', '逮'
      ];

      // 過濾新聞
      const filteredItems = feed.items.filter(item => {
        const title = item.title?.toLowerCase() || "";
        return !blocklist.some(keyword => title.includes(keyword));
      });
      
      const newsInfo = filteredItems.slice(0, 8).map(item => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        source: item.source || "Google News",
      }));
      
      res.json(newsInfo);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      res.status(500).json({ error: "Failed to fetch news" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve production files
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
