import { random } from "../utils/getRandomNumber.js";
import fs from "node:fs/promises";
import dbPath from "../constans/path.js";

export const randomProduct = async () => {
  try {
    const productAllJson = await fs.readFile(dbPath, "utf-8");
    const productAll = JSON.parse(productAllJson);
    const result = random(0, productAll.length - 1);
    console.log(productAll[result]);
  } catch (error) {
    console.log(error);
  }
};
randomProduct();
