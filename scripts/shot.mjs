import { spawn } from "node:child_process";
import { existsSync, rmSync } from "node:fs";

const [, , url, out, width = "1440", height = "1250"] = process.argv;

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

if (existsSync(out)) rmSync(out);

const child = spawn(
  EDGE,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--force-prefers-reduced-motion",
    "--run-all-compositor-stages-before-draw",
    `--user-data-dir=${process.env.TEMP}\\edgeshot-${Date.now()}`,
    `--window-size=${width},${height}`,
    "--virtual-time-budget=14000",
    `--screenshot=${out}`,
    url,
  ],
  { stdio: "ignore" }
);

child.on("exit", (code) => {
  console.log(existsSync(out) ? `saved ${out}` : `FAILED (exit ${code})`);
});
