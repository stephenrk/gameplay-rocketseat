import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { theme } from '../../global/styles/theme'
import { Feather } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/core'

type Props = {
    title: string
    action?: ReactNode

}

export const Header = ({ title, action }: Props) => {
    const { secondary40, secondary100, heading } = theme.colors

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <LinearGradient style={styles.container} colors={[secondary100, secondary40]}>
            <BorderlessButton onPress={handleGoBack}>
                <Feather name="arrow-left" size={24} color={heading} />
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            {action && (
                <View>
                    {action}
                </View>
            )}
        </LinearGradient>
    )
}
