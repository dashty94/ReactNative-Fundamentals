import { AsyncStorage, Button, Text } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'

import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'
import OfflineNotice from './app/components/OfflineNotice'
import React from 'react'
import Screen from './app/components/Screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import navigationTheme from './app/navigation/navigationTheme'

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Link />
    </Screen>
)

const Link = () => {
    const navigation = useNavigation()

    return <Button title="Click" onPress={() => navigation.navigate('TweetDetails', { id: 1 })} />
}

const TweetDetails = ({ route }) => (
    <Screen>
        <Text>Tweet Detail- {route.params.id}</Text>
    </Screen>
)

const Stack = createStackNavigator()

const StackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: 'tomato' },
            headerShown: false,
        }}
    >
        <Stack.Screen name="Tweet" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
)

const Account = () => {
    return (
        <Screen>
            <Text> Account</Text>
        </Screen>
    )
}

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeBackgroundColor: 'tomato',
                activeTintColor: 'white',
            }}
        >
            <Tab.Screen name="Feed" component={StackNavigator} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}

export default function App() {
    const unsubscribe = NetInfo.addEventListener((NetInfo) => console.log(NetInfo))

    const netInfo = useNetInfo()

    const demo = async () => {
        try {
            await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }))
            const value = await AsyncStorage.getItem('person')
            const person = JSON.parse(value)
            console.log(person)
        } catch (error) {
            console.log(error)
        }
    }

    demo()

    return (
        <>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme}>
                <AppNavigator />
            </NavigationContainer>
        </>
    )
}
