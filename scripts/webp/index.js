import fs from "fs-extra";
import path from "path";
import webp from "webp-converter";

const inputDir = "./input";
const outputDir = "./output";

const filelist = fs.readdirSync(inputDir).map(path.parse);

for (const { name, ext } of filelist) {
    const result = webp.cwebp(`${inputDir}/${name}${ext}`, `${outputDir}/${name}.webp`, "-q 80", "-v");
    result.then((res) => console.info(res));
}