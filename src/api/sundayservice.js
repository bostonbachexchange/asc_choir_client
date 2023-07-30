import apiUrl from '../apiConfig'
import axios from 'axios'
import NewsApp from '../components/tesla'

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

export const updateService = (user, newService, service, fileName) => {
	console.log("!!!!!  newService: ", service._id)
	const formData = new FormData();
    formData.append('service', JSON.stringify(newService));
    formData.append('file', fileName);
	return axios({
		url: `${apiUrl}/sundayservice/${service._id}`,
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