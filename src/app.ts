import * as FS from "fs";
import IConfiguration from "./IConfiguration";
import MojangAPIProxyServer from "./MojangAPIProxyServer";

require('console-stamp')(console, '[HH:MM:ss.l]');

if (!FS.existsSync("./config")) {
	FS.mkdirSync("./config");
}

if (!FS.existsSync("./config/config.json")) {
	console.log("Creating default configuration");
	let defaultConfig: IConfiguration = {
		port: 80,
		cache: {
			ttl: 300,
			checkperiod: 30
		}
	}
	FS.writeFileSync("./config/config.json", JSON.stringify(defaultConfig, null, 4), 'utf8');
}

const config: IConfiguration = JSON.parse(FS.readFileSync("./config/config.json", 'utf8'));

new MojangAPIProxyServer(config);