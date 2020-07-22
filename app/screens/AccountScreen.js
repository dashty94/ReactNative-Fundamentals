import { FlatList, StyleSheet, View } from 'react-native'
import { ListItem, ListItemSeperator } from '../components/lists'

import Icon from '../components/Icon'
import React from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'
import routes from '../navigation/routes'
import useAuth from '../auth/useAuth'

const menuItems = [
    {
        title: 'My listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        },
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        },
        targetScreen: routes.MESSAGES,
    },
]

function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth()

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title={user.name} subTitle={user.email} image={require('../assets/user.png')} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeperator}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffee66" />}
                onPress={() => logOut()}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    },
})

export default AccountScreen
