import { useState } from 'react'

export default useApi = (apiFunc) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoaading] = useState(false)

    const request = async (...args) => {
        setLoaading(true)
        const response = await apiFunc(...args)
        setLoaading(false)

        setError(!response.ok)
        setData(response.data)
        return response
    }

    return { data, error, loading, request }
}
