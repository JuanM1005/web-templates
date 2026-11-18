import tailwind from "bun-plugin-tailwind";

const build = await Bun.build({
  entrypoints: ["./index.html"],
  outdir: "./dist",
  minify: true,
  define: { "process.env.NODE_ENV": '"production"' },
  plugins: [tailwind],
});

console.log(`Umbral compilado: ${build.outputs.length} archivos en dist/.`);
