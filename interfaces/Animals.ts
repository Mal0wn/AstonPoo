export interface Animal {
	_nom : string;
	_poids : number;
	_dateNaissance: Date;

/**
 *  Methode qui regroupe les infos de l'animal
 */
	display(): void;
}