import { Terrestre } from "../interfaces/Terrestre";
import { Mammifere } from "./Mammifere";

export class Chat extends Mammifere implements Terrestre {



miauler(): void {
 console.log("miaou")
}

respirerHorsDeLeau(): void {
	console.log("je respire pas sous l'eau")
}


marcher(): void {
	console.log("je marche")
}

}