// src/lib/logger.ts
import fs from "fs";
import path from "path";

/**
 * Appends a log message to a file on the server.
 * @param args - Any values to log (will be joined with spaces)
 */
export function logToFile(...args: any[]) {
  const logMessage = `[${new Date().toISOString()}] ${args.join(" ")}\n`;
  const logPath = path.join(process.cwd(), "server.log");
  fs.appendFileSync(logPath, logMessage, "utf8");
}