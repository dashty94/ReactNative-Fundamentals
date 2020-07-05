import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

import ActivityIndicator from '../components/ActivityIndicator'
import AppText from '../components/AppText'
import Button from '../components/AppButton'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import routes from '../navigation/routes'
import useApi from '../hooks/useApi'

function ListingsScreen({ navigation }) {
    const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings)

    useEffect(() => {
        loadListings()
    }, [])

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.screen}>
                {error && (
                    <>
                        <AppText>Couldn't retrieve listings</AppText>
                        <Button title="Retry" onPress={loadListings} />
                    </>
                )}
                <FlatList
                    data={listings}
                    keyExtractor={(listings) => listings.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            subTtitle={'$ ' + item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    )}
                />
            </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
})

export default ListingsScreen
