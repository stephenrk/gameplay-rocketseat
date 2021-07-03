import React from 'react'
import { Text, View } from 'react-native'
import { Avatar } from '../../components/Avatar'
import { useAuth } from '../../context/auth'
import { styles } from './styles'

export const Profile = () => {
    const { user } = useAuth()

    return (
        <View style={styles.container}>
            <Avatar urlImage={user.avatar} />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>Olá,</Text>
                    <Text style={styles.username}>{user.firstName}</Text>
                </View>
                <Text style={styles.message}>Hoje é dia de vitória</Text>
            </View>
        </View>
    )
}
