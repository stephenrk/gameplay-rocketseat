import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import { styles } from './styles'

type Props = TextInputProps & {

}

export const TextArea = ({ ...rest }: Props) => {
    return (
        <TextInput style={styles.container} {...rest} />
    )
}
