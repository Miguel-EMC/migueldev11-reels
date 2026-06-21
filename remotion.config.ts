import { Config } from "@remotion/cli/config";
import fs from "fs";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Automatically detect local Chrome/Chromium to prevent Headless Shell download issues on NTFS partitions
const paths = [
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", // macOS
];

for (const path of paths) {
  if (fs.existsSync(path)) {
    Config.setBrowserExecutable(path);
    break;
  }
}

