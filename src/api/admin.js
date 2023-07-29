import apiUrl from '../apiConfig'
import axios from 'axios'

export const getUserAccounts = () => {
    return axios(`${apiUrl}/user-contacts`)
}

