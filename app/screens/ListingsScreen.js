import { FlatList, StyleSheet } from "react-native"

import Card from "../components/Card"
import React from "react"
import Screen from "../components/Screen"
import colors from "../config/colors"
import routes from "../navigation/routes"

const listings = [
    {
        id: 1,
        title: "Chair for sail",
        price: 100,
        image: require("../assets/chair.jpg"),
    },
    {
        id: 2,
        title: "Car for sail",
        price: 10000,
        image: require("../assets/chair.jpg"),
    },
]

function ListingsScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listings) => listings.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTtitle={"$ " + item.price}
                        image={item.image}
                        onPress={() =>
                            navigation.navigate(routes.LISTING_DETAILS, item)
                        }
                    />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
})

export default ListingsScreen
