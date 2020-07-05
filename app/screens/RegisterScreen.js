import * as Yup from 'yup'

import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms'
import { Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import ActivityIndicator from '../components/ActivityIndicator'
import Screen from '../components/Screen'
import authApi from '../api/auth'
import useApi from '../hooks/useApi'
import useAuth from '../auth/useAuth'
import usersApi from '../api/users'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
})

function RegisterScreen(props) {
    const registerApi = useApi(usersApi.register)
    const loginApi = useApi(authApi.login)
    const auth = useAuth()
    const [error, setError] = useState()

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo)

        if (!result.ok) {
            if (result.data) setError(result.data.error)
            else {
                setError('An unexpected error occured')
                console.log(result)
            }
            return
        }

        const { data: authToken } = await loginApi.request(userInfo.email, userInfo.password)
        auth.logIn(authToken)
    }

    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <AppForm
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="forum"
                        name="name"
                        placeholder="Name"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        placeholder="Password"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        textContentType="password"
                        secureTextEntry
                    />
                    <SubmitButton title="Submit" />
                </AppForm>
            </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
})

export default RegisterScreen
