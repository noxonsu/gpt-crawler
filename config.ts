
import { Config } from "./src/config";
var filename = "https://docs.1inch.io/"; // Corrected variable name
filename = filename.replace(/(^\w+:|^)\/\//, "");
filename = filename.replace(/\//g, "");

export const defaultConfig: Config = {
  url: "https://docs.1inch.io/",
  match: "https://docs.1inch.io//**",
  maxPagesToCrawl: 35,
  maxTokens: 100000,
  outputFileName: filename+".json",
  resourceExclusions: ["jpg","png"]
};
