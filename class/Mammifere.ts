import { Animal } from "../interfaces/Animals";

export abstract class Mammifere implements Animal {

_dateNaissance: Date;
	_nom: string;
	_poids: number;

constructor( dateNaissance : Date , nom : string , poids : number) {
	this._dateNaissance = dateNaissance;
	this._nom = nom;
	this._poids = poids
}

	


display(): void {
let dateToFrench = '0'+this.dateNaissance.getDate() + '/0' + ((this.dateNaissance.getMonth())) + '/' + this.dateNaissance.getFullYear()

	console.log(`
        Nom: ${this.nom},
        Date de naissance : ${dateToFrench},
        Poids : ${this.poids}
    `);
}

get dateNaissance(): Date {


    return this._dateNaissance;
}
set dateNaissance(value: Date) {
    this._dateNaissance = value;
}
get nom(): string {
    return this._nom;
}
set nom(value: string) {
    this._nom = value;
}
get poids(): number {
    return this._poids;
}
set poids(value: number) {
    this._poids = value;
}
}