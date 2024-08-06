import express, { Request, Response } from "express";
import next from "next";
import fs from "node:fs";

// get PORT
const _args = process.argv.slice(2);
const _portParam = _args.find((arg) => arg.toLowerCase().startsWith("-port="));
const _port = _portParam ? _portParam.split("=")[1] : 3000;

// get current git hash and branch and write it into file for dev commit hash tracking
getGitHash();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = _port;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port} [${process.env.NODE_ENV.toUpperCase()}]`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

function getGitHash() {
  const _git_hash = require('child_process').execSync('git log --pretty=format:"%h" -n1').toString().trim();
  const _git_branch = require('child_process').execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  try {
    fs.writeFileSync('../track.json', JSON.stringify({ hash: _git_hash, branch: _git_branch }));
  } catch (err) {
    throw console.log(err);
  }
}