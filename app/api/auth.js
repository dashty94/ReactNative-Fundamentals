import clinet from './client'

const login = (email, password) => clinet.post('/auth', { email, password })

export default {
    login,
}
