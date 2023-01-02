/**
 * Esta funcion me permite tomar una carta dentro del deck
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} Regresa la carta del deck
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}