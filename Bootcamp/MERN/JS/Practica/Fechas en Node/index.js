import {FechaLarga,AntiguedadFecha,DiasFecha,FechaCorta,genFecha} from "./utils/formatearFecha.js";
import chalk from 'chalk';

// for (let i = 0; i<5;i++){
//     console.log(chalk.bgCyanBright(chalk.black(FechaLarga(genFecha()))))
// }
for (let i = 0; i<5;i++){
    console.log(chalk.bgGreen(chalk.bold(chalk.blueBright(AntiguedadFecha(genFecha())))))
}
// for (let i = 0; i<5;i++){
//     console.log(chalk.bgWhiteBright(chalk.blue(DiasFecha(genFecha()))))
// }
// for (let i = 0; i<5;i++){
//     console.log(chalk.bgBlueBright(chalk.greenBright(chalk.bold(FechaCorta(genFecha())))))
// }