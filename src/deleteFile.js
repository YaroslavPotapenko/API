import axios from 'axios';
import Auth from './Authorization.js';

async function deleteFile() {

    try {
        const response = await axios(Auth.deleteFileOptions());
        return response.status;

    } catch (error) {
        return error;
    }
}

export default { deleteFile };