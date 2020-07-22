import client from './client'

const endpoint = '/messages'

const getLMessagesForUser = () => client.get(endpoint)

const send = (message, listingId) => {
    client.post(endpoint, {
        message,
        listingId,
    })
}

export default {
    send,
    getLMessagesForUser,
}
