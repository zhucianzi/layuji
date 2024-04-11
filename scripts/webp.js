import fs from "fs-extra"
import webp from "webp-converter"

const file = fs.readFileSync("./webp.intput.txt").toString()
const fileList = file.split("\n");
const ext = fileList.at(-1)
fileList.splice(- 1);

for (const fileName of fileList) {
    const result = webp.cwebp(`${fileName}.${ext}`, `${fileName}.webp`, `-q 80`, `-v`);
    result.then((response) => console.log(response))
}