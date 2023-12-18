import { Config } from "./src/config";
        import dotenv from "dotenv";
        import { Config } from "./src/config";
        
        
        dotenv.config();
        
        export const defaultConfig: Config = {
          url: "${{ github.event.inputs.URL }}",
          match: "${{ github.event.inputs.URL }}/${{ github.event.inputs.MATCH }}",
          maxPagesToCrawl: 50,
          outputFileName: "output.json",
        };
