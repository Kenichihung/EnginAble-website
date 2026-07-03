import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import http from "node:http";
import os from "node:os";

const host = process.env.HOST ?? "0.0.0.0";
const port = Number(process.env.PORT ?? 4175);
const root = join(process.cwd(), "dist");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
};

const server = http.createServer((request, response) => {
  const requestPath = request.url === "/" ? "/index.html" : request.url;
  const safePath = normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(root, safePath);

  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
  });

  createReadStream(filePath).pipe(response);
});

server.listen(port, host, () => {
  const networkUrls = Object.values(os.networkInterfaces())
    .flat()
    .filter((networkInterface) => networkInterface?.family === "IPv4" && !networkInterface.internal)
    .map((networkInterface) => `http://${networkInterface.address}:${port}`);

  console.log(`EnginAble frontend running at http://localhost:${port}`);

  if (networkUrls.length > 0) {
    console.log("Available on your local network:");
    for (const url of networkUrls) {
      console.log(`  ${url}`);
    }
  }
});
