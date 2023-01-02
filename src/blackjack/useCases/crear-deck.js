import _ from "underscore";

// export const miNombre = 'Jose'; //? exportacion individual
 
//*MEJORAR LA DOCUEMENTACION JSDoc Comments
//? solo se agregaron un par de validaciones y documentacion
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
 export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    //*JSDoc Comments - Validaciones 
    if( !tiposDeCarta || tiposDeCarta.length === 0 ) 
    throw new Error('tiposDeCarga es obligatorio como un arreglo de string');
    
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) 
    throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {    
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck; //? exportacion por defecto

