import React from 'react'
import { Image, View } from 'react-native'
import { styles } from './styles'

export const GuildIcon = () => {
    const uri = 'https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png'

    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )
}
