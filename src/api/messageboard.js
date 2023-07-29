import apiUrl from '../apiConfig'
import axios from 'axios'

export const getMessageBoard = () => {
    return axios(`${apiUrl}/messageboard`)
}

export const getOneMessage = (id) => {
    return axios(`${apiUrl}/messageboard/${id}`)
}

export const createMessage = (user, newMessage, fileName) => {
	const formData = new FormData();
    formData.append('message', JSON.stringify(newMessage));
    formData.append('file', fileName);
	return axios({
		url: apiUrl + '/messageboard',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: formData,
	})
}

export const updateMessage = (user, updatedMessage, fileName) => {
	const formData = new FormData();
    formData.append('message', JSON.stringify(updatedMessage));
    formData.append('file', fileName);
	return axios({
		url: `${apiUrl}/messageboard/${updatedMessage._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: formData,
	})
}

export const removeMessage = (user, messageId) => {
    console.log('here is the messageId in delete', messageId)
    return axios({
        url: `${apiUrl}/messageboard/${messageId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}