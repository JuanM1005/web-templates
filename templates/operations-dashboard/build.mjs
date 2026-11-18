import tailwind from "bun-plugin-tailwind";

const build = await Bun.build({
  entrypoints: ["./index.html"],
  outdir: "./dist",
  minify: true,
  define: { "process.env.NODE_ENV": '"production"' },
  plugins: [tailwind],
});

if (!build.success) throw new Error(build.logs.join("\n"));
await Bun.write("./dist/OFL.txt", Bun.file("./src/assets/OFL.txt"));
console.log(`Pulso compilado: ${build.outputs.length} recursos y licencia tipográfica en dist/.`);
