import apiUrl from '../apiConfig'
import axios from 'axios'

export const getUserAccounts = () => {
    console.log("getUserAccounts was hit")
    return axios(`${apiUrl}/user-contacts`)
}