import ListingDetailsScreen from '../screens/ListingDetailsScreen'
import ListingsScreen from '../screens/ListingsScreen'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const FeedNavigator = () => (
    <Stack.Navigator mode="modal" headerMode="none" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen
            name="ListingDetails"
            options={{ cardStyle: { backgroundColor: 'transparent', opacity: 0.97 } }}
            component={ListingDetailsScreen}
        />
    </Stack.Navigator>
)

export default FeedNavigator
