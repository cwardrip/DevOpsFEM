//@ts-nocheck
import Yargs from "yargs";
import { readFileSync, writeFileSync } from "fs";
import { configure, render } from "nunjucks";

type BuildJsonDockerfile = {
    PreInstallCommands: string[];
    PostInstallCommands: string[];

}

type BuildJSON = {
    Dockerfile: BuildJsonDockerfile;
    ServiceName: string;
    ServiceType: string;
}

function main() {
    const argv = Yargs(process.argv.slice(2)).argv;

    const buildPath = argv['config'] as any;

    const configuration = readFileSync(buildPath, { encoding: "utf-8" });

    const configurationData = JSON.parse(configuration) as BuildJSON;

    configure("templates", { autoescape: true });

    const dockerfile = render("Dockerfile", configurationData);

    writeFileSync("Dockerfile", dockerfile);
}

main()