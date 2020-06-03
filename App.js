import React, { Component } from "react"
import { View } from "react-native"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import ViewImageScreen from "./app/screens/ViewImageScreen"
import LearningAssets from "./app/learningAssets/StylingText"
import AppButton from "./app/components/AppButton"
import Card from "./app/components/Card"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
import MessagesScreen from "./app/screens/MessagesScreen"
import Screen from "./app/components/Screen"
import Icon from "./app/components/Icon"
import ListItem from "./app/components/ListItem"

export default function App() {
    return (
        <Screen>
            <ListItem
                title="My title"
                subTitle="Mu subtitle"
                ImageComponent={<Icon name="email" />}
            />
        </Screen>
    )
}
