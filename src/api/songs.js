import apiUrl from '../apiConfig'
import axios from 'axios'

//new get all songs?
export const getSongs = () => {
    return axios(`${apiUrl}/songs`)
}
export const getAllSongs = () => {
    return axios(`${apiUrl}/choralsongs`)
}
export const getCRSongs = () => {
    return axios(`${apiUrl}/choralresponses`)
}
export const getStjSongs = () => {
    return axios(`${apiUrl}/singingthejourney`)
}

export const getStltSongs = () => {
    return axios(`${apiUrl}/singingthelivingtradition`)
}

export const getOneSong = (id) => {
    return axios(`${apiUrl}/songs/${id}`)
}

export const createSong = (user, newSong, fileName) => {
	const formData = new FormData();
    formData.append('song', JSON.stringify(newSong));
    formData.append('file', fileName);
	return axios({
		url: apiUrl + '/create-song',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
			'Content-Type': 'multipart/form-data;boundary="boundary"',
		},
		data: formData,
	})
}


export const updateSong = (user, song, newSong) => {
	return axios({
		url: `${apiUrl}/songs/${song._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { song: newSong},
	})
}

export const addSongToUser = (user, songId) => {
	return axios({
		url: `${apiUrl}/user/${songId}/${user._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}
export const deleteSongfromUser = (user, songId) => {
	return axios({
		url: `${apiUrl}/user/${songId}/${user._id}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const removeSong = (user, songId) => {
    return axios({
        url: `${apiUrl}/songs/${songId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}