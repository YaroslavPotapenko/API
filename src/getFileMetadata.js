import axios from 'axios';
import data from '../data/data.js'

async function getFileMetadata() {

    try {
        const response = await axios({
            method: 'post',
            url: 'https://api.dropboxapi.com/2/files/get_metadata',
            params: {
                authorization : `Bearer ${data.accessToken}`
            },
            headers: {
                "Content-type": "application/json"
            },
            data: {
                "path": "/Homework/math",
                "include_media_info": false,
                "include_deleted": false,
                "include_has_explicit_shared_members": false
            } 
        });
        return response.status;

    } catch (error) {
        return error;
    }
}

export default { getFileMetadata };