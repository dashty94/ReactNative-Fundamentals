import * as Yup from "yup"

import { Image, StyleSheet } from "react-native"

import AppButton from "../components/AppButton"
import AppText from "../components/AppText"
import AppTextInput from "../components/AppTextInput"
import ErrorMessage from "../components/ErrorMessage"
import { Formik } from "formik"
import React from "react"
import Screen from "../components/Screen"

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput
                            placeholder="Email"
                            icon="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            textContentType="emailAddress"
                        />
                        <ErrorMessage error={errors.email} />
                        <AppTextInput
                            autoCapitalize="none"
                            placeholder="Password"
                            autoCorrect={false}
                            icon="lock"
                            textContentType="password"
                            onChangeText={handleChange("password")}
                            secureTextEntry
                        />
                        <ErrorMessage error={errors.password} />
                        <AppButton title="login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
})

export default LoginScreen
