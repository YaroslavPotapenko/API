import axios from 'axios';
import data from '../data/data.js'

async function deleteFile() {

    try {
        const response = await axios({
            method: 'post',
            url: 'https://api.dropboxapi.com/2/files/delete_v2',
            params: {
                authorization : `Bearer ${data.accessToken}`
            },
            headers: {
                "Content-type": "application/json"
            },
            data: {
                "path": "/Homework/math/Matrices.txt"
            } 
        });
        return response.status;

    } catch (error) {
        // console.error(error);
        return error;
    }
}

export default { deleteFile };