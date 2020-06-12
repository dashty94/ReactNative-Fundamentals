import { Button, Text } from "react-native"
import { NavigationContainer, useNavigation } from "@react-navigation/native"

import React from "react"
import Screen from "./app/components/Screen"
import { createStackNavigator } from "@react-navigation/stack"

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Link />
    </Screen>
)

const Link = () => {
    const navigation = useNavigation()

    return (
        <Button
            title="Click"
            onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
        />
    )
}

const TweetDetails = ({ route }) => (
    <Screen>
        <Text>Tweet Detail- {route.params.id}</Text>
    </Screen>
)

const Stack = createStackNavigator()

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Tweet" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
)

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
