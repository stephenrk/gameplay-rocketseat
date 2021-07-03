import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { styles } from './styles'

export const SmallInput = ({ ...rest }: TextInputProps) => {
    return (
        <TextInput keyboardType="numeric" style={styles.container} {...rest} />
    )
}
