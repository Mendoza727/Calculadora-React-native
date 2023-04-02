import { useState, useRef } from "react";

enum Operadores {
    sumar,
    restar,
    multiplicar,
    dividir,
}


export const useCalculador = () => {
        
    const [numero, setnumero] = useState('0');
    const [numeroAnterior, setnumeroAnterior] = useState('0');

    const operacioSeleccionada = useRef<Operadores>();

    const btnLimpiarNumero = () => {
        setnumero('0');
        setnumeroAnterior('0');
    }

    const btNumeroSeleccionado = (numeroSeleccionado: string) => {

        /* Validaciones escenciales */
        if (numero.includes('.') && numeroSeleccionado === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            /* Punto Decimal? */
            if (numeroSeleccionado === '.') {
                setnumero(numero + numeroSeleccionado);

                /* evalua si hay otro cero y contiene un punto */
            } else if (numeroSeleccionado === '0' && numero.includes('.')) {
                setnumero(numero + numeroSeleccionado);

               /* evalua si es diferente de cero y no contiene punto */ 
            } else if ( numeroSeleccionado !== '0' && !numero.includes('.')) {
                setnumero( numeroSeleccionado );

                /* Evitar ceros despues del punto */
            } else if ( numeroSeleccionado === '0' && !numero.includes('.') ) {
                setnumero( numero );
            } else {
                setnumero( numero + numeroSeleccionado );
            }

        } else {
            setnumero(numero + numeroSeleccionado);
        }


    }

    const cambioNumero = () => {

        if( numero.endsWith('.') ) {
            /* solo se ejecuta si hay un punto al final y no contiene numero despues */
            setnumeroAnterior( numero.slice(0,-1) );
        } else {
            setnumeroAnterior( numero );
        }
        setnumero('0');
    }

    const btnDelete = () => {

        let negativo = '';
        let numeroTemporal = numero;
        if ( numero.includes('-') ) {
            negativo = '-';
            numeroTemporal = numero.substring(1);
        }

        if ( numeroTemporal.length > 1 ) {
            setnumero( negativo + numeroTemporal.slice(0, -1) );
        } else {
            setnumero('0');
        }
    }

    const btnPositivoNegativo = () => {
        if (numero.includes('-')) {
            setnumero(numero.replace('-', ''));
        } else {
            setnumero('-' + numero);
        }
    }

    const btnSumar = () => {
        cambioNumero();
        operacioSeleccionada.current = Operadores.sumar;
    }

    const btnRestar = () => {
        cambioNumero();
        operacioSeleccionada.current = Operadores.restar;
    }

    const btnMultiplicar = () => {
        cambioNumero();
        operacioSeleccionada.current = Operadores.multiplicar;
    }

    const btnDividir = () => {
        cambioNumero();
        operacioSeleccionada.current = Operadores.dividir;
    }

    const calculo = () => {
        const num1 = Number( numero );
        const num2 = Number( numeroAnterior );

        if (!num2 || (!num1 && operacioSeleccionada.current === Operadores.dividir)) {
            setnumero('0');
            setnumeroAnterior('0');
        } else {
            switch ( operacioSeleccionada.current ) {
                case Operadores.sumar: 
                    setnumero( `${ num1 + num2 }` );
                    break;
                
                case Operadores.restar:
                    setnumero( `${ num2 - num1 }` );
                    break;
                
                case Operadores.multiplicar:
                    setnumero( `${ num1 * num2 }` );
                    break;
    
                case Operadores.dividir:
                    if( num1 === 0 ) {
                        setnumero('Not Divisible');
                    } else {
                        setnumero( `${ num2 / num1 }` );
                    }
                    break;
    
            }
        }

        setnumeroAnterior('0');

    }

    return {
        numero,
        numeroAnterior,
        btnLimpiarNumero,
        btnPositivoNegativo,
        btNumeroSeleccionado,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        btnDividir,
        btnDelete,
        calculo
    }

}
