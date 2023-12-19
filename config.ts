
import { Config } from "./src/config";
var filename = "https://onout.org/"; // Corrected variable name
filename = filename.replace(/(^\w+:|^)\/\//, "");
filename = filename.replace(/\//g, "");

export const defaultConfig: Config = {
  url: "https://onout.org/",
  match: "https://onout.org//**",
  maxPagesToCrawl: 35,
  maxTokens: 100000,
  outputFileName: filename+".json",
  resourceExclusions: ["jpg","png"]
};
