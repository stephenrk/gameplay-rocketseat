import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'
import { Background } from '../components/Background'

export const Routes = () => {
    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}