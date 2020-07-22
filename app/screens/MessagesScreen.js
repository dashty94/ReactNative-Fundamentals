import { FlatList, StyleSheet } from 'react-native'
import { ListItem, ListItemDeleteAction, ListItemSeperator } from '../components/lists'
import React, { useCallback, useEffect, useState } from 'react'

import MessagesApi from '../api/messages'
import Screen from '../components/Screen'
import routes from '../navigation/routes'

function MessagesScreen({ navigation }) {
    const { data: messages, error, loading, request: loadMessages } = useApi(MessagesApi.getLMessagesForUser)
    // const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        loadMessages()
    }, [])

    const wait = (timeout) => {
        return new Promise((resolve) => {
            setTimeout(resolve, timeout)
        })
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true)

        wait(2000).then(() => {
            setRefreshing(false)
            loadMessages()
        })
    }, [])

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.fromUser.name}
                        subTitle={item.content}
                        image={item.image}
                        onPress={() => navigation.navigate(routes.MESSAGE_DETAILS, item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({})

export default MessagesScreen
