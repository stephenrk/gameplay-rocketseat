import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import { styles } from './styles'

type Props = TextInputProps & {

}

export const SmallInput = ({ ...rest }: Props) => {
    return (
        <TextInput keyboardType="numeric" style={styles.container} {...rest} />
    )
}
