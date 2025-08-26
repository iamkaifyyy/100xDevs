import { Command } from "commander";   // Capital "C" in Command

const program = new Command();

program
  .name("kaifyyy-cli")                // CLI name
  .description("first cli tool")
  .version("1.0.0");

program
  .option("-n, --name <string>", "Your name")   // space between flag & <string>
  .action((options) => {
    console.log(`Hello, ${options.name || "world"}!`);  // backticks for template string
  });

program.parse();