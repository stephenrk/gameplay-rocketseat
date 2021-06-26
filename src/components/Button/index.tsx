import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

type Props = RectButtonProps & {
    title: string
}

const Button = ({ title, ...rest }: Props) => {
    return (
        <RectButton style={styles.container} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </RectButton>
    )
}

export default Button
