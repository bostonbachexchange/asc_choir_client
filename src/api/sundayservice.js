import apiUrl from '../apiConfig'
import axios from 'axios'

export const getSundayService= () => {
    return axios(`${apiUrl}/sundayservice`)
}

export const getOneService = (id) => {
    return axios(`${apiUrl}/sundayservice/${id}`)
}

export const createService = (user, newService, fileName) => {
	const formData = new FormData();
    formData.append('service', JSON.stringify(newService));
    formData.append('file', fileName);
	return axios({
		url: apiUrl + '/sundayservice',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
			'Content-Type': 'multipart/form-data;boundary="boundary"',

		},
		data: formData,
	})
}

export const updateService = (user, newService, fileName) => {
	const formData = new FormData();
    formData.append('service', JSON.stringify(newService));
    formData.append('file', fileName);
	return axios({
		url: `${apiUrl}/sundayservice/${newService._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: formData,
	})
}

export const removeService = (user, messageId) => {
    return axios({
        url: `${apiUrl}/sundayservice/${messageId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}