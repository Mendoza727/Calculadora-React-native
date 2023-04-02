import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/AppTheme'

export interface Props {
    text: string;
    color?: '#9B9B9B' | '#2D2D2D' | '#FF9427';
    anchura?: boolean;
    action: ( action: string ) => void;
}

export const BtnCalculadoraComponet = ({ text, color = '#2D2D2D', anchura = false, action }: Props) => {
    return (
        <TouchableOpacity onPress={ () => action( text ) }>
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (anchura === true) ? 180 : 80
            }}>
                {/* Buttons */}
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}
