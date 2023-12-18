import { Config } from "./src/config";
import dotenv from "dotenv";
import { Config } from "./src/config";


dotenv.config();

export const defaultConfig: Config = {
  url: process.env.URL || "https://drivingschool.wpmix.net/",
  match: process.env.MATCH || "https://drivingschool.wpmix.net/",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
};
