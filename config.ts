
import { Config } from "./src/config";
var filename = "https://drivingschool.wpmix.net/"; // Corrected variable name
filename = filename.replace(/(^\w+:|^)\/\//, "");
filename = filename.replace(/\//g, "");

export const defaultConfig: Config = {
  url: "https://drivingschool.wpmix.net/",
  match: "https://drivingschool.wpmix.net//**",
  maxPagesToCrawl: 35,
  maxTokens: 120000,
  outputFileName: filename+".json",
  resourceExclusions: ["jpg","png"]
};
