import axios from 'axios';
import data from '../data/data.js'

async function uploadFile() {

    try {
        const response = await axios({
            method: 'post',
            url: 'https://content.dropboxapi.com/2/files/upload',
            params: {
                authorization : `Bearer ${data.accessToken}`,
                arg : {
                    "path": "/Homework/math/Matrices.txt",
                    "mode": "add",
                    "autorename": true,
                    "mute": false,
                    "strict_conflict": false
                },
            },
            headers: {
                "Content-type": "application/octet-stream"
            }
        });
        return response.status;
    } catch (error) {
        return error;
    }
}

export default { uploadFile };