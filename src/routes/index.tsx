import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { useAuth } from '../context/auth'
import SignIn from '../screens/SignIn'

export const Routes = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            {user.id ? <AppRoutes /> : <SignIn />}
        </NavigationContainer>
    )
}