import axios from "axios"

const ApiPokeList = (() => {
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_POKE_API
    });

    return api
})

export default ApiPokeList()

