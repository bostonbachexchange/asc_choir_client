import apiUrl from '../apiConfig'
import axios from 'axios'


// export const createRecording = (user, recordingId, fileName, recording) => {
//     console.log("filename?!!?!?!", fileName)
//     console.log("recording?!!?!?!", recording)
//     const formData = new FormData();
//     // Append the recording object as a separate field (not JSON stringified)
//     formData.append('newRecording', recording);
    
//     // Append the audio file
//     formData.append('file', fileName);
// 	return axios({
// 		url: `${apiUrl}/create-recordings/${recordingId}`,
// 		method: 'POST',
// 		headers: {
// 			Authorization: `Token token=${user.token}`,
// 		},
// 		data: formData,
// 	})
// }

export const createRecording = (user, recordingId, formData) => {
    return axios({
        url: `${apiUrl}/create-recordings/${recordingId}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
        data: formData,
    });
};

export const updateRecording = (user, songId, recordingId, recording, fileName) => {
    console.log('this is recording', recording)
    const formData = new FormData();
    formData.append('recording', JSON.stringify(recording));
    formData.append('file', fileName);
	return axios({
		url: `${apiUrl}/songs/${songId}/${recordingId}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: formData,
	})
}

export const removeRecordings = (user, songId, recordingId) => {
    return axios({
        url: `${apiUrl}/recordings/${songId}/${recordingId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}