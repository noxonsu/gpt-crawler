
import { Config } from "./src/config";
var filename = "https://solympics.moscow/"; // Corrected variable name
filename = filename.replace(/(^\w+:|^)\/\//, "");
filename = filename.replace(/\//g, "");

export const defaultConfig: Config = {
  url: "https://solympics.moscow/",
  match: "https://solympics.moscow//**",
  maxPagesToCrawl: 35,
  maxTokens: 100000,
  outputFileName: filename+".json",
  resourceExclusions: ["jpg","png"]
};
