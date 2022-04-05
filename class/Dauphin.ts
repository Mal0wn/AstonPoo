
import { Aquatique } from "../interfaces/Aqua";
import { Mammifere } from "./Mammifere";

export class Dauphin extends Mammifere implements Aquatique {



nager(): void {
	console.log("je nage")
}


respirerSousLeau(): void {
	console.log("bloup bloup")
}

/**
 * Methode cliquetter propree au dauphin
 */
cliquetter(): void {
 console.log("Bruit chelou du dauphin")
}
/**
 * Methoodee retenir respiration proopre au dauphin
 */
retenirRespiration(): void {
console.log(" Mode Petit Gregory Activé")
}

}