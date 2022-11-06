import sharp from "sharp";
import glob from "glob";

const createWebpFallbacks = (dir: string = "../out/**/*.webp") => {
  glob(dir + "/**/*.webp", function (_, files) {
    for (const file of files) {
      const filePath = file.replace(/\.(webp)($|\?)/, '.png$2');
      console.log("Adding webp fallback for:", file, filePath)
      sharp(file).png().toFile(filePath).catch((err) => {
        console.log(err);
      });
    }
  })
}

createWebpFallbacks(process.env.OUT_DIR);