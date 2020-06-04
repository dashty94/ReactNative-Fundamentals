import { Image, StyleSheet, View } from "react-native"

import AppText from "../components/AppText"
import { ListItem } from "../components/lists"
import React from "react"
import colors from "../config/colors"

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image
                source={require("../assets/chair.jpg")}
                style={styles.image}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/dashty.jpg")}
                        title="Dashty Frya"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 50,
    },
})

export default ListingDetailsScreen
