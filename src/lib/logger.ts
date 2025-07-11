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
  console.log("Logger called! Writing to:", logPath); // <--- Add this
  try {
    fs.appendFileSync(logPath, logMessage, "utf8");
  } catch (err) {
    console.error("Logger failed to write:", err);
  }
}