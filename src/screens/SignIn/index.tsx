import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png'
import ButtonIcon from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/core'
import { Background } from '../../components/Background'


const SignIn = () => {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate("Home")
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image resizeMode="stretch" source={IllustrationImg} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>Conecte-se e organize suas jogatinas</Text>
                    <Text style={styles.subtitle}>Crie grupos para jogar seus games favoritos com seus amigos</Text>
                    <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
                </View>
            </View>
        </Background>
    )
}

export default SignIn
