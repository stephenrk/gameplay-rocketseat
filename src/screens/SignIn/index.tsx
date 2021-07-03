import React from 'react'
import { ActivityIndicator, Alert, Image, Text, View } from 'react-native'
import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png'
import ButtonIcon from '../../components/ButtonIcon'
import { Background } from '../../components/Background'
import { useAuth } from '../../context/auth'
import { theme } from '../../global/styles/theme'


const SignIn = () => {
    const { user, signIn, loading } = useAuth()

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error)
        }
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image resizeMode="stretch" source={IllustrationImg} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>Conecte-se e organize suas jogatinas</Text>
                    <Text style={styles.subtitle}>Crie grupos para jogar seus games favoritos com seus amigos</Text>
                    {loading
                        ? <ActivityIndicator color={theme.colors.primary} />
                        : <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
                    }
                </View>
            </View>
        </Background>
    )
}

export default SignIn
