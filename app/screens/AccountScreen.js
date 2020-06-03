import React from "react"
import Screen from "../components/Screen"
import ListItem from "../components/ListItem"
import Icon from "../components/Icon"
import { StyleSheet, View, FlatList } from "react-native"
import colors from "../config/colors"
import ListItemSeperator from "../components/ListItemSeperator"

const menuItems = [
    {
        title: "My listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
    },
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Dashty Frya"
                    subTitle="dashty.fr@gmail.com"
                    image={require("../assets/dashty.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeperator}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="Logout" backgroundColor="#ffee66" />}
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
