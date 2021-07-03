import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import { api } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_USER } from '../config/database'

const { SCOPE } = process.env
const { CDN_IMAGE } = process.env
const { CLIENT_ID } = process.env
const { RESPONSE_TYPE } = process.env

type User = {
    id: string
    username: string
    firstName: string
    avatar: string
    email: string
    token: string
}

type AuthContextData = {
    user: User
    signIn: () => Promise<void>
    loading: boolean
}

type AuthProviderProps = {
    children: ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string
        error?: string
    }
}

WebBrowser.maybeCompleteAuthSession();

const redirectUri = AuthSession.makeRedirectUri({
  useProxy: true,
});

const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)

    async function signIn() {
        try {
            setLoading(true)

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
            const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse
            
            if (type === 'success' && !params.error) {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`
                
                const userInfo = await api.get('/users/@me');

                const firstName = userInfo.data.username.split(' ')[0]
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}`

                const userData = {
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                }
                await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData))
                setUser(userData)
            }
        } catch (error) {
            throw new Error('Não foi possível autenticar');
        } finally {
            setLoading(false)
        }
    }

    async function loadUserStorageData() {
        const storage = await AsyncStorage.getItem(COLLECTION_USER)

        if (storage) {
            const userLogged = JSON.parse(storage) as User
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`
            setUser(userLogged)
        }
    }

    useEffect(() => {
        loadUserStorageData()
    }, [])

    return (
        <AuthContext.Provider value={{ user, signIn, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export {
    AuthProvider,
    useAuth,
}
