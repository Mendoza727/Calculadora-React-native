import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';
import { BtnCalculadoraComponet } from '../components/BtnCalculadoraComponet';
import { useCalculador } from '../hooks/useCalculador';


export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        btnLimpiarNumero,
        btnPositivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        btNumeroSeleccionado,
        calculo

    } = useCalculador();

    return (
        <View style={styles.calculadoraContainer}>
            {
                ( numeroAnterior !== '0') && ( 
                    <Text style={styles.resultadoAnterior}>{numeroAnterior}</Text> 
                )
            }
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            { /* Fila de botones */}
            <View style={styles.fila}>
                <BtnCalculadoraComponet text='AC' color='#9B9B9B' action={ btnLimpiarNumero } />
                <BtnCalculadoraComponet text='+/-' color='#9B9B9B' action={ btnPositivoNegativo } />
                <BtnCalculadoraComponet text='%' color='#9B9B9B' action={ btnDelete } />
                <BtnCalculadoraComponet text='/' color='#FF9427' action={ btnDividir } />
            </View>

            { /* Fila de botones */}
            <View style={styles.fila}>
                <BtnCalculadoraComponet text='7' action={ btNumeroSeleccionado } />
                <BtnCalculadoraComponet text='8' action={ btNumeroSeleccionado } />
                <BtnCalculadoraComponet text='9' action={ btNumeroSeleccionado } />
                <BtnCalculadoraComponet text='X' color='#FF9427' action={ btnMultiplicar } />
            </View>

            { /* Fila de botones */}
            <View style={styles.fila}>
                <BtnCalculadoraComponet text='4' action={ btNumeroSeleccionado } />
                <BtnCalculadoraComponet text='5' action={ btNumeroSeleccionado } />
                <BtnCalculadoraComponet text='6' action={ btNumeroSeleccionado } />
                <BtnCalculadoraComponet text='-' color='#FF9427' action={ btnRestar } />
            </View>

            { /* Fila de botones */}
            <View style={styles.fila}>
                <BtnCalculadoraComponet text='1' action={ btNumeroSeleccionado } />
                <BtnCalculadoraComponet text='2' action={ btNumeroSeleccionado } />
                <BtnCalculadoraComponet text='3' action={ btNumeroSeleccionado } />
                <BtnCalculadoraComponet text='+' color='#FF9427' action={ btnSumar } />
            </View>

            { /* Fila de botones */}
            <View style={styles.fila}>
                <BtnCalculadoraComponet text='0' anchura action={ btNumeroSeleccionado } />
                <BtnCalculadoraComponet text='.' action={ btNumeroSeleccionado } />
                <BtnCalculadoraComponet text='=' color='#FF9427' action={ calculo } />
            </View>

        </View>
    )
}