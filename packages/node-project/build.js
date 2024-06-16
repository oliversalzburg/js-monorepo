import esbuild from "esbuild";

esbuild
  .build({
    bundle: true,
    entryPoints: ["./source/main.ts"],
    format: "esm",
    outfile: "./output/main.cjs",
    platform: "node",
    target: "esnext",
  })
  .catch(console.error);
