import sharp from "sharp";
import glob from "glob";

glob(".next/**/*.webp", function (_, files) {
  for (const file of files) {
    const filePath = file.replace(/\.(webp)($|\?)/, '.png$2');
    console.log("Adding webp fallback for:", file, filePath)
    sharp(file).png().toFile(filePath).catch((err) => {
      console.log(err);
    });
  }
})