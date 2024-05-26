import fs from "node:fs/promises";
import dbPath from "../constans/path.js";
import path from "node:path";

export async function writeFiles() {
    try {
        const data = await fs.readFile(dbPath, "utf8");
        const parsedData = JSON.parse(data);
        for(let i = 0; i < parsedData.length; i += 1) {
            const filePath = path.join(process.cwd(), 'src', 'files', `${i+1}.json`)
             await  fs.writeFile(filePath, JSON.stringify(parsedData[i], null, 2))
        }
    } catch (e) {
        console.error(e.message)
    }
}

writeFiles()
