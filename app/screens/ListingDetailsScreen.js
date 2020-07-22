import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'

import AppText from '../components/AppText'
import ContactSellerForm from '../components/ContactSellerForm'
import { Image } from 'react-native-expo-image-cache'
import { ListItem } from '../components/lists'
import React from 'react'
import colors from '../config/colors'

function ListingDetailsScreen({ route }) {
    const listing = route.params
    return (
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
            <Image
                uri={listing.images[0].url}
                preview={{ uri: listing.images[0].thumbnailUrl }}
                tint="light"
                style={styles.image}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem image={require('../assets/dashty.jpg')} title="Dashty Frya" subTitle="5 Listings" />
                </View>
                <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 50,
    },
})

export default ListingDetailsScreen
