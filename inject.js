import { readFileSync, writeFileSync } from "fs";

const src = readFileSync("obf.js", "utf8");
const replacement = process.env.SET_CONTACT ?? "";

const result = src.replace("// __SET_CONTACT__", replacement);

writeFileSync("dist/obf.js", result);