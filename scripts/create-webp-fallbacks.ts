import sharp from "sharp";
import glob from "glob";

const createWebpFallbacks = (dir: string = "../out/**/*.webp") => {
  glob(dir + "/**/*.webp", function (_, files) {
    for (const file of files) {
      const filePath = file.replace(/\.(webp)($|\?)/, '.png$2');
      sharp(file).png().toFile(filePath) // Add fallbacks for next gen image formats
    }
  })
}

createWebpFallbacks(process.env.OUT_DIR);