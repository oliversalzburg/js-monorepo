import { redirectErrorsToConsole } from "@oliversalzburg/js-utils/errors/console.js";
import esbuild from "esbuild";

esbuild
  .build({
    bundle: true,
    entryPoints: ["./source/main.ts"],
    external: ["os"],
    format: "esm",
    outfile: "./output/main.js",
    platform: "node",
    target: "node22",
  })
  .catch(redirectErrorsToConsole(console));
