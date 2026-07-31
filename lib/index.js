import makeWASocket from './Socket/index.js';
import chalk from "chalk";

console.log(chalk.bold.gray("-----------------------------------------\n"));
console.log(chalk.bold.cyan(`
⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⢿⡶⠶⣶⣶⣴⣯⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣏⣭⣭⣽⣿⣻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠟⠁⠀⠀⢀⣀⣀⠉⠉⠚⠋⣝⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡵⢿⡛⠛⠛⠉⠉⠉⠩⣼⣿⣿⣿⣿⣿
⣿⣿⣟⡋⠁⠀⢀⣴⣿⣿⣿⠋⠁⠀⠀⠀⠨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠚⠁⠀⠠⣶⣶⣦⣄⠀⠀⠙⠿⣿⣿⣿
⣿⣿⠟⠁⠀⣴⣿⣿⣿⣿⣟⠀⠣⡉⢨⠆⢐⣜⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠠⡒⠤⡆⠘⣿⣿⣿⣿⣄⠀⠘⢿⣿⣿
⣍⣀⣀⣀⠀⢿⣿⣿⣿⣿⣿⣄⣀⠈⢃⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠐⠔⠃⢰⣿⣿⣿⣿⣿⠆⠀⣀⣈⣙
⣿⣿⣿⣿⣷⣶⣭⣿⣿⢿⡿⠟⣉⣩⣭⣿⣿⣿⣿⣿⠀⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣒⡒⡚⠻⣿⣿⣿⣿⣵⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
YouTube : OmhcSilence 
Telegram : t.me/kiuchan11 
tiktok : @rriztxflow
`));
console.log(chalk.bold.gray("--------------------------------------------\n"));
console.log(chalk.bold.cyan("Follow Our Telegram Channel To See Update Information: t.me/kiuchan11\n"));;

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
